import { NextRequest } from "next/server";
import { cookies } from "next/headers";

/*
 * GET /api/google/oauth
 * ─────────────────────────────────────────────────────────────────────────
 * Initiates the Google OAuth 2.0 authorization flow for Google Business
 * Profile. Generates a CSRF-safe `state` token, stores it in an httpOnly
 * cookie, then redirects the browser to Google's consent screen.
 *
 * Required env vars:
 *   GOOGLE_CLIENT_ID
 *   GOOGLE_CLIENT_SECRET
 *   GOOGLE_REDIRECT_URI   (must match the redirect URI registered in GCP)
 */

export const dynamic = "force-dynamic";

function randomState(): string {
  // 32 cryptographically random bytes → hex string
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function GET(_req: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return new Response(
      JSON.stringify({ error: "Missing GOOGLE_CLIENT_ID or GOOGLE_REDIRECT_URI env vars." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // Generate CSRF state token
  const state = randomState();

  // Store state in httpOnly cookie (10 min TTL)
  const cookieStore = await cookies();
  cookieStore.set("gbp_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 10, // 10 minutes
    path: "/",
  });

  // Build Google OAuth 2.0 authorization URL
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "https://www.googleapis.com/auth/business.manage",
    access_type: "offline",
    prompt: "consent", // ensures refresh_token is always returned
    state,
  });

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

  return Response.redirect(authUrl, 302);
}
