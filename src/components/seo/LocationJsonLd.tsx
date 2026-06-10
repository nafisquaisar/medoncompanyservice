/* ── Location Page Structured Data (JSON-LD) ─────── */
/* Outputs: BreadcrumbList + LocalBusiness + FAQPage  */

import type { LocationPageData } from "@/data/locations";
import {
  SITE_URL,
  SITE_PHONE_SCHEMA,
  SITE_ADDRESS,
} from "@/config/site";

interface LocationJsonLdProps {
  location: LocationPageData;
}

export default function LocationJsonLd({ location }: LocationJsonLdProps) {
  const url = `${SITE_URL}/${location.slug}`;

  /*
   * Strip leading prepositions from heroHighlight to get a clean area name.
   * e.g. "in Mahipalpur" → "Mahipalpur" | "Near Delhi Airport" → "Delhi Airport"
   */
  const locationName = location.heroHighlight
    .replace(/^(in|near|across)\s+/i, "")
    .trim();

  /* ── Breadcrumb Schema ──────────────────── */
  /*
   * Only 2 levels: Home → Location page.
   * Reason: there is no /locations index page in this project.
   * Adding a fake "Locations" middle item pointing to the homepage
   * creates a duplicate breadcrumb entry, which Google flags as invalid.
   */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Appliance Repair in ${locationName}`,
        item: url,
      },
    ],
  };

  /* ── Location-specific LocalBusiness Schema ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Medon Company – ${locationName}`,
    description: location.metaDescription,
    url,
    telephone: SITE_PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      ...SITE_ADDRESS,
    },
    areaServed: [
      { "@type": "Place", name: locationName },
      ...location.nearbyAreas.map((area) => ({
        "@type": "Place",
        name: area.name,
      })),
    ],
    /*
     * Cross-reference to the primary entity declared in JsonLd.tsx.
     * @id must match LOCAL_BUSINESS["@id"] exactly: ${SITE_URL}/#business
     */
    parentOrganization: {
      "@id": `${SITE_URL}/#business`,
    },
  };

  /* ── FAQ Schema ─────────────────────────── */
  const faqSchema =
    location.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
