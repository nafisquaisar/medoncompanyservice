import { NextRequest } from "next/server";
import { cookies } from "next/headers";

/*
 * GET /api/google/status
 * ─────────────────────────────────────────────────────────────────────────
 * Admin-only status page. Confirms whether the Google Business Profile
 * OAuth connection is active (access token cookie is present).
 *
 * NEVER exposes the actual token value — only reports connected: true/false.
 */

export const dynamic = "force-dynamic";

export async function GET(_req: NextRequest) {
  const cookieStore = await cookies();
  const hasAccessToken = !!cookieStore.get("gbp_access_token")?.value;
  const hasRefreshToken = !!cookieStore.get("gbp_refresh_token")?.value;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Google Business Profile Status – Medon Company</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f6f9fc; min-height: 100vh;
           display: flex; align-items: center; justify-content: center; padding: 24px; }
    .card { background: white; border-radius: 16px; padding: 40px 48px; max-width: 480px;
            width: 100%; box-shadow: 0 4px 24px rgba(1,57,92,0.10); text-align: center; }
    .logo { font-size: 1.5rem; font-weight: 800; color: #01395C; margin-bottom: 24px; }
    .status { font-size: 2rem; margin-bottom: 16px; }
    h1 { font-size: 1.25rem; font-weight: 700; color: #01395C; margin-bottom: 8px; }
    p { color: #6b7280; font-size: 0.9rem; line-height: 1.6; }
    .badge { display: inline-block; padding: 4px 14px; border-radius: 99px; font-size: 0.8rem;
             font-weight: 600; margin-top: 20px; }
    .connected { background: #d1fae5; color: #065f46; }
    .disconnected { background: #fee2e2; color: #991b1b; }
    .actions { margin-top: 28px; display: flex; flex-direction: column; gap: 10px; }
    a.btn { display: block; padding: 10px 20px; border-radius: 8px; font-size: 0.875rem;
            font-weight: 600; text-decoration: none; transition: opacity 0.2s; }
    a.btn:hover { opacity: 0.85; }
    .btn-primary { background: #01395C; color: white; }
    .btn-secondary { border: 1.5px solid #01395C; color: #01395C; }
    .hint { margin-top: 24px; font-size: 0.75rem; color: #9ca3af;
            background: #f9fafb; border-radius: 8px; padding: 12px; text-align: left; }
    code { font-family: monospace; background: #e5e7eb; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">Medon Company</div>
    ${hasAccessToken
      ? `<div class="status">✅</div>
         <h1>Google Business Profile Connected</h1>
         <p>OAuth authorization completed successfully. Tokens are stored securely on the server.</p>
         <span class="badge connected">Connected</span>`
      : `<div class="status">❌</div>
         <h1>Not Connected</h1>
         <p>No active Google Business Profile session found. Start the authorization flow to connect.</p>
         <span class="badge disconnected">Disconnected</span>`
    }
    <div class="actions">
      ${hasAccessToken
        ? `<a href="/api/google/reviews" class="btn btn-primary">Fetch GBP Reviews →</a>`
        : `<a href="/api/google/oauth" class="btn btn-primary">Connect Google Business Profile →</a>`
      }
      <a href="/" class="btn btn-secondary">Return to Website</a>
    </div>
    ${hasRefreshToken
      ? `<div class="hint">
           💡 <strong>Tip:</strong> A refresh token was received. Copy <code>GOOGLE_REFRESH_TOKEN</code>
           from your server logs and add it to <code>.env.local</code> for persistent access.
         </div>`
      : ""
    }
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
