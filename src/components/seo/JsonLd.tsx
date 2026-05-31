/* ── Medon Company – Advanced Structured Data (JSON-LD) ─── */

import { HOMEPAGE_FAQS } from "@/data/homepage-faqs";
import { ALL_REVIEWS, AGGREGATE_RATING } from "@/data/reviews";

const BASE_URL = "https://medoncompany.com";

/* ── Multi-type LocalBusiness + HVACBusiness Schema ───────── */
const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness"],
  "@id": `${BASE_URL}/#business`,
  name: "Medon Company",
  description:
    "Expert AC repair, refrigerator service, electrical & geyser repair in Delhi NCR. Verified technicians, transparent pricing, real-time tracking. Serving Mahipalpur, Vasant Kunj, Aerocity, Dwarka, South Delhi, Saket & Hauz Khas.",
  url: BASE_URL,
  telephone: "+917303637086",
  email: "Medoncompany@gmail.com",
  image: `${BASE_URL}/img/webbanner.png`,
  logo: `${BASE_URL}/img/webbanner.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No, L-3, Street Number 1, L block, Mahipalpur Village",
    addressLocality: "Mahipalpur",
    addressRegion: "Delhi",
    postalCode: "110037",
    addressCountry: "IN",
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
  areaServed: [
    { "@type": "City", name: "New Delhi" },
    { "@type": "Place", name: "Mahipalpur" },
    { "@type": "Place", name: "Vasant Kunj" },
    { "@type": "Place", name: "Delhi NCR" },
    { "@type": "Place", name: "Aerocity" },
    { "@type": "Place", name: "Dwarka" },
    { "@type": "Place", name: "South Delhi" },
    { "@type": "Place", name: "Saket" },
    { "@type": "Place", name: "Hauz Khas" },
  ],
  serviceType: [
    "AC Repair",
    "AC Installation",
    "AC Gas Refilling",
    "AC Deep Cleaning",
    "Refrigerator Repair",
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
          description: "Expert split & window AC repair in Delhi NCR",
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
    // Add social profile URLs when available:
    // "https://www.facebook.com/medoncompany",
    // "https://www.instagram.com/medoncompany",
    // "https://g.co/kgs/medoncompany",
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
  "@id": `${BASE_URL}/#electrician`,
  name: "Medon Company – Electrical Services",
  description:
    "Professional electrical services in Delhi NCR – wiring, switchboard repair, MCB installation, short circuit fix. Licensed electricians with safety-first approach.",
  url: `${BASE_URL}/electrical-services-delhi`,
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
    { "@type": "City", name: "New Delhi" },
    { "@type": "Place", name: "Delhi NCR" },
  ],
  parentOrganization: {
    "@id": `${BASE_URL}/#business`,
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
  "@id": `${BASE_URL}/#organization`,
  name: "Medon Company",
  url: BASE_URL,
  logo: `${BASE_URL}/img/webbanner.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917303637086",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
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
    </>
  );
}
