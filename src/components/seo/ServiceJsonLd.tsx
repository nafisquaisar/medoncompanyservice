/* ── Service Page Structured Data (JSON-LD) ────────── */
/* Outputs: BreadcrumbList + Service + FAQPage schemas  */

import type { ServicePageData } from "@/data/services";
import {
  SITE_URL,
  SITE_PHONE_SCHEMA,
  SITE_ADDRESS,
} from "@/config/site";

interface ServiceJsonLdProps {
  service: ServicePageData;
}

/**
 * Extracts the minimum numeric price from a price string like:
 *   "₹1,499–₹2,999"  → "1499"
 *   "₹2,500+"        → "2500"
 *   "₹299"           → "299"
 * Returns "199" as a fallback if no digits are found.
 */
function extractMinPrice(priceStr: string): string {
  const match = priceStr.match(/[\d,]+/);
  if (!match) return "199";
  return match[0].replace(/,/g, "");
}

export default function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const url = `${SITE_URL}/${service.slug}`;

  /* ── Breadcrumb Schema ──────────────────── */
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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: url,
      },
    ],
  };

  /* ── Service Schema ─────────────────────── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url,
    provider: {
      "@type": "LocalBusiness",
      /*
       * @id cross-references the primary entity declared in JsonLd.tsx.
       * Must match LOCAL_BUSINESS["@id"] exactly: ${SITE_URL}/#business
       */
      "@id": `${SITE_URL}/#business`,
      name: "Medon Company",
      telephone: SITE_PHONE_SCHEMA,
      address: {
        "@type": "PostalAddress",
        ...SITE_ADDRESS,
      },
    },
    areaServed: {
      "@type": "City",
      name: "New Delhi",
    },
    offers: service.pricing.map((p) => ({
      "@type": "Offer",
      name: p.service,
      /*
       * Extract the minimum price value from strings like "₹1,499–₹2,999".
       * The full range is preserved in the description field.
       */
      price: extractMinPrice(p.price),
      priceCurrency: "INR",
      description: p.note ? `${p.price} — ${p.note}` : p.price,
    })),
  };

  /* ── FAQ Schema ─────────────────────────── */
  const faqSchema =
    service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
