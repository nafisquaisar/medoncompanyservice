"use client";

/* ── Meta Pixel ───────────────────────────────────────────────────────────────
   Future-ready stub. Activates automatically once NEXT_PUBLIC_META_PIXEL_ID
   is set in .env.local.

   To enable:
     1. Go to Meta Business Manager → Events Manager → Pixels
     2. Copy your Pixel ID
     3. Set NEXT_PUBLIC_META_PIXEL_ID=<your-id> in .env.local
     4. Add <MetaPixel /> in layout.tsx (already imported but commented out)

   Events tracked automatically:
     • PageView  — on every route change
     • Lead      — call trackPixelLead() from your form/CTA components
   ──────────────────────────────────────────────────────────────────────────── */

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

/** Fire a custom Meta Pixel event (call from CTA components when Pixel is active). */
export function trackPixelLead(contentName?: string): void {
  if (typeof window === "undefined" || !window.fbq || !PIXEL_ID) return;
  window.fbq("track", "Lead", { content_name: contentName ?? "medon_service" });
}

export default function MetaPixel() {
  const pathname = usePathname();

  /* Track route changes as PageView */
  useEffect(() => {
    if (!PIXEL_ID || !window.fbq) return;
    window.fbq("track", "PageView");
  }, [pathname]);

  if (!PIXEL_ID) return null;

  return (
    <>
      {/* Meta Pixel base code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* NoScript fallback */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
