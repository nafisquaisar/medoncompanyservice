/* ── Medon Company – Advanced Structured Data (JSON-LD) ─── */
/* Homepage: LocalBusiness + HVACBusiness + Electrician + FAQPage + Organization */

import { HOMEPAGE_FAQS } from "@/data/homepage-faqs";
import { ALL_REVIEWS, AGGREGATE_RATING } from "@/data/reviews";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_PHONE_SCHEMA,
  SITE_EMAIL,
  SITE_ADDRESS,
  OG_IMAGE,
  SITE_LOGO,
} from "@/config/site";

/* ── Multi-type LocalBusiness + HVACBusiness Schema ───────── */
const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness", "HomeAndConstructionBusiness"],
  /*
   * @id is the canonical entity identifier Google uses for Knowledge Graph.
   * It MUST match the canonical domain (medoncompany.in — non-www).
   */
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: SITE_PHONE_SCHEMA,
  email: SITE_EMAIL,
  image: OG_IMAGE,
  /*
   * logo must be a square/near-square image (112×112px minimum).
   * Using the 1200×630 banner as logo will fail Google's validation.
   * Create /public/img/logo.png (square) and reference SITE_LOGO.
   */
  logo: SITE_LOGO,
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5494,
    longitude: 77.1171,
  },
  hasMap: "https://maps.google.com/?q=Medon+Company+Mahipalpur+Delhi",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "21:00",
  },
  priceRange: "₹199 – ₹5000",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Card",
  /*
   * areaServed order matters for local SEO relevance signals.
   * Mahipalpur (HQ location) listed first — highest service priority.
   * Remaining areas listed by proximity / service volume.
   */
  areaServed: [
    { "@type": "Place", name: "Mahipalpur" },
    { "@type": "Place", name: "Aerocity" },
    { "@type": "Place", name: "Vasant Kunj" },
    { "@type": "Place", name: "Rangpuri" },
    { "@type": "Place", name: "IGI Airport" },
    { "@type": "Place", name: "Mahipalpur Extension" },
    { "@type": "Place", name: "Vasant Vihar" },
    { "@type": "Place", name: "Shanti Niketan" },
    { "@type": "Place", name: "Nangal Dewat" },
    { "@type": "Place", name: "Kishangarh" },
    { "@type": "Place", name: "JNU" },
    { "@type": "Place", name: "Munirka" },
    { "@type": "Place", name: "R.K. Puram" },
    { "@type": "City", name: "New Delhi" },
  ],
  serviceType: [
    "AC Repair",
    "AC Installation",
    "AC Gas Refilling",
    "AC Deep Cleaning",
    "Refrigerator Repair",
    "Washing Machine Repair",
    "Electrical Services",
    "Geyser Repair",
    "Microwave Repair",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Appliance Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Repair Service",
          description: "Expert split & window AC repair in Mahipalpur and nearby areas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Refrigerator Repair",
          description: "All fridge types – single door, double door, side-by-side",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electrical Services",
          description: "Wiring, switchboard repair, MCB installation",
        },
      },
    ],
  },
  sameAs: [
    "https://maps.google.com/?q=Medon+Company+Mahipalpur+Delhi",
    // Add your verified profiles when available:
    // "https://www.facebook.com/medoncompany",
    // "https://www.instagram.com/medoncompany",
    // "https://g.page/medoncompany",
  ],

  /* ── Aggregate Rating ─────────────────────────────── */
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: AGGREGATE_RATING.ratingValue,
    reviewCount: AGGREGATE_RATING.reviewCount,
    bestRating: AGGREGATE_RATING.bestRating,
    worstRating: AGGREGATE_RATING.worstRating,
  },

  /* ── Individual Reviews ───────────────────────────── */
  review: ALL_REVIEWS.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.review,
    datePublished: r.datePublished,
  })),
};

/* ── Electrician Schema (secondary business type) ───────── */
const ELECTRICIAN_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${SITE_URL}/#electrician`,
  name: `${SITE_NAME} – Electrical Services`,
  description:
    "Professional electrical services in Mahipalpur & nearby areas – wiring, switchboard repair, MCB installation, short circuit fix. Licensed electricians with safety-first approach.",
  url: `${SITE_URL}/electrical-services-delhi`,
  telephone: SITE_PHONE_SCHEMA,
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  areaServed: [
    { "@type": "Place", name: "Mahipalpur" },
    { "@type": "Place", name: "Aerocity" },
    { "@type": "Place", name: "Vasant Kunj" },
    { "@type": "Place", name: "Rangpuri" },
    { "@type": "Place", name: "Vasant Vihar" },
    { "@type": "Place", name: "Kishangarh" },
    { "@type": "Place", name: "Munirka" },
    { "@type": "City", name: "New Delhi" },
  ],
  parentOrganization: {
    /* Cross-reference to the primary entity — @id must match LOCAL_BUSINESS @id */
    "@id": `${SITE_URL}/#business`,
  },
};

/* ── FAQPage Schema (homepage FAQs) ─────────────────────── */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ── Organization Schema ────────────────────────────────── */
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_PHONE_SCHEMA,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://maps.google.com/?q=Medon+Company+Mahipalpur+Delhi",
    // "https://www.facebook.com/medoncompany",
    // "https://www.instagram.com/medoncompany",
  ],
};

/* ── WebSite Schema (enables Sitelinks Searchbox) ──────── */
const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ELECTRICIAN_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
    </>
  );
}
