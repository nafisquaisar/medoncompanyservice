"use client";

/* ── useAnalytics ─────────────────────────────────────────────────────────────
   React hook that provides memoized analytics event handlers.
   Use this in any "use client" component instead of calling analytics.ts directly.

   Usage:
     const { onCallClick, onWhatsAppClick, onBookingClick } = useAnalytics();
     <a href="tel:..." onClick={onCallClick}>Call Now</a>
   ──────────────────────────────────────────────────────────────────────────── */

import { useCallback } from "react";
import {
  trackCall,
  trackWhatsApp,
  trackBooking,
  trackFormSubmit,
} from "@/utils/analytics";

interface UseAnalyticsOptions {
  /** Identifies where on the page the CTA lives (e.g. "service_hero", "sticky_bar"). */
  location?: string;
}

interface AnalyticsHandlers {
  /** Call button / phone link clicked */
  onCallClick: () => void;
  /** WhatsApp button clicked */
  onWhatsAppClick: () => void;
  /** "Book Service" or scroll-to-contact clicked */
  onBookingClick: () => void;
  /**
   * Form submitted successfully.
   * @param serviceName  Optional — e.g. "AC Repair Delhi"
   */
  onFormSubmit: (serviceName?: string) => void;
}

export function useAnalytics(
  options: UseAnalyticsOptions = {}
): AnalyticsHandlers {
  const { location } = options;

  const onCallClick = useCallback(() => {
    trackCall(location);
  }, [location]);

  const onWhatsAppClick = useCallback(() => {
    trackWhatsApp(location);
  }, [location]);

  const onBookingClick = useCallback(() => {
    trackBooking(location);
  }, [location]);

  const onFormSubmit = useCallback(
    (serviceName?: string) => {
      trackFormSubmit(serviceName);
    },
    []
  );

  return { onCallClick, onWhatsAppClick, onBookingClick, onFormSubmit };
}
