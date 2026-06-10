/* ─────────────────────────────────────────────────────
   LOCAL SEO LANDING PAGE DATA
   ───────────────────────────────────────────────────── */

export interface LocalTestimonial {
  name: string;
  area: string;
  service: string;
  review: string;
  rating: number;
}

export interface NearbyArea {
  name: string;
  distance: string;
}

export interface LocalService {
  title: string;
  slug: string;
  description: string;
}

export interface LocationPageData {
  /* ── URL & SEO ──────────────────────────── */
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];

  /* ── Hero ────────────────────────────────── */
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroStats: { value: string; label: string }[];

  /* ── About the area ─────────────────────── */
  aboutHeading: string;
  aboutParagraphs: string[];
  responseTime: string;
  sinceYear: string;

  /* ── Services offered ───────────────────── */
  localServices: LocalService[];

  /* ── Nearby areas ───────────────────────── */
  nearbyAreas: NearbyArea[];

  /* ── Local testimonials ─────────────────── */
  testimonials: LocalTestimonial[];

  /* ── Local FAQs ─────────────────────────── */
  faqs: { question: string; answer: string }[];
}

/* ─────────────────────────────────────────────────────
   LOCATION DATA
   ───────────────────────────────────────────────────── */

export const ALL_LOCATIONS: LocationPageData[] = [
  /* ───────────── MAHIPALPUR ───────────── */
  {
    slug: "mahipalpur",
    title: "Appliance Repair Services in Mahipalpur, Delhi",
    metaDescription:
      "Medon Company – Your neighborhood appliance repair experts in Mahipalpur, Delhi. AC repair, fridge service, electrical work & more. Headquarters in Mahipalpur. Call +91 7303637086.",
    keywords: [
      "appliance repair Mahipalpur",
      "AC repair Mahipalpur",
      "AC service near Mahipalpur",
      "electrician Mahipalpur Delhi",
      "fridge repair Mahipalpur",
      "home repair services Mahipalpur",
      "AC repair near me Mahipalpur",
      "geyser repair Mahipalpur",
      "Medon Company Mahipalpur",
    ],
    heroTitle: "Your Neighborhood Repair Experts",
    heroHighlight: "in Mahipalpur",
    heroDescription:
      "Medon Company is headquartered right here in Mahipalpur — Shop No L-3, Street Number 1, L Block, Mahipalpur Village. That means the fastest response times, priority scheduling, and a team that truly knows your neighborhood.",
    heroStats: [
      { value: "< 1 hr", label: "Average response time" },
      { value: "₹149", label: "Local inspection rate" },
      { value: "2,000+", label: "Mahipalpur services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "Why Mahipalpur Trusts Medon Company",
    aboutParagraphs: [
      "Mahipalpur is home — it's where Medon Company was founded and where our operations center is located. Being a local business, we understand the unique challenges Mahipalpur residents face — from older building wiring to the specific AC brands popular in the area's residential complexes and hotels.",
      "Our technicians know every lane in Mahipalpur Village, Mahipalpur Extension, and the surrounding hotel district. That means zero time wasted on navigation and more time fixing your appliances. We've built our reputation one satisfied neighbor at a time.",
      "As the area's most trusted service provider, we offer special pricing for Mahipalpur residents — including a reduced inspection fee of ₹149 (vs. ₹199 standard) and priority same-day scheduling for local customers.",
    ],
    responseTime: "Under 1 hour",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Mahipalpur", slug: "ac-repair-mahipalpur", description: "Split & window AC repair, gas refilling, deep cleaning, and installation. Same-hour emergency service available." },
      { title: "AC Installation", slug: "ac-installation-delhi", description: "Professional AC mounting with copper pipe fitting for Mahipalpur homes, hotels, and offices." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "R22, R32, and R410A gas refilling with leak detection. All AC brands supported." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "Fridge not cooling? We repair all types — single door, double door, and commercial units." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard repair, MCB installation, and short circuit troubleshooting." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser heating issues, leakage repair, and new installation with proper earthing." },
    ],
    nearbyAreas: [
      { name: "Mahipalpur Village", distance: "HQ location" },
      { name: "Mahipalpur Extension", distance: "0.5 km" },
      { name: "Rangpuri", distance: "1.2 km" },
      { name: "Vasant Kunj", distance: "2 km" },
      { name: "Kishangarh", distance: "2.5 km" },
      { name: "Dwarka Sector 1", distance: "4 km" },
      { name: "IGI Airport Area", distance: "3 km" },
      { name: "Rajokri", distance: "3.5 km" },
    ],
    testimonials: [
      { name: "Suresh Yadav", area: "Mahipalpur Village", service: "AC Repair", rating: 5, review: "Medon Company's technician reached my house in 30 minutes. My AC wasn't cooling — turned out to be a gas leak. Fixed and refilled in under an hour. Best service in the area!" },
      { name: "Priya Mehta", area: "Mahipalpur Extension", service: "Electrical Work", rating: 5, review: "Got my entire flat rewired with modular switchboards. Clean work, fair pricing, and they even cleaned up after. Highly recommend for Mahipalpur residents." },
      { name: "Hotel Raj Manager", area: "Mahipalpur Hotel Zone", service: "AC Maintenance", rating: 5, review: "We have an AMC with Medon Company for our 40-room hotel. Their response time and professionalism is unmatched. They understand the hospitality industry's urgency." },
    ],
    faqs: [
      { question: "Where is Medon Company located in Mahipalpur?", answer: "Our office is at Shop No L-3, Street Number 1, L Block, Mahipalpur Village, New Delhi 110037. We're easily accessible from the main Mahipalpur road." },
      { question: "How fast can you send a technician in Mahipalpur?", answer: "Since our headquarters is in Mahipalpur, we can typically dispatch a technician within 30–60 minutes for local service requests." },
      { question: "Do you offer special rates for Mahipalpur residents?", answer: "Yes! Mahipalpur residents get a reduced inspection fee of ₹149 (vs. ₹199 standard) and priority scheduling for same-day service." },
      { question: "Do you service hotels in Mahipalpur?", answer: "Absolutely. We service multiple hotels in the Mahipalpur hotel district with AMC contracts, emergency repairs, and bulk AC maintenance." },
      { question: "What areas near Mahipalpur do you cover?", answer: "We cover Mahipalpur Village, Mahipalpur Extension, Rangpuri, Vasant Kunj, Kishangarh, Dwarka Sector 1, IGI Airport area, and Rajokri." },
    ],
  },

  /* ───────────── VASANT KUNJ ───────────── */
  {
    slug: "vasant-kunj",
    title: "Appliance Repair Services in Vasant Kunj, Delhi",
    metaDescription:
      "Professional AC repair, fridge service & electrical work in Vasant Kunj, Delhi. Medon Company serves all sectors A–F. 2-hour response. Call +91 7303637086.",
    keywords: [
      "appliance repair Vasant Kunj",
      "AC repair Vasant Kunj",
      "AC service near Vasant Kunj",
      "electrician Vasant Kunj Delhi",
      "fridge repair Vasant Kunj",
      "home services Vasant Kunj",
      "AC repair near me Vasant Kunj",
      "geyser installation Vasant Kunj",
    ],
    heroTitle: "Trusted Appliance Repair",
    heroHighlight: "in Vasant Kunj",
    heroDescription:
      "From Sector A to Sector F, Medon Company provides fast and reliable appliance repair services across all of Vasant Kunj. Our technicians are experienced with high-rise apartments and premium residential complexes.",
    heroStats: [
      { value: "2 hrs", label: "Average response time" },
      { value: "All Sectors", label: "A, B, C, D, E, F covered" },
      { value: "1,500+", label: "Vasant Kunj services done" },
      { value: "4.7★", label: "Average customer rating" },
    ],
    aboutHeading: "Serving Every Sector of Vasant Kunj",
    aboutParagraphs: [
      "Vasant Kunj is one of South Delhi's most prominent residential hubs — with its high-rise apartments, premium societies, and diverse community. Medon Company has been serving Vasant Kunj residents since our founding, building deep expertise in the unique requirements of the area's residential complexes.",
      "Our technicians are specifically experienced with high-rise AC installations, apartment electrical systems, and the premium appliance brands favored by Vasant Kunj residents. Whether you're in a DDA flat or a luxury apartment in Sector D, we deliver the same professional, transparent service.",
      "Located just 2 km from our Mahipalpur headquarters, Vasant Kunj is one of our fastest-served areas. Most service requests receive a technician within 2 hours — often faster.",
    ],
    responseTime: "Within 2 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Service in Vasant Kunj", slug: "ac-service-vasant-kunj", description: "Complete AC repair, deep cleaning, gas refilling, and installation for all Vasant Kunj sectors." },
      { title: "AC Repair Service", slug: "ac-repair-service-delhi", description: "Expert split and window AC repair with same-day service for Vasant Kunj residents." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Precision gas refilling with leak detection for all AC brands and refrigerant types." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge types repaired — single door, double door, side-by-side, and premium brands." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Modular switchboard upgrades, wiring, MCB installation for apartments and homes." },
      { title: "Microwave Repair", slug: "microwave-repair-delhi", description: "Solo, grill, and convection microwave repair with genuine parts." },
    ],
    nearbyAreas: [
      { name: "Vasant Kunj Sector A", distance: "Covered" },
      { name: "Vasant Kunj Sector B", distance: "Covered" },
      { name: "Vasant Kunj Sector C", distance: "Covered" },
      { name: "Vasant Kunj Sector D", distance: "Covered" },
      { name: "Vasant Kunj Sector E & F", distance: "Covered" },
      { name: "Kishangarh", distance: "1 km" },
      { name: "Munirka", distance: "2 km" },
      { name: "Nelson Mandela Marg", distance: "1.5 km" },
    ],
    testimonials: [
      { name: "Dr. Anil Gupta", area: "Vasant Kunj Sector D", service: "AC Deep Cleaning", rating: 5, review: "Medon Company cleaned all 4 of our split ACs in one visit. Thorough service — they even showed us the dirt removed from each unit. Cooling improved dramatically." },
      { name: "Neha Sharma", area: "Vasant Kunj Sector A", service: "Refrigerator Repair", rating: 5, review: "Our Samsung double-door fridge stopped cooling. Medon Company technician diagnosed a gas leak, fixed it on the spot. Very professional and transparent about pricing." },
      { name: "Rajiv Malhotra", area: "Vasant Kunj Sector B", service: "Electrical Work", rating: 5, review: "Complete rewiring of our 3BHK with modular switchboards. The team was neat, efficient, and completed everything in one day. Great value for money." },
    ],
    faqs: [
      { question: "Which sectors of Vasant Kunj do you serve?", answer: "We serve all sectors — A, B, C, D, E, and F, plus nearby areas like Kishangarh, Munirka, and Nelson Mandela Marg." },
      { question: "Can you service ACs in high-rise buildings?", answer: "Yes, our technicians are experienced with high-rise AC installations and carry all necessary equipment for elevated outdoor unit servicing." },
      { question: "How quickly can you reach Vasant Kunj?", answer: "Our average response time for Vasant Kunj is under 2 hours. For emergency calls, we often reach within 1 hour since our HQ is just 2 km away." },
      { question: "Do you offer AMC for Vasant Kunj apartments?", answer: "Yes, we offer annual maintenance contracts for apartments and societies in Vasant Kunj. Contact us for customized AMC plans for your building." },
      { question: "Are your prices different for Vasant Kunj?", answer: "Our pricing is standardized across Delhi NCR. Inspection starts at ₹199 with transparent service charges — no location-based surcharges." },
    ],
  },

  /* ───────────── SOUTH DELHI ───────────── */
  {
    slug: "south-delhi",
    title: "Appliance Repair Services in South Delhi",
    metaDescription:
      "Premier appliance repair services across South Delhi. AC repair, fridge service, electrical work by Medon Company. Trusted by 5000+ South Delhi homes. Call +91 7303637086.",
    keywords: [
      "appliance repair South Delhi",
      "AC repair South Delhi",
      "AC service near me South Delhi",
      "electrician South Delhi",
      "fridge repair South Delhi",
      "home repair services South Delhi",
      "AC repair near me Delhi",
      "best AC service South Delhi",
    ],
    heroTitle: "Premier Appliance Repair",
    heroHighlight: "Across South Delhi",
    heroDescription:
      "From Saket to Hauz Khas, Vasant Vihar to Greater Kailash — Medon Company provides fast, reliable, and professional appliance repair services across all of South Delhi. Verified technicians. Transparent pricing. Guaranteed satisfaction.",
    heroStats: [
      { value: "2–4 hrs", label: "Average response time" },
      { value: "15+", label: "South Delhi areas covered" },
      { value: "3,500+", label: "South Delhi services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "South Delhi's Trusted Service Partner",
    aboutParagraphs: [
      "South Delhi is home to some of the city's most premium residential areas — from the leafy lanes of Vasant Vihar and Chanakyapuri to the bustling markets of Saket and Malviya Nagar. Medon Company has built a strong presence across the region, serving both modern apartments and established bungalows.",
      "Our team understands that South Delhi homeowners expect premium service quality. That's why every Medon Company technician arriving at a South Delhi home is background-verified, carries a complete toolkit, and follows our structured service protocol — from initial diagnosis to post-repair testing.",
      "With our headquarters in Mahipalpur, we're strategically positioned to serve all of South Delhi. Our dispatch system ensures technicians are routed efficiently to minimize wait times across this expansive region.",
    ],
    responseTime: "2–4 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in South Delhi", slug: "ac-repair-service-delhi", description: "Expert AC repair for all brands popular in South Delhi — Daikin, Mitsubishi, Blue Star, and more." },
      { title: "AC Installation", slug: "ac-installation-delhi", description: "Professional AC installation for apartments, bungalows, and commercial spaces across South Delhi." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Precision gas refilling with leak detection — critical during Delhi's intense summer months." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "Premium fridge repair — Samsung, LG, Bosch, Whirlpool, and all other brands." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Complete electrical solutions for South Delhi homes — from rewiring to smart switch installation." },
      { title: "Geyser Service", slug: "geyser-repair-delhi", description: "Geyser repair and installation with proper safety compliance for South Delhi residences." },
    ],
    nearbyAreas: [
      { name: "Vasant Vihar", distance: "4 km" },
      { name: "Saket", distance: "5 km" },
      { name: "Hauz Khas", distance: "6 km" },
      { name: "Greater Kailash", distance: "8 km" },
      { name: "Malviya Nagar", distance: "7 km" },
      { name: "Chanakyapuri", distance: "9 km" },
      { name: "Green Park", distance: "7 km" },
      { name: "Lajpat Nagar", distance: "10 km" },
    ],
    testimonials: [
      { name: "Amit Kapoor", area: "Vasant Vihar", service: "AC Repair", rating: 5, review: "Called Medon Company for a Daikin AC that was making unusual noise. Technician diagnosed a faulty compressor bearing and fixed it the same day. Very knowledgeable team." },
      { name: "Sunita Verma", area: "Saket", service: "Refrigerator Repair", rating: 5, review: "Medon Company repaired our Bosch fridge that other service centers had given up on. The technician was patient, thorough, and the fridge has been running perfectly since." },
      { name: "Col. R. Singh (Retd.)", area: "Greater Kailash", service: "Electrical Rewiring", rating: 5, review: "Had our 30-year-old bungalow completely rewired by Medon Company. Professional team, zero disruption, and they managed the complexity of old wiring perfectly." },
    ],
    faqs: [
      { question: "Which areas of South Delhi do you cover?", answer: "We cover Vasant Vihar, Saket, Hauz Khas, Greater Kailash, Malviya Nagar, Chanakyapuri, Green Park, Lajpat Nagar, Defence Colony, Safdarjung, and many more areas." },
      { question: "How long does it take to reach South Delhi?", answer: "Our average response time for South Delhi is 2–4 hours depending on the specific area. Locations closer to Mahipalpur (like Vasant Vihar) get faster service." },
      { question: "Do you service premium appliance brands?", answer: "Yes, we specialize in all brands including premium ones like Daikin, Mitsubishi, Bosch, and Blue Star that are common in South Delhi homes." },
      { question: "Can you handle large homes and bungalows?", answer: "Absolutely. We regularly service large South Delhi bungalows with multi-unit AC systems, centralized electrical panels, and commercial-grade appliances." },
      { question: "Do you offer services for South Delhi offices?", answer: "Yes, we provide commercial electrical, AC, and appliance services for offices, clinics, and retail spaces across South Delhi." },
    ],
  },

  /* ───────────── DELHI AIRPORT AREA ───────────── */
  {
    slug: "delhi-airport-area",
    title: "Appliance Repair Services Near Delhi Airport (IGI)",
    metaDescription:
      "Fast appliance repair near Delhi Airport (IGI). Medon Company serves Aerocity, Mahipalpur, Dwarka Sector 1-7, and the airport hospitality zone. Call +91 7303637086.",
    keywords: [
      "appliance repair near Delhi Airport",
      "AC repair Aerocity",
      "AC service IGI Airport area",
      "electrician near Delhi Airport",
      "hotel AC repair Aerocity",
      "AC repair Dwarka",
      "appliance repair Dwarka",
      "home services near IGI Airport",
      "AC repair near me Delhi Airport",
    ],
    heroTitle: "Fast Appliance Repair",
    heroHighlight: "Near Delhi Airport",
    heroDescription:
      "Located minutes from IGI Airport, Medon Company provides rapid appliance repair services for the entire airport zone — Aerocity, Mahipalpur, Dwarka, and the hospitality corridor. Hotels, hostels, PGs, and residential customers all served.",
    heroStats: [
      { value: "< 1 hr", label: "Response for airport zone" },
      { value: "50+", label: "Hotels served" },
      { value: "24/7", label: "Emergency support" },
      { value: "4.9★", label: "Hotel partner rating" },
    ],
    aboutHeading: "The Airport Zone's Go-To Service Partner",
    aboutParagraphs: [
      "The Delhi Airport area is a unique ecosystem — a mix of world-class hotels, budget accommodations, residential neighborhoods, and commercial spaces. Medon Company understands this diversity and has tailored its services to meet the needs of every customer in the zone.",
      "For hotels and hospitality businesses in Aerocity and Mahipalpur, we offer dedicated AMC contracts with emergency response guarantees. A non-functional AC in a hotel room isn't just an inconvenience — it's a revenue loss. That's why we prioritize hospitality clients with sub-1-hour response times.",
      "For Dwarka residents near the airport, we bring the same professional, structured service that has made us Mahipalpur's most trusted repair company. Our proximity means you get the fastest service in the Dwarka Sector 1–7 area.",
    ],
    responseTime: "Under 1 hour",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair (Airport Area)", slug: "ac-repair-service-delhi", description: "24/7 AC repair for hotels, hostels, and homes near Delhi Airport. Emergency service available." },
      { title: "AC Repair in Mahipalpur", slug: "ac-repair-mahipalpur", description: "Headquarters-level service in Mahipalpur with same-hour technician dispatch." },
      { title: "AC Installation", slug: "ac-installation-delhi", description: "Bulk AC installation for hotels, PGs, and new residential projects in the airport zone." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Commercial-grade electrical work for hotels, offices, and shops near the airport." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "Commercial and domestic fridge repair. Mini-bar and kitchen refrigerator service for hotels." },
      { title: "Microwave Repair", slug: "microwave-repair-delhi", description: "Quick microwave repair for hotel kitchens, hostels, and residential customers." },
    ],
    nearbyAreas: [
      { name: "Aerocity", distance: "2 km" },
      { name: "Mahipalpur", distance: "HQ location" },
      { name: "Dwarka Sector 1", distance: "4 km" },
      { name: "Dwarka Sector 7", distance: "5 km" },
      { name: "Rajokri", distance: "3 km" },
      { name: "Palam", distance: "4 km" },
      { name: "Rangpuri", distance: "1 km" },
      { name: "Kapashera", distance: "5 km" },
    ],
    testimonials: [
      { name: "Vikram Singh", area: "Aerocity Hotel", service: "AC Emergency Repair", rating: 5, review: "Guest complaint at 11 PM — AC not cooling. Medon Company had a technician at our hotel within 40 minutes. Fixed the issue without disturbing other guests. Outstanding emergency service." },
      { name: "Pooja Rawat", area: "Dwarka Sector 1", service: "AC Installation", rating: 5, review: "Got 3 ACs installed in our new flat. Medon Company's team was professional, did clean pipe routing, and tested everything thoroughly. Very fair pricing too." },
      { name: "Airport Hotel Group", area: "Mahipalpur Hotel Zone", service: "Annual Maintenance", rating: 5, review: "Medon Company manages AC maintenance for our 3 hotel properties. Their structured approach, regular reporting, and emergency support has reduced our downtime by 80%." },
    ],
    faqs: [
      { question: "Do you provide 24/7 service near Delhi Airport?", answer: "Yes, we offer 24/7 emergency AC repair for hotels and hospitality businesses in the airport zone. Residential customers can book emergency service during extended hours (8 AM – 10 PM)." },
      { question: "Do you service hotels in Aerocity?", answer: "Yes, we serve multiple hotels in Aerocity and Mahipalpur with AMC contracts and on-demand repair. Our proximity ensures sub-1-hour response for hospitality clients." },
      { question: "Can you handle bulk AC installation for hotels?", answer: "Absolutely. We've completed bulk AC installation and maintenance projects for hotels with 20–100+ rooms. We handle procurement, installation, and ongoing maintenance." },
      { question: "Which Dwarka sectors do you cover?", answer: "We cover Dwarka Sectors 1 through 7, which are closest to our Mahipalpur headquarters. Response time for these sectors is typically 1–2 hours." },
      { question: "Do you offer AMC for businesses near the airport?", answer: "Yes, we offer customized AMC contracts for hotels, restaurants, and businesses in the airport zone. Plans include scheduled maintenance, priority emergency service, and discounted repair rates." },
    ],
  },
];

/* ── Helpers ──────────────────────────────────────── */
export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return ALL_LOCATIONS.find((l) => l.slug === slug);
}

export function getOtherLocations(currentSlug: string) {
  return ALL_LOCATIONS.filter((l) => l.slug !== currentSlug);
}
