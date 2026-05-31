/* ── Location Page Structured Data (JSON-LD) ─────── */
/* Outputs: BreadcrumbList + FAQPage schemas */

import type { LocationPageData } from "@/data/locations";

const BASE_URL = "https://medoncompany.com";

interface LocationJsonLdProps {
  location: LocationPageData;
}

export default function LocationJsonLd({ location }: LocationJsonLdProps) {
  const url = `${BASE_URL}/${location.slug}`;
  const locationName = location.heroHighlight
    .replace(/^in\s+|^Near\s+|^Across\s+/i, "")
    .trim();

  /* ── Breadcrumb Schema ──────────────────── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Appliance Repair in ${locationName}`,
        item: url,
      },
    ],
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

  /* ── LocalBusiness (location-specific) ──── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Medon Company – ${locationName}`,
    description: location.metaDescription,
    url,
    telephone: "+917303637086",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No, L-3, Street Number 1, L block, Mahipalpur Village",
      addressLocality: "Mahipalpur",
      addressRegion: "Delhi",
      postalCode: "110037",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Place", name: locationName },
      ...location.nearbyAreas.map((area) => ({
        "@type": "Place",
        name: area.name,
      })),
    ],
    parentOrganization: {
      "@id": `${BASE_URL}/#business`,
    },
  };

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
