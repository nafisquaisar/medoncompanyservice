/* ── Medon Company – Local Business Structured Data (JSON-LD) ─── */

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Medon Company",
  description:
    "Expert AC repair, refrigerator service, electrical & geyser repair in Delhi NCR. Verified technicians, transparent pricing, real-time tracking.",
  url: "https://medoncompany.com",
  telephone: "+917303637086",
  email: "Medoncompany@gmail.com",
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
  image: "https://medoncompany.com/img/webbanner.png",
  sameAs: [],
  areaServed: [
    { "@type": "City", name: "New Delhi" },
    { "@type": "Place", name: "Mahipalpur" },
    { "@type": "Place", name: "Vasant Kunj" },
    { "@type": "Place", name: "Delhi NCR" },
  ],
  serviceType: [
    "AC Repair",
    "AC Installation",
    "Refrigerator Repair",
    "Electrical Services",
    "Geyser Repair",
    "Microwave Repair",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
    />
  );
}
