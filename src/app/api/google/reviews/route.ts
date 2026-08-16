import { NextRequest } from "next/server";
import { cookies } from "next/headers";

/*
 * GET /api/google/reviews
 * ─────────────────────────────────────────────────────────────────────────
 * Server-side route that:
 *  1. Reads the GBP access token from the httpOnly cookie
 *     (or falls back to GOOGLE_REFRESH_TOKEN env var to auto-refresh)
 *  2. Fetches the list of Business Profile accounts
 *  3. Finds the Medon Company account / location
 *  4. Fetches and returns the real Google Business Profile reviews
 *
 * All API calls are server-side. No token is returned to the browser.
 * Returns sanitized review data only.
 */

export const dynamic = "force-dynamic";

const GBP_ACCOUNTS_URL =
  "https://mybusinessaccountmanagement.googleapis.com/v1/accounts";
const GBP_LOCATIONS_BASE =
  "https://mybusinessbusinessinformation.googleapis.com/v1";

/* ── Token helpers ─────────────────────────────────────────────────── */

async function getAccessToken(): Promise<string | null> {
  // 1. Try cookie-stored token (set after OAuth flow)
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get("gbp_access_token")?.value;
  if (cookieToken) return cookieToken;

  // 2. Fall back to env-var refresh token for persistent/build-time use
  const refreshToken =
    process.env.GOOGLE_REFRESH_TOKEN ??
    cookieStore.get("gbp_refresh_token")?.value;

  if (!refreshToken) return null;

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) return null;
  const data = await res.json() as { access_token?: string };
  return data.access_token ?? null;
}

/* ── Main handler ──────────────────────────────────────────────────── */

export async function GET(_req: NextRequest) {
  // ── Step 1: Get access token ─────────────────────────────────────
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return Response.json(
      {
        error: "Not authenticated. Visit /api/google/oauth to authorize.",
        reviews: [],
      },
      { status: 401 }
    );
  }

  const authHeader = { Authorization: `Bearer ${accessToken}` };

  // ── Step 2: Fetch GBP accounts ───────────────────────────────────
  const accountsRes = await fetch(GBP_ACCOUNTS_URL, { headers: authHeader });

  if (!accountsRes.ok) {
    const errText = await accountsRes.text();
    console.error("[GBP Reviews] Accounts fetch failed:", errText);
    return Response.json(
      { error: "Failed to fetch Google Business Profile accounts.", details: errText },
      { status: 502 }
    );
  }

  const accountsData = await accountsRes.json() as {
    accounts?: Array<{ name: string; accountName: string; type: string }>;
  };

  const accounts = accountsData.accounts ?? [];

  if (accounts.length === 0) {
    return Response.json({ error: "No GBP accounts found.", reviews: [] }, { status: 404 });
  }

  // ── Step 3: Find Medon Company account ──────────────────────────
  // Use the first account, or find one matching "medon"
  const account =
    accounts.find((a) =>
      a.accountName?.toLowerCase().includes("medon")
    ) ?? accounts[0];

  const accountName = account.name; // e.g. "accounts/123456789"

  // ── Step 4: Fetch locations under this account ───────────────────
  const locationsRes = await fetch(
    `${GBP_LOCATIONS_BASE}/${accountName}/locations?readMask=name,title,storeCode`,
    { headers: authHeader }
  );

  if (!locationsRes.ok) {
    const errText = await locationsRes.text();
    console.error("[GBP Reviews] Locations fetch failed:", errText);
    return Response.json(
      { error: "Failed to fetch locations.", details: errText },
      { status: 502 }
    );
  }

  const locationsData = await locationsRes.json() as {
    locations?: Array<{ name: string; title?: string }>;
  };

  const locations = locationsData.locations ?? [];

  if (locations.length === 0) {
    return Response.json({ error: "No locations found for this account.", reviews: [] }, { status: 404 });
  }

  // Use first location (Medon Company has one shop)
  const location = locations[0];
  const locationName = location.name; // e.g. "accounts/123/locations/456"

  // ── Step 5: Fetch reviews for this location ───────────────────────
  const reviewsRes = await fetch(
    `https://mybusiness.googleapis.com/v4/${locationName}/reviews?pageSize=50`,
    { headers: authHeader }
  );

  if (!reviewsRes.ok) {
    const errText = await reviewsRes.text();
    console.error("[GBP Reviews] Reviews fetch failed:", errText);
    return Response.json(
      {
        error: "Failed to fetch reviews. Ensure the Business Profile API is enabled.",
        details: errText,
      },
      { status: 502 }
    );
  }

  const reviewsData = await reviewsRes.json() as {
    reviews?: Array<{
      reviewId: string;
      reviewer: { displayName: string; profilePhotoUrl?: string };
      starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
      comment?: string;
      createTime: string;
      updateTime: string;
      reviewReply?: { comment: string; updateTime: string };
    }>;
    averageRating?: number;
    totalReviewCount?: number;
  };

  // ── Step 6: Sanitize and return reviews (no tokens exposed) ──────
  const STAR_MAP: Record<string, number> = {
    ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5,
  };

  const sanitizedReviews = (reviewsData.reviews ?? []).map((r) => ({
    id: r.reviewId,
    author: r.reviewer.displayName,
    avatarUrl: r.reviewer.profilePhotoUrl ?? null,
    rating: STAR_MAP[r.starRating] ?? 0,
    comment: r.comment ?? "",
    date: r.createTime,
    reply: r.reviewReply?.comment ?? null,
  }));

  return Response.json({
    location: location.title ?? locationName,
    totalReviews: reviewsData.totalReviewCount ?? sanitizedReviews.length,
    averageRating: reviewsData.averageRating ?? null,
    reviews: sanitizedReviews,
  });
}
