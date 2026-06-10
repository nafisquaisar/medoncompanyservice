/* ── Medon Company Analytics Utility ──────────────────────────────────────────────────
   Central place for all GA4 event calls.
   • All functions are server-safe (typeof window guard).
   • Use the useAnalytics() hook in components — don't call these directly.
   • Self-contained types — no @types/gtag.js dependency needed.
   ──────────────────────────────────────────────────────────────────────────── */

/* ── Inline gtag types (avoids needing @types/gtag.js) ────────────────────── */
type GtagCommand = "config" | "event" | "js" | "set" | "get" | "consent";
type GtagParams = Record<string, unknown>;
type GtagFn = (command: GtagCommand, targetOrEventName: string, params?: GtagParams) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/* ── GA4 Measurement ID ────────────────────────────────────────────────────── */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/* ── Guard: only runs in browser ──────────────────────────────────────────── */
const isClient = () => typeof window !== "undefined";

/* ── Low-level event dispatcher ───────────────────────────────────────────── */
export function gtagEvent(
  eventName: string,
  params?: GtagParams
): void {
  if (!isClient() || !window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag("event", eventName, params);
}

/* ── Page view (used by GoogleAnalytics component on route change) ─────────── */
export function gtagPageView(url: string): void {
  if (!isClient() || !window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   NAMED CTA EVENTS
   All use GA4 recommended event names for automatic conversion detection.
   ═══════════════════════════════════════════════════════════════════════════ */

/**
 * Fire when a user clicks any phone call CTA.
 * Maps to GA4 "generate_lead" (auto-marked as conversion).
 */
export function trackCall(location?: string): void {
  gtagEvent("generate_lead", {
    method: "phone_call",
    event_category: "cta",
    event_label: location ?? "generic",
  });
  // Secondary event for granular reporting
  gtagEvent("click_call", {
    event_category: "engagement",
    event_label: location ?? "generic",
  });
}

/**
 * Fire when a user clicks any WhatsApp CTA.
 */
export function trackWhatsApp(location?: string): void {
  gtagEvent("generate_lead", {
    method: "whatsapp",
    event_category: "cta",
    event_label: location ?? "generic",
  });
  gtagEvent("click_whatsapp", {
    event_category: "engagement",
    event_label: location ?? "generic",
  });
}

/**
 * Fire when a user clicks a "Book Service" / scroll-to-contact CTA.
 */
export function trackBooking(location?: string): void {
  gtagEvent("generate_lead", {
    method: "book_service",
    event_category: "cta",
    event_label: location ?? "generic",
  });
  gtagEvent("click_booking", {
    event_category: "engagement",
    event_label: location ?? "generic",
  });
}

/**
 * Fire on successful form submission.
 * @param serviceName  Optional service name for segmentation (e.g. "AC Repair").
 */
export function trackFormSubmit(serviceName?: string): void {
  gtagEvent("form_submit", {
    event_category: "conversion",
    event_label: serviceName ?? "contact_form",
  });
  // Explicit conversion ping
  gtagEvent("conversion", {
    send_to: GA_MEASUREMENT_ID,
    event_label: serviceName ?? "contact_form",
  });
}
