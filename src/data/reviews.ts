/* ─────────────────────────────────────────────────────
   CENTRALIZED REVIEW DATA — Medon Company
   Used by: JSON-LD schema, Reviews section, AggregateRating
   ───────────────────────────────────────────────────── */

export interface MedonReview {
  name: string;
  role: string;
  review: string;
  rating: number;
  datePublished: string;
}

/* ── Aggregate Rating ───────────────────────────────── */
export const AGGREGATE_RATING = {
  ratingValue: 4.9,
  reviewCount: 127,
  bestRating: 5,
  worstRating: 1,
};

/* ── Individual Reviews ─────────────────────────────── */
export const ALL_REVIEWS: MedonReview[] = [
  {
    name: "Rahul Sharma",
    role: "AC Repair Customer",
    review:
      "Medon Company made booking and tracking AC repair super easy. The technician was professional, arrived within an hour in Mahipalpur, and fixed my split AC cooling issue on the spot. Transparent pricing with no hidden charges.",
    rating: 5,
    datePublished: "2025-04-10",
  },
  {
    name: "Anita Verma",
    role: "Washing Machine Repair",
    review:
      "Very smooth experience with Medon Company in Vasant Kunj. The support team kept me updated at every step. Technician was polite and skilled. Will definitely use again.",
    rating: 5,
    datePublished: "2025-03-22",
  },
  {
    name: "Vikas Kumar",
    role: "Refrigerator Repair",
    review:
      "Transparent pricing and skilled technician. My Samsung fridge had a gas leak — Medon Company's technician detected and fixed it in under 2 hours. Highly recommended for fridge repair in South Delhi!",
    rating: 5,
    datePublished: "2025-05-02",
  },
  {
    name: "Priya Mehta",
    role: "Electrical Services",
    review:
      "Got my entire flat in Mahipalpur Extension rewired with modular switchboards. Clean work, fair pricing, and the team even cleaned up after. Best electrician service in Delhi.",
    rating: 5,
    datePublished: "2025-02-15",
  },
  {
    name: "Dr. Anil Gupta",
    role: "AC Deep Cleaning",
    review:
      "Medon Company cleaned all 4 of our split ACs in Vasant Kunj Sector D in one visit. They showed us the dirt removed from each unit. Cooling improved dramatically. 90-day warranty gives peace of mind.",
    rating: 5,
    datePublished: "2025-04-28",
  },
  {
    name: "Sunita Verma",
    role: "AC Installation",
    review:
      "Professional AC installation by Medon Company's team near Saket. Copper pipe fitting was neat, electrical wiring was properly done with a dedicated MCB. Same-day service and very reasonable charges.",
    rating: 4,
    datePublished: "2025-01-18",
  },
];
