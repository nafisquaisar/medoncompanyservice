"use client";

/* ── Google Tag Manager ───────────────────────────────────────────────────────
   Renders the GTM script tag (head) and a <noscript> iframe (body).

   Usage in layout.tsx:
     import { GoogleTagManager, GTMNoScript } from "@/components/analytics/GoogleTagManager";
     // In <body> (first child): <GTMNoScript />
     // Anywhere in <body>:     <GoogleTagManager />

   • Only mounts when NEXT_PUBLIC_GTM_ID is set.
   • strategy="afterInteractive" — recommended for tag managers per Next.js docs.
   ──────────────────────────────────────────────────────────────────────────── */

import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/* ── GTM Script (head equivalent via afterInteractive) ────────────────────── */
export default function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <Script
      id="gtm-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
}

/* ── GTM NoScript fallback (place as first child of <body>) ───────────────── */
/* This is a Server Component — no "use client" needed here */
export function GTMNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
