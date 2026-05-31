"use client";

/* ── Web Vitals Reporter ──────────────────────────────────────────────────────
   Uses the App Router recommended useReportWebVitals hook (next/web-vitals).
   Sends CWV metrics to GA4 as non-interaction events so they don't affect
   bounce rate.

   Metrics tracked:
     CLS  – Cumulative Layout Shift     (Core Web Vital)
     LCP  – Largest Contentful Paint    (Core Web Vital)
     INP  – Interaction to Next Paint   (Core Web Vital)
     FCP  – First Contentful Paint
     TTFB – Time to First Byte

   Place this component as a direct child of <body> in layout.tsx so the
   client boundary is confined to this small component only.
   ──────────────────────────────────────────────────────────────────────────── */

import { useReportWebVitals } from "next/web-vitals";
import { GA_MEASUREMENT_ID, gtagEvent } from "@/utils/analytics";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    if (!GA_MEASUREMENT_ID) return;

    /* CLS is dimensionless — multiply by 1000 to get integer for GA4 */
    const value =
      metric.name === "CLS"
        ? Math.round(metric.value * 1000)
        : Math.round(metric.value);

    gtagEvent(metric.name, {
      value,
      event_category: "web_vitals",
      event_label: metric.id,   // unique to current page load
      non_interaction: true,    // does not affect bounce rate
    });
  });

  /* Renders nothing — purely side-effect */
  return null;
}
