import { NextRequest } from "next/server";
import { cookies } from "next/headers";

/*
 * GET /api/google/oauth/callback
 * ─────────────────────────────────────────────────────────────────────────
 * Handles Google's redirect after the user grants (or denies) access.
 *
 * Flow:
 *   1. Validate CSRF state parameter
 *   2. Exchange authorization code for access + refresh tokens
 *   3. Store tokens in httpOnly cookies (never exposed to browser JS)
 *   4. Redirect to /api/google/status
 *
 * Required env vars:
 *   GOOGLE_CLIENT_ID
 *   GOOGLE_CLIENT_SECRET
 *   GOOGLE_REDIRECT_URI
 */

export const dynamic = "force-dynamic";

const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  // ── 1. Handle user denial ────────────────────────────────────────────
  if (error) {
    return new Response(
      `<html><body><h2>Authorization denied: ${error}</h2><p><a href="/">Return home</a></p></body></html>`,
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  if (!code || !state) {
    return new Response(
      JSON.stringify({ error: "Missing code or state parameter." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // ── 2. CSRF: Validate state against stored cookie ────────────────────
  const cookieStore = await cookies();
  const storedState = cookieStore.get("gbp_oauth_state")?.value;

  if (!storedState || storedState !== state) {
    return new Response(
      JSON.stringify({ error: "Invalid state parameter. Possible CSRF attempt." }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  // Clear the state cookie immediately after use
  cookieStore.delete("gbp_oauth_state");

  // ── 3. Read env vars ─────────────────────────────────────────────────
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return new Response(
      JSON.stringify({ error: "Missing Google OAuth environment variables on server." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // ── 4. Exchange authorization code for tokens ────────────────────────
  const tokenRes = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenRes.ok) {
    const errBody = await tokenRes.text();
    console.error("[GBP OAuth callback] Token exchange failed:", errBody);
    return new Response(
      JSON.stringify({ error: "Token exchange failed. Check server logs." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  const tokenData = await tokenRes.json() as {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    token_type: string;
  };

  // ── 5. Store tokens in httpOnly cookies — NEVER expose to browser ────
  cookieStore.set("gbp_access_token", tokenData.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: tokenData.expires_in ?? 3600, // typically 1 hour
    path: "/",
  });

  if (tokenData.refresh_token) {
    cookieStore.set("gbp_refresh_token", tokenData.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    // Also log refresh token to server console so admin can copy it
    // to GOOGLE_REFRESH_TOKEN env var for persistent use.
    // This does NOT appear anywhere in the browser.
    console.log("\n✅ [GBP OAuth] Refresh token received (save to GOOGLE_REFRESH_TOKEN env var):");
    console.log("GOOGLE_REFRESH_TOKEN=" + tokenData.refresh_token);
    console.log("");
  }

  // ── 6. Redirect to status page (no tokens in URL) ────────────────────
  return Response.redirect(
    new URL("/api/google/status", req.nextUrl.origin),
    302
  );
}
