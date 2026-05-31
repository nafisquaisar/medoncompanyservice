/* ── Service Page Structured Data (JSON-LD) ────────── */
/* Outputs: BreadcrumbList + Service + FAQPage schemas */

import type { ServicePageData } from "@/data/services";

const BASE_URL = "https://medoncompany.com";

interface ServiceJsonLdProps {
  service: ServicePageData;
}

export default function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const url = `${BASE_URL}/${service.slug}`;

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
        name: "Services",
        item: `${BASE_URL}/services`,
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
      "@id": `${BASE_URL}/#business`,
      name: "Medon Company",
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
    },
    areaServed: {
      "@type": "City",
      name: "New Delhi",
    },
    offers: service.pricing.map((p) => ({
      "@type": "Offer",
      name: p.service,
      price: p.price.replace(/[^\d]/g, "").slice(0, -1) || "199",
      priceCurrency: "INR",
      description: p.note || p.service,
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
