"use client";

/* ── Google Analytics 4 ───────────────────────────────────────────────────────
   Renders the GA4 gtag.js script pair using next/script (afterInteractive).
   Also handles SPA route-change page views via usePathname + useEffect.

   • Only mounts when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
   • Uses strategy="afterInteractive" — correct for analytics per Next.js docs.
   • Inline init script requires an `id` prop (Next.js requirement for inline scripts).
   ──────────────────────────────────────────────────────────────────────────── */

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID, gtagPageView } from "@/utils/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  /* ── Route change tracking ────────────────────────────────────────────── */
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    gtagPageView(pathname ?? "/");
  }, [pathname]);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* 1. Load the gtag.js library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        id="ga4-loader"
      />

      {/* 2. Initialise the data layer, GA4 config, and Google Ads config */}
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
            gtag('config', 'AW-11430002689');
          `,
        }}
      />
    </>
  );
}
