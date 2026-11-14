/**
 * ─────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — Site Configuration
 *  All domain/URL references across the entire project MUST import
 *  from this file. Never hardcode the domain anywhere else.
 * ─────────────────────────────────────────────────────────────────
 */

/** Canonical production domain — non-www, HTTPS only */
export const SITE_URL = "https://medoncompany.in";

/** Human-readable brand name */
export const SITE_NAME = "Medon Company";

/** Default site description (used in global metadata and schema).
 *  Leads with Mahipalpur — primary HQ location — for local SEO authority. */
export const SITE_DESCRIPTION =
  "Medon Company is headquartered in Mahipalpur, New Delhi — providing expert AC repair, refrigerator service, electrical & geyser repair in Mahipalpur, Aerocity, Vasant Kunj, Rangpuri, IGI Airport, Vasant Vihar, Kishangarh, Munirka and nearby areas. Verified technicians, transparent pricing, same-hour service.";

/** Primary contact phone (Delhi HQ) */
export const SITE_PHONE_SCHEMA = "+917303637086";
export const SITE_PHONE_DISPLAY = "+91 7303637086";

/** Branch contact phone (Samastipur, Bihar) */
export const SITE_PHONE_SAMASTIPUR_SCHEMA = "+917678328875";
export const SITE_PHONE_SAMASTIPUR_DISPLAY = "+91 7678328875";

/** Primary contact email */
export const SITE_EMAIL = "Medoncompany@gmail.com";

/** Physical address details – Delhi HQ */
export const SITE_ADDRESS = {
  streetAddress: "Shop No, L-3, Street Number 1, L Block, Mahipalpur Village",
  addressLocality: "Mahipalpur",
  addressRegion: "Delhi",
  postalCode: "110037",
  addressCountry: "IN",
} as const;

/** Physical address details – Samastipur Branch */
export const SITE_ADDRESS_SAMASTIPUR = {
  streetAddress: "M.Hussain Market, Musrigharari",
  addressLocality: "Samastipur",
  addressRegion: "Bihar",
  postalCode: "848101",
  addressCountry: "IN",
} as const;

/** Default OG/Twitter share image — must exist in /public/img/ */
export const OG_IMAGE = `${SITE_URL}/img/webbanner.png`;

/** Square logo for Schema.org logo field (112×112px minimum) */
export const SITE_LOGO = `${SITE_URL}/img/logo.png`;
