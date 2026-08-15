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
   LOCATION DATA — 13 APPROVED SERVICE AREAS ONLY
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
      "Medon Company is headquartered right here in Mahipalpur — Shop No, L-3, Street Number 1, L Block, Mahipalpur Village. That means the fastest response times, priority scheduling, and a team that truly knows your neighborhood.",
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
      { name: "Aerocity", distance: "2 km" },
      { name: "Vasant Kunj", distance: "2 km" },
      { name: "Kishangarh", distance: "2.5 km" },
      { name: "IGI Airport", distance: "3 km" },
      { name: "Vasant Vihar", distance: "4 km" },
    ],
    testimonials: [
      { name: "Suresh Yadav", area: "Mahipalpur Village", service: "AC Repair", rating: 5, review: "Medon Company's technician reached my house in 30 minutes. My AC wasn't cooling — turned out to be a gas leak. Fixed and refilled in under an hour. Best service in the area!" },
      { name: "Priya Mehta", area: "Mahipalpur Extension", service: "Electrical Work", rating: 5, review: "Got my entire flat rewired with modular switchboards. Clean work, fair pricing, and they even cleaned up after. Highly recommend for Mahipalpur residents." },
      { name: "Hotel Raj Manager", area: "Mahipalpur Hotel Zone", service: "AC Maintenance", rating: 5, review: "We have an AMC with Medon Company for our 40-room hotel. Their response time and professionalism is unmatched. They understand the hospitality industry's urgency." },
    ],
    faqs: [
      { question: "Where is Medon Company located in Mahipalpur?", answer: "Our office is at Shop No, L-3, Street Number 1, L Block, Mahipalpur Village, New Delhi 110037. We're easily accessible from the main Mahipalpur road." },
      { question: "How fast can you send a technician in Mahipalpur?", answer: "Since our headquarters is in Mahipalpur, we can typically dispatch a technician within 30–60 minutes for local service requests." },
      { question: "Do you offer special rates for Mahipalpur residents?", answer: "Yes! Mahipalpur residents get a reduced inspection fee of ₹149 (vs. ₹199 standard) and priority scheduling for same-day service." },
      { question: "Do you service hotels in Mahipalpur?", answer: "Absolutely. We service multiple hotels in the Mahipalpur hotel district with AMC contracts, emergency repairs, and bulk AC maintenance." },
      { question: "What areas near Mahipalpur do you cover?", answer: "We cover Mahipalpur Village, Mahipalpur Extension, Rangpuri, Aerocity, Vasant Kunj, Kishangarh, IGI Airport area, and Vasant Vihar." },
    ],
  },

  /* ───────────── AEROCITY ───────────── */
  {
    slug: "aerocity",
    title: "Appliance Repair Services in Aerocity, Delhi",
    metaDescription:
      "Fast appliance repair in Aerocity, Delhi. Medon Company serves hotels, residences and offices in Aerocity with AC repair, refrigerator service & electrical work. Call +91 7303637086.",
    keywords: [
      "appliance repair Aerocity",
      "AC repair Aerocity",
      "AC service Aerocity Delhi",
      "hotel AC repair Aerocity",
      "electrician Aerocity Delhi",
      "fridge repair Aerocity",
      "AC repair near me Aerocity",
      "Medon Company Aerocity",
    ],
    heroTitle: "Fast & Reliable Appliance Repair",
    heroHighlight: "in Aerocity",
    heroDescription:
      "Located just minutes from Aerocity, Medon Company delivers rapid appliance repair for hotels, residences, and commercial spaces in the Aerocity hospitality corridor. Sub-1-hour response for hospitality clients.",
    heroStats: [
      { value: "< 1 hr", label: "Response for Aerocity" },
      { value: "50+", label: "Hotels & businesses served" },
      { value: "24/7", label: "Emergency support" },
      { value: "4.9★", label: "Hotel partner rating" },
    ],
    aboutHeading: "Aerocity's Trusted Appliance Service Partner",
    aboutParagraphs: [
      "Aerocity is home to world-class hotels, premium residences, and bustling commercial spaces — all demanding the highest standard of service. Medon Company, headquartered just minutes away in Mahipalpur, is uniquely positioned to serve Aerocity with the fastest response times in the area.",
      "For hotel and hospitality partners, we offer dedicated AMC contracts with emergency response guarantees. A non-functional AC or refrigerator in a hotel is not just an inconvenience — it's a revenue loss. That's why we prioritize hospitality clients with sub-1-hour response times, any time of day.",
      "For residential and commercial customers in Aerocity, we bring the same professional, transparent service that has made us Mahipalpur's most trusted repair company.",
    ],
    responseTime: "Under 1 hour",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Aerocity", slug: "ac-repair-service-delhi", description: "24/7 AC repair for hotels, residences, and offices in Aerocity. Emergency service available." },
      { title: "AC Installation", slug: "ac-installation-delhi", description: "Bulk and single-unit AC installation for hotels, offices, and new residential projects." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Precision gas refilling with leak detection. All AC brands and refrigerant types." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "Commercial and domestic fridge repair — mini-bar and kitchen refrigerators for hotels." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Commercial-grade electrical work for hotels, offices, and shops in Aerocity." },
      { title: "Microwave Repair", slug: "microwave-repair-delhi", description: "Quick microwave repair for hotel kitchens and residential customers." },
    ],
    nearbyAreas: [
      { name: "Mahipalpur", distance: "HQ — 2 km" },
      { name: "IGI Airport", distance: "1 km" },
      { name: "Rangpuri", distance: "2 km" },
      { name: "Vasant Kunj", distance: "3 km" },
      { name: "Mahipalpur Extension", distance: "2.5 km" },
      { name: "Vasant Vihar", distance: "5 km" },
    ],
    testimonials: [
      { name: "Vikram Singh", area: "Aerocity Hotel", service: "AC Emergency Repair", rating: 5, review: "Guest complaint at 11 PM — AC not cooling. Medon Company had a technician at our hotel within 40 minutes. Fixed the issue without disturbing other guests. Outstanding emergency service." },
      { name: "Airport Hotel Group", area: "Aerocity", service: "Annual Maintenance", rating: 5, review: "Medon Company manages AC maintenance for our 3 hotel properties. Their structured approach, regular reporting, and emergency support has reduced our downtime by 80%." },
      { name: "Rohit Malhotra", area: "Aerocity Residences", service: "AC Repair", rating: 5, review: "Booked for split AC repair on a Sunday morning. Technician arrived within 45 minutes and fixed the cooling issue on the spot. Very professional and reasonably priced." },
    ],
    faqs: [
      { question: "Do you provide 24/7 service in Aerocity?", answer: "Yes, we offer 24/7 emergency AC repair for hotels and hospitality businesses in Aerocity. Residential customers can book emergency service during extended hours (8 AM – 10 PM)." },
      { question: "Do you service hotels in Aerocity?", answer: "Yes, we serve multiple hotels in Aerocity with AMC contracts and on-demand repair. Our proximity ensures sub-1-hour response for hospitality clients." },
      { question: "How quickly can you reach Aerocity?", answer: "Our headquarters is in Mahipalpur, just 2 km from Aerocity. We typically reach within 30–60 minutes of your call." },
      { question: "Do you offer AMC for businesses in Aerocity?", answer: "Yes, we offer customized AMC contracts for hotels, restaurants, and businesses in Aerocity. Plans include scheduled maintenance, priority emergency service, and discounted repair rates." },
      { question: "Can you handle bulk AC installation for hotels in Aerocity?", answer: "Absolutely. We've completed bulk AC installation and maintenance projects for hotels with 20–100+ rooms. We handle procurement, installation, and ongoing maintenance." },
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
      "Vasant Kunj is one of Delhi's most prominent residential hubs — with its high-rise apartments, premium societies, and diverse community. Medon Company has been serving Vasant Kunj residents since our founding, building deep expertise in the unique requirements of the area's residential complexes.",
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
      { name: "Mahipalpur", distance: "2 km" },
    ],
    testimonials: [
      { name: "Dr. Anil Gupta", area: "Vasant Kunj Sector D", service: "AC Deep Cleaning", rating: 5, review: "Medon Company cleaned all 4 of our split ACs in one visit. Thorough service — they even showed us the dirt removed from each unit. Cooling improved dramatically." },
      { name: "Neha Sharma", area: "Vasant Kunj Sector A", service: "Refrigerator Repair", rating: 5, review: "Our Samsung double-door fridge stopped cooling. Medon Company technician diagnosed a gas leak, fixed it on the spot. Very professional and transparent about pricing." },
      { name: "Rajiv Malhotra", area: "Vasant Kunj Sector B", service: "Electrical Work", rating: 5, review: "Complete rewiring of our 3BHK with modular switchboards. The team was neat, efficient, and completed everything in one day. Great value for money." },
    ],
    faqs: [
      { question: "Which sectors of Vasant Kunj do you serve?", answer: "We serve all sectors — A, B, C, D, E, and F, plus nearby areas like Kishangarh, Munirka, and Mahipalpur." },
      { question: "Can you service ACs in high-rise buildings?", answer: "Yes, our technicians are experienced with high-rise AC installations and carry all necessary equipment for elevated outdoor unit servicing." },
      { question: "How quickly can you reach Vasant Kunj?", answer: "Our average response time for Vasant Kunj is under 2 hours. For emergency calls, we often reach within 1 hour since our HQ is just 2 km away in Mahipalpur." },
      { question: "Do you offer AMC for Vasant Kunj apartments?", answer: "Yes, we offer annual maintenance contracts for apartments and societies in Vasant Kunj. Contact us for customized AMC plans for your building." },
      { question: "Are your prices different for Vasant Kunj?", answer: "Our pricing is standardized across all our service areas. Inspection starts at ₹199 with transparent service charges — no location-based surcharges." },
    ],
  },

  /* ───────────── RANGPURI ───────────── */
  {
    slug: "rangpuri",
    title: "Appliance Repair Services in Rangpuri, Delhi",
    metaDescription:
      "Expert appliance repair in Rangpuri, Delhi. Medon Company offers AC repair, refrigerator service & electrical work with fast response. Call +91 7303637086.",
    keywords: [
      "appliance repair Rangpuri",
      "AC repair Rangpuri",
      "AC service Rangpuri Delhi",
      "electrician Rangpuri Delhi",
      "fridge repair Rangpuri",
      "home repair services Rangpuri",
      "AC repair near me Rangpuri",
      "Medon Company Rangpuri",
    ],
    heroTitle: "Your Trusted Appliance Repair Service",
    heroHighlight: "in Rangpuri",
    heroDescription:
      "Just 1 km from our Mahipalpur headquarters, Rangpuri gets some of the fastest response times in our service network. Medon Company delivers expert appliance repair for homes and businesses across Rangpuri.",
    heroStats: [
      { value: "~1 hr", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "500+", label: "Rangpuri services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "Serving Rangpuri with Expertise & Speed",
    aboutParagraphs: [
      "Rangpuri is one of our closest service areas — located just 1.2 km from our Mahipalpur headquarters. This proximity means we can dispatch a technician to Rangpuri homes within about an hour of your call, making us the fastest appliance repair option in the area.",
      "Whether you need AC repair, refrigerator service, electrical work, or geyser repair, our verified technicians are equipped to handle all brands and models. We provide the same professional, transparent service that Mahipalpur residents have trusted since 2020.",
    ],
    responseTime: "Within 1 hour",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Rangpuri", slug: "ac-repair-service-delhi", description: "Expert AC repair for all brands — split, window, and cassette. Same-day service available." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "R22, R32, and R410A gas refilling with leak detection for all AC types." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge types repaired — single door, double door, and commercial units." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard repair, MCB installation, and short circuit troubleshooting." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser heating issues, leakage repair, and new installation." },
      { title: "Washing Machine Repair", slug: "washing-machine-repair-delhi", description: "Front-load and top-load washing machine repair for all brands." },
    ],
    nearbyAreas: [
      { name: "Mahipalpur", distance: "HQ — 1.2 km" },
      { name: "Aerocity", distance: "2 km" },
      { name: "Mahipalpur Extension", distance: "1 km" },
      { name: "Vasant Kunj", distance: "3 km" },
      { name: "IGI Airport", distance: "2 km" },
    ],
    testimonials: [
      { name: "Arun Sharma", area: "Rangpuri", service: "AC Repair", rating: 5, review: "Called Medon Company for AC not cooling. Technician reached within 50 minutes and fixed the issue on the same visit. Very happy with the service." },
      { name: "Kavita Singh", area: "Rangpuri", service: "Refrigerator Repair", rating: 5, review: "Our LG fridge stopped working. Medon Company's technician diagnosed and fixed the compressor issue the same day. Transparent pricing — no hidden charges." },
      { name: "Mohan Lal", area: "Rangpuri", service: "Electrical Work", rating: 5, review: "Got my switchboard replaced and new wiring done. The technician was skilled, clean, and completed the work efficiently. Highly recommended." },
    ],
    faqs: [
      { question: "How quickly can you send a technician to Rangpuri?", answer: "Our Mahipalpur headquarters is just 1.2 km from Rangpuri. We typically dispatch within 30–60 minutes of your call." },
      { question: "Do you repair all AC brands in Rangpuri?", answer: "Yes, our technicians are trained for all major brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, and more." },
      { question: "What is the inspection charge for Rangpuri?", answer: "Our standard inspection fee is ₹199, which is adjusted against the repair bill if you proceed with the service." },
      { question: "Do you offer same-day service in Rangpuri?", answer: "Yes, same-day service is available for most requests in Rangpuri. Call us early in the day for guaranteed same-day service." },
    ],
  },

  /* ───────────── IGI AIRPORT ───────────── */
  {
    slug: "igi-airport",
    title: "Appliance Repair Services Near IGI Airport, Delhi",
    metaDescription:
      "Fast appliance repair near IGI Airport, Delhi. Medon Company serves the airport zone — hotels, residences & businesses. Sub-1-hour response. Call +91 7303637086.",
    keywords: [
      "appliance repair near IGI Airport",
      "AC repair near Delhi Airport",
      "AC service IGI Airport area",
      "electrician near Delhi Airport",
      "hotel AC repair IGI Airport",
      "home services near IGI Airport",
      "AC repair near me Delhi Airport",
      "Medon Company IGI Airport",
    ],
    heroTitle: "Fast Appliance Repair",
    heroHighlight: "Near IGI Airport",
    heroDescription:
      "Located minutes from IGI Airport, Medon Company provides rapid appliance repair for the entire airport zone. Hotels, hostels, PGs, and residential customers — all served with sub-1-hour response.",
    heroStats: [
      { value: "< 1 hr", label: "Response for airport zone" },
      { value: "50+", label: "Hotels served" },
      { value: "24/7", label: "Emergency support" },
      { value: "4.9★", label: "Hotel partner rating" },
    ],
    aboutHeading: "The Airport Zone's Go-To Service Partner",
    aboutParagraphs: [
      "The IGI Airport area is a unique ecosystem — a mix of world-class hotels, budget accommodations, residential neighborhoods, and commercial spaces. Medon Company understands this diversity and has tailored its services to meet the needs of every customer in the zone.",
      "For hotels and hospitality businesses near the airport, we offer dedicated AMC contracts with emergency response guarantees. A non-functional AC in a hotel room is a revenue loss — that's why we prioritize hospitality clients with sub-1-hour response times.",
      "With our headquarters in Mahipalpur just 3 km away, we are the closest professional appliance repair service to IGI Airport — meaning faster service and lower travel costs passed on to you.",
    ],
    responseTime: "Under 1 hour",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair (Airport Zone)", slug: "ac-repair-service-delhi", description: "24/7 AC repair for hotels, hostels, and homes near IGI Airport. Emergency service available." },
      { title: "AC Repair in Mahipalpur", slug: "ac-repair-mahipalpur", description: "Headquarters-level service in Mahipalpur with same-hour technician dispatch." },
      { title: "AC Installation", slug: "ac-installation-delhi", description: "Bulk AC installation for hotels, PGs, and new residential projects in the airport zone." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Commercial-grade electrical work for hotels, offices, and shops near the airport." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "Commercial and domestic fridge repair. Mini-bar and kitchen refrigerator service for hotels." },
      { title: "Microwave Repair", slug: "microwave-repair-delhi", description: "Quick microwave repair for hotel kitchens, hostels, and residential customers." },
    ],
    nearbyAreas: [
      { name: "Mahipalpur", distance: "HQ — 3 km" },
      { name: "Aerocity", distance: "1 km" },
      { name: "Rangpuri", distance: "2 km" },
      { name: "Mahipalpur Extension", distance: "3.5 km" },
      { name: "Vasant Kunj", distance: "4 km" },
    ],
    testimonials: [
      { name: "Vikram Singh", area: "Airport Hotel Zone", service: "AC Emergency Repair", rating: 5, review: "Guest complaint at 11 PM — AC not cooling. Medon Company had a technician at our hotel within 40 minutes. Fixed the issue without disturbing other guests. Outstanding emergency service." },
      { name: "Pooja Rawat", area: "Airport Residences", service: "AC Installation", rating: 5, review: "Got 3 ACs installed in our new flat near the airport. Medon Company's team was professional, did clean pipe routing, and tested everything thoroughly. Very fair pricing too." },
      { name: "Airport Hotel Group", area: "IGI Airport Zone", service: "Annual Maintenance", rating: 5, review: "Medon Company manages AC maintenance for our 3 hotel properties. Their structured approach, regular reporting, and emergency support has reduced our downtime by 80%." },
    ],
    faqs: [
      { question: "Do you provide 24/7 service near IGI Airport?", answer: "Yes, we offer 24/7 emergency AC repair for hotels and hospitality businesses in the airport zone. Residential customers can book emergency service during extended hours (8 AM – 10 PM)." },
      { question: "How quickly can you reach the IGI Airport area?", answer: "Our Mahipalpur headquarters is just 3 km from IGI Airport. We typically reach within 30–60 minutes of your call." },
      { question: "Do you service hotels near the airport?", answer: "Yes, we serve multiple hotels in the airport zone with AMC contracts and on-demand repair. Our proximity ensures sub-1-hour response for hospitality clients." },
      { question: "Can you handle bulk AC installation for hotels?", answer: "Absolutely. We've completed bulk AC installation and maintenance projects for hotels with 20–100+ rooms. We handle procurement, installation, and ongoing maintenance." },
      { question: "Do you offer AMC for businesses near the airport?", answer: "Yes, we offer customized AMC contracts for hotels, restaurants, and businesses in the airport zone. Plans include scheduled maintenance, priority emergency service, and discounted repair rates." },
    ],
  },

  /* ───────────── MAHIPALPUR EXTENSION ───────────── */
  {
    slug: "mahipalpur-extension",
    title: "Appliance Repair Services in Mahipalpur Extension, Delhi",
    metaDescription:
      "Expert appliance repair in Mahipalpur Extension, Delhi. Medon Company – AC repair, fridge service & electrical work with priority same-day service. Call +91 7303637086.",
    keywords: [
      "appliance repair Mahipalpur Extension",
      "AC repair Mahipalpur Extension",
      "AC service Mahipalpur Extension",
      "electrician Mahipalpur Extension Delhi",
      "fridge repair Mahipalpur Extension",
      "home repair services Mahipalpur Extension",
      "AC repair near me Mahipalpur Extension",
    ],
    heroTitle: "Priority Appliance Repair",
    heroHighlight: "in Mahipalpur Extension",
    heroDescription:
      "Just 0.5 km from our headquarters in Mahipalpur Village, Mahipalpur Extension gets priority service from Medon Company. Our technicians know this neighborhood well — delivering some of the fastest response times we offer.",
    heroStats: [
      { value: "~30 min", label: "Average response time" },
      { value: "₹149", label: "Local inspection rate" },
      { value: "800+", label: "Services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "Your Neighborhood Repair Experts",
    aboutParagraphs: [
      "Mahipalpur Extension is practically our backyard — located just 0.5 km from our operations center at Shop No, L-3, Street Number 1, L Block, Mahipalpur Village. This means our technicians are often on-site within 20–30 minutes of your call.",
      "We've built long-lasting relationships with many households and businesses in Mahipalpur Extension. Our team understands the local infrastructure — older wiring patterns, common AC brands in the area, and the types of appliances most households use.",
      "As a Mahipalpur Extension customer, you benefit from our local pricing — a reduced inspection fee of ₹149 and priority scheduling on all service requests.",
    ],
    responseTime: "Within 30–60 minutes",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Mahipalpur Extension", slug: "ac-repair-mahipalpur", description: "Emergency and scheduled AC repair with same-hour dispatch from our nearby HQ." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Precision refrigerant refilling with leak detection for all AC brands." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge types repaired on the same visit — fast, transparent, and guaranteed." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard, MCB installation, and short circuit fixes." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser heating and leakage repair with proper earthing and safety checks." },
      { title: "Washing Machine Repair", slug: "washing-machine-repair-delhi", description: "Front-load and top-load washing machine repair for all brands." },
    ],
    nearbyAreas: [
      { name: "Mahipalpur Village", distance: "0.5 km" },
      { name: "Rangpuri", distance: "1 km" },
      { name: "Aerocity", distance: "2.5 km" },
      { name: "IGI Airport", distance: "3.5 km" },
      { name: "Vasant Kunj", distance: "2.5 km" },
    ],
    testimonials: [
      { name: "Priya Mehta", area: "Mahipalpur Extension", service: "Electrical Work", rating: 5, review: "Got my entire flat rewired with modular switchboards. Clean work, fair pricing, and they even cleaned up after. Highly recommend for Mahipalpur Extension residents." },
      { name: "Deepak Nair", area: "Mahipalpur Extension", service: "AC Repair", rating: 5, review: "Technician arrived in 25 minutes. Fixed the AC gas leak and refilled refrigerant. Fast, professional, and reasonably priced. Will call Medon Company again." },
      { name: "Sunita Rawat", area: "Mahipalpur Extension", service: "Refrigerator Repair", rating: 5, review: "Fridge stopped cooling overnight. Called Medon Company in the morning — technician was there by 9:30 AM. Fixed and running by 11 AM. Great service!" },
    ],
    faqs: [
      { question: "How fast is the service in Mahipalpur Extension?", answer: "Our headquarters is just 0.5 km away. Technicians are typically on-site within 20–30 minutes of your call." },
      { question: "Do Mahipalpur Extension residents get special pricing?", answer: "Yes! As a local customer, you get a reduced inspection fee of ₹149 (vs. ₹199 standard) and priority scheduling." },
      { question: "Do you handle AC emergencies in Mahipalpur Extension?", answer: "Absolutely. Call us anytime during service hours (8 AM – 10 PM) and we'll dispatch the nearest available technician to you within minutes." },
      { question: "What appliances do you repair in Mahipalpur Extension?", answer: "We repair ACs, refrigerators, washing machines, geysers, microwaves, and handle all electrical work including wiring and switchboard upgrades." },
    ],
  },

  /* ───────────── VASANT VIHAR ───────────── */
  {
    slug: "vasant-vihar",
    title: "Appliance Repair Services in Vasant Vihar, Delhi",
    metaDescription:
      "Premium appliance repair in Vasant Vihar, Delhi. Medon Company offers AC repair, refrigerator service & electrical work for Vasant Vihar homes. Call +91 7303637086.",
    keywords: [
      "appliance repair Vasant Vihar",
      "AC repair Vasant Vihar",
      "AC service Vasant Vihar Delhi",
      "electrician Vasant Vihar Delhi",
      "fridge repair Vasant Vihar",
      "home repair services Vasant Vihar",
      "AC repair near me Vasant Vihar",
      "Medon Company Vasant Vihar",
    ],
    heroTitle: "Premium Appliance Repair",
    heroHighlight: "in Vasant Vihar",
    heroDescription:
      "Vasant Vihar's premium homes deserve premium service. Medon Company delivers professional appliance repair with verified technicians, transparent pricing, and a 90-day service warranty for every repair.",
    heroStats: [
      { value: "2 hrs", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "600+", label: "Vasant Vihar services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "Trusted by Vasant Vihar Residents",
    aboutParagraphs: [
      "Vasant Vihar is a prestigious residential area known for its well-maintained bungalows, embassies, and affluent residential colonies. Medon Company brings the same premium service quality to Vasant Vihar that residents here expect and deserve.",
      "Our technicians are experienced with high-end appliance brands and the complex electrical systems often found in large Vasant Vihar homes. Every technician arriving at a Vasant Vihar home is background-verified, carries a full toolkit, and follows our structured service protocol.",
      "Located just 4 km from our Mahipalpur headquarters, Vasant Vihar is well within our rapid response zone.",
    ],
    responseTime: "Within 2 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Vasant Vihar", slug: "ac-repair-service-delhi", description: "Expert AC repair for all premium brands — Daikin, Mitsubishi, Blue Star, and more." },
      { title: "AC Installation", slug: "ac-installation-delhi", description: "Professional AC installation for bungalows, apartments, and commercial spaces." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Precision gas refilling with leak detection — all refrigerant types supported." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "Premium fridge repair — Samsung, LG, Bosch, Whirlpool, and all major brands." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Complete electrical solutions — from rewiring to smart switch installation." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser repair and installation with proper safety compliance." },
    ],
    nearbyAreas: [
      { name: "Mahipalpur", distance: "HQ — 4 km" },
      { name: "Vasant Kunj", distance: "3 km" },
      { name: "Shanti Niketan", distance: "1.5 km" },
      { name: "Munirka", distance: "4 km" },
      { name: "Rangpuri", distance: "4 km" },
    ],
    testimonials: [
      { name: "Amit Kapoor", area: "Vasant Vihar", service: "AC Repair", rating: 5, review: "Called Medon Company for a Daikin AC that was making unusual noise. Technician diagnosed a faulty compressor bearing and fixed it the same day. Very knowledgeable team." },
      { name: "Col. R. Singh (Retd.)", area: "Vasant Vihar", service: "Electrical Rewiring", rating: 5, review: "Had our 30-year-old bungalow completely rewired by Medon Company. Professional team, zero disruption, and they managed the complexity of old wiring perfectly." },
      { name: "Alka Puri", area: "Vasant Vihar", service: "Refrigerator Repair", rating: 5, review: "Medon Company repaired our Bosch fridge that other service centers had given up on. The technician was patient, thorough, and the fridge has been running perfectly since." },
    ],
    faqs: [
      { question: "How long does it take to reach Vasant Vihar from your HQ?", answer: "Our Mahipalpur headquarters is 4 km from Vasant Vihar. We typically reach within 1.5–2 hours of your call." },
      { question: "Do you service premium appliance brands in Vasant Vihar?", answer: "Yes, we specialize in all brands including premium ones like Daikin, Mitsubishi, Bosch, and Blue Star that are common in Vasant Vihar homes." },
      { question: "Can you handle large homes and bungalows in Vasant Vihar?", answer: "Absolutely. We regularly service large bungalows with multi-unit AC systems, centralized electrical panels, and commercial-grade appliances." },
      { question: "Do you offer AMC for Vasant Vihar homes?", answer: "Yes, we offer annual maintenance contracts for homes in Vasant Vihar. Contact us for a customized plan covering all your appliances." },
    ],
  },

  /* ───────────── SHANTI NIKETAN ───────────── */
  {
    slug: "shanti-niketan",
    title: "Appliance Repair Services in Shanti Niketan, Delhi",
    metaDescription:
      "Expert appliance repair in Shanti Niketan, Delhi. Medon Company offers AC repair, refrigerator service & electrical work for Shanti Niketan residents. Call +91 7303637086.",
    keywords: [
      "appliance repair Shanti Niketan",
      "AC repair Shanti Niketan",
      "AC service Shanti Niketan Delhi",
      "electrician Shanti Niketan Delhi",
      "fridge repair Shanti Niketan",
      "home repair services Shanti Niketan",
      "AC repair near me Shanti Niketan",
      "Medon Company Shanti Niketan",
    ],
    heroTitle: "Reliable Appliance Repair",
    heroHighlight: "in Shanti Niketan",
    heroDescription:
      "Shanti Niketan's elegant homes deserve expert care. Medon Company provides professional appliance repair services in Shanti Niketan with verified technicians, transparent pricing, and same-day service.",
    heroStats: [
      { value: "2–3 hrs", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "400+", label: "Shanti Niketan services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "Serving Shanti Niketan with Care",
    aboutParagraphs: [
      "Shanti Niketan is one of Delhi's most sought-after residential enclaves — known for its spacious bungalows, greenery, and distinguished residents. Medon Company has earned the trust of Shanti Niketan households through consistent, professional appliance repair services.",
      "Our technicians understand the premium appliance brands and complex electrical systems in Shanti Niketan homes. Every service is performed with care, precision, and full transparency on pricing.",
    ],
    responseTime: "Within 2–3 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Shanti Niketan", slug: "ac-repair-service-delhi", description: "Expert AC repair for split, window, and cassette ACs — all premium brands." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Precision refrigerant refilling with leak detection." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge brands repaired — single door, double door, and side-by-side." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard upgrades, MCB installation for Shanti Niketan homes." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser repair and installation with proper safety compliance." },
      { title: "Microwave Repair", slug: "microwave-repair-delhi", description: "Solo, grill, and convection microwave repair — all brands." },
    ],
    nearbyAreas: [
      { name: "Vasant Vihar", distance: "1.5 km" },
      { name: "Vasant Kunj", distance: "3 km" },
      { name: "Mahipalpur", distance: "5 km" },
      { name: "Munirka", distance: "3.5 km" },
      { name: "Kishangarh", distance: "4 km" },
    ],
    testimonials: [
      { name: "Ritu Sharma", area: "Shanti Niketan", service: "AC Deep Cleaning", rating: 5, review: "Medon Company cleaned all 3 of our ACs in one visit. Very thorough and professional. Cooling has improved significantly. Highly recommend." },
      { name: "V. Nair", area: "Shanti Niketan", service: "Electrical Work", rating: 5, review: "Needed new switchboards and wiring for a renovation. Medon Company's team completed the work neatly and on time. Very satisfied with the quality." },
      { name: "Sunanda Rao", area: "Shanti Niketan", service: "Refrigerator Repair", rating: 5, review: "Quick and reliable service. Technician identified the issue immediately and fixed it at a fair price. Will definitely use Medon Company again." },
    ],
    faqs: [
      { question: "How long does it take to reach Shanti Niketan?", answer: "Our Mahipalpur headquarters is about 5 km from Shanti Niketan. We typically reach within 2–3 hours of your call." },
      { question: "Do you repair premium appliance brands in Shanti Niketan?", answer: "Yes, we service all premium brands including Daikin, Bosch, Siemens, LG, Samsung, and more." },
      { question: "Do you offer same-day service in Shanti Niketan?", answer: "Same-day service is available for most requests. Call before noon for the best chance of same-day service." },
      { question: "What is the inspection charge for Shanti Niketan?", answer: "Our standard inspection fee is ₹199, which is adjusted against the repair bill if you proceed." },
    ],
  },

  /* ───────────── NANGAL DEWAT ───────────── */
  {
    slug: "nangal-dewat",
    title: "Appliance Repair Services in Nangal Dewat, Delhi",
    metaDescription:
      "Reliable appliance repair in Nangal Dewat, Delhi. Medon Company offers AC repair, refrigerator service & electrical work. Fast response. Call +91 7303637086.",
    keywords: [
      "appliance repair Nangal Dewat",
      "AC repair Nangal Dewat",
      "AC service Nangal Dewat Delhi",
      "electrician Nangal Dewat Delhi",
      "fridge repair Nangal Dewat",
      "home repair services Nangal Dewat",
      "AC repair near me Nangal Dewat",
      "Medon Company Nangal Dewat",
    ],
    heroTitle: "Fast Appliance Repair",
    heroHighlight: "in Nangal Dewat",
    heroDescription:
      "Medon Company brings professional appliance repair to Nangal Dewat. Our verified technicians deliver fast, reliable service for ACs, refrigerators, electrical systems, and more.",
    heroStats: [
      { value: "2–3 hrs", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "300+", label: "Services done" },
      { value: "4.7★", label: "Average customer rating" },
    ],
    aboutHeading: "Professional Repairs for Nangal Dewat",
    aboutParagraphs: [
      "Nangal Dewat is a growing residential area within our service zone. Medon Company's verified technicians serve this area with the same professionalism and transparency that residents across Mahipalpur and nearby areas have come to trust.",
      "From AC repair and gas refilling to electrical upgrades and refrigerator service, our team handles all home appliance needs efficiently.",
    ],
    responseTime: "Within 2–3 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Nangal Dewat", slug: "ac-repair-service-delhi", description: "Expert AC repair for all brands — split, window, and cassette ACs." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "R22, R32, and R410A refrigerant refilling with leak detection." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "Single door, double door, and commercial fridge repair." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard repair, and MCB installation." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser heating issues, leakage repair, and new installation." },
      { title: "Washing Machine Repair", slug: "washing-machine-repair-delhi", description: "Front-load and top-load washing machine repair." },
    ],
    nearbyAreas: [
      { name: "Vasant Kunj", distance: "2 km" },
      { name: "Vasant Vihar", distance: "3 km" },
      { name: "Kishangarh", distance: "3 km" },
      { name: "Mahipalpur", distance: "5 km" },
      { name: "Munirka", distance: "4 km" },
    ],
    testimonials: [
      { name: "Rajesh Kumar", area: "Nangal Dewat", service: "AC Repair", rating: 5, review: "Medon Company sent a technician quickly and fixed my AC cooling issue. Professional and transparent pricing. Highly recommended." },
      { name: "Seema Verma", area: "Nangal Dewat", service: "Refrigerator Repair", rating: 4, review: "Good service overall. Technician diagnosed the issue correctly and fixed it within 2 hours. Fair pricing with no hidden charges." },
      { name: "Anil Singh", area: "Nangal Dewat", service: "Electrical Work", rating: 5, review: "Got my switchboard replaced and wiring checked. Clean work and the technician explained everything. Satisfied customer." },
    ],
    faqs: [
      { question: "Do you serve Nangal Dewat?", answer: "Yes, Nangal Dewat is within our service area. We typically reach within 2–3 hours of your call." },
      { question: "What is the inspection charge for Nangal Dewat?", answer: "Our standard inspection fee is ₹199, adjusted against the repair bill if you proceed with the service." },
      { question: "Do you offer same-day service in Nangal Dewat?", answer: "Same-day service is available for most requests. Call before noon for the best chance of same-day service." },
      { question: "Which appliances do you repair in Nangal Dewat?", answer: "We repair ACs, refrigerators, washing machines, geysers, microwaves, and handle all electrical work." },
    ],
  },

  /* ───────────── KISHANGARH ───────────── */
  {
    slug: "kishangarh",
    title: "Appliance Repair Services in Kishangarh, Delhi",
    metaDescription:
      "Expert appliance repair in Kishangarh, Vasant Kunj. Medon Company provides AC repair, fridge service & electrical work with fast response. Call +91 7303637086.",
    keywords: [
      "appliance repair Kishangarh",
      "AC repair Kishangarh",
      "AC service Kishangarh Delhi",
      "electrician Kishangarh Delhi",
      "fridge repair Kishangarh Vasant Kunj",
      "home repair services Kishangarh",
      "AC repair near me Kishangarh",
      "Medon Company Kishangarh",
    ],
    heroTitle: "Fast Appliance Repair",
    heroHighlight: "in Kishangarh",
    heroDescription:
      "Kishangarh is one of our most active service areas — located just 2.5 km from our Mahipalpur headquarters. Medon Company delivers fast, expert appliance repair for all Kishangarh homes and businesses.",
    heroStats: [
      { value: "~1.5 hrs", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "700+", label: "Kishangarh services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "Kishangarh's Trusted Repair Partner",
    aboutParagraphs: [
      "Kishangarh is a densely populated residential area adjacent to Vasant Kunj — home to thousands of families with regular appliance repair needs. Medon Company has built a strong presence here through reliable, on-time service and transparent pricing.",
      "Our technicians visit Kishangarh regularly, ensuring that familiar faces service your appliances. We're experienced with the local housing types and the common appliance issues faced by residents here.",
    ],
    responseTime: "Within 1.5 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Kishangarh", slug: "ac-repair-service-delhi", description: "Expert AC repair for all brands — split, window, and cassette. Same-day service available." },
      { title: "AC Service in Vasant Kunj", slug: "ac-service-vasant-kunj", description: "Comprehensive AC servicing for Kishangarh and Vasant Kunj residents." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "R22, R32, and R410A gas refilling with leak detection." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge types repaired — single door, double door, and commercial units." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard repair, MCB installation for Kishangarh homes." },
      { title: "Washing Machine Repair", slug: "washing-machine-repair-delhi", description: "Front-load and top-load washing machine repair — all brands." },
    ],
    nearbyAreas: [
      { name: "Vasant Kunj", distance: "1 km" },
      { name: "Mahipalpur", distance: "HQ — 2.5 km" },
      { name: "Munirka", distance: "2 km" },
      { name: "Nangal Dewat", distance: "3 km" },
      { name: "Vasant Vihar", distance: "4 km" },
    ],
    testimonials: [
      { name: "Rakesh Gupta", area: "Kishangarh", service: "AC Repair", rating: 5, review: "Medon Company technician reached Kishangarh within 1.5 hours. AC was fixed quickly — gas refilling and leak check done. Very professional service." },
      { name: "Meena Sharma", area: "Kishangarh", service: "Washing Machine Repair", rating: 5, review: "My front-load washing machine wasn't draining. Medon Company fixed it in one visit. Fair price and clean work. Very happy." },
      { name: "Sanjay Batra", area: "Kishangarh", service: "Refrigerator Repair", rating: 5, review: "Fridge stopped cooling. Technician diagnosed it as a gas leak and refilled refrigerant. Working perfectly now. Transparent pricing throughout." },
    ],
    faqs: [
      { question: "How quickly can you reach Kishangarh?", answer: "Our Mahipalpur HQ is 2.5 km from Kishangarh. We typically dispatch within 1–1.5 hours of your call." },
      { question: "Do you repair all AC brands in Kishangarh?", answer: "Yes, we repair all major AC brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, and more." },
      { question: "Is same-day service available in Kishangarh?", answer: "Yes, same-day service is available for most repair requests. Call us early in the day for guaranteed same-day service." },
      { question: "What is the inspection charge in Kishangarh?", answer: "Our standard inspection fee is ₹199, adjusted against the repair bill if you proceed with the service." },
    ],
  },

  /* ───────────── JNU ───────────── */
  {
    slug: "jnu",
    title: "Appliance Repair Services in JNU Area, Delhi",
    metaDescription:
      "Reliable appliance repair near JNU (Jawaharlal Nehru University), Delhi. Medon Company – AC repair, fridge service & electrical work. Call +91 7303637086.",
    keywords: [
      "appliance repair JNU",
      "AC repair JNU Delhi",
      "AC service near JNU",
      "electrician JNU Delhi",
      "fridge repair JNU area",
      "home repair services JNU Delhi",
      "AC repair near me JNU",
      "Medon Company JNU",
    ],
    heroTitle: "Expert Appliance Repair",
    heroHighlight: "near JNU",
    heroDescription:
      "Medon Company serves the JNU area with professional appliance repair — whether you're a faculty member, student, or resident near Jawaharlal Nehru University. Fast response, transparent pricing, verified technicians.",
    heroStats: [
      { value: "2–3 hrs", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "400+", label: "JNU area services done" },
      { value: "4.7★", label: "Average customer rating" },
    ],
    aboutHeading: "Serving JNU and Nearby Residents",
    aboutParagraphs: [
      "The JNU area is home to faculty residences, staff quarters, and residential colonies — all with regular appliance repair needs. Medon Company has been serving these communities with reliable, professional appliance repair since 2020.",
      "Our technicians understand the mix of older and newer appliances common in this area, and deliver the same quality service we're known for across all 13 of our service areas.",
    ],
    responseTime: "Within 2–3 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair near JNU", slug: "ac-repair-service-delhi", description: "Expert AC repair for split and window ACs — all brands and models." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Refrigerant refilling with leak detection for all AC types." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge types repaired — single door, double door, and mini-fridges." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard repair, and MCB installation." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser heating and leakage repair with safety checks." },
      { title: "Washing Machine Repair", slug: "washing-machine-repair-delhi", description: "Front-load and top-load washing machine repair." },
    ],
    nearbyAreas: [
      { name: "Munirka", distance: "1.5 km" },
      { name: "Vasant Kunj", distance: "4 km" },
      { name: "Kishangarh", distance: "3 km" },
      { name: "R.K. Puram", distance: "3 km" },
      { name: "Mahipalpur", distance: "7 km" },
    ],
    testimonials: [
      { name: "Prof. A. Menon", area: "JNU Campus", service: "AC Repair", rating: 5, review: "Medon Company repaired our old split AC efficiently. Technician was knowledgeable and fixed a tricky compressor issue. Transparent pricing and great service." },
      { name: "Kavita Nair", area: "JNU Area", service: "Refrigerator Repair", rating: 5, review: "Fridge wasn't cooling. Medon Company diagnosed and fixed a refrigerant leak the same day. Very professional and reasonably priced." },
      { name: "Sunil Das", area: "JNU Residential Colony", service: "Electrical Work", rating: 4, review: "Had my switchboard replaced and wiring inspected. Good service, clean work. Satisfied with Medon Company." },
    ],
    faqs: [
      { question: "Do you serve the JNU campus area?", answer: "Yes, we serve the JNU campus area, faculty residences, and surrounding residential colonies. We typically reach within 2–3 hours of your call." },
      { question: "What appliances do you repair near JNU?", answer: "We repair ACs, refrigerators, washing machines, geysers, microwaves, and handle all electrical work." },
      { question: "Is same-day service available near JNU?", answer: "Same-day service is available for most requests. Call before noon for the best chance of same-day service." },
      { question: "What is the inspection charge?", answer: "Our standard inspection fee is ₹199, adjusted against the repair bill if you proceed with the service." },
    ],
  },

  /* ───────────── MUNIRKA ───────────── */
  {
    slug: "munirka",
    title: "Appliance Repair Services in Munirka, Delhi",
    metaDescription:
      "Expert appliance repair in Munirka, Delhi. Medon Company offers AC repair, refrigerator service & electrical work with fast response. Call +91 7303637086.",
    keywords: [
      "appliance repair Munirka",
      "AC repair Munirka",
      "AC service Munirka Delhi",
      "electrician Munirka Delhi",
      "fridge repair Munirka",
      "home repair services Munirka",
      "AC repair near me Munirka",
      "Medon Company Munirka",
    ],
    heroTitle: "Trusted Appliance Repair",
    heroHighlight: "in Munirka",
    heroDescription:
      "Medon Company brings fast, reliable appliance repair to Munirka. Our verified technicians handle all brands of ACs, refrigerators, washing machines, and electrical systems with full transparency.",
    heroStats: [
      { value: "2 hrs", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "600+", label: "Munirka services done" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    aboutHeading: "Serving Munirka Residents Professionally",
    aboutParagraphs: [
      "Munirka is a bustling mixed-use area with dense residential colonies, PGs, and commercial establishments. Medon Company regularly serves Munirka residents with high-volume appliance repair needs — especially AC and refrigerator service during summer months.",
      "Our technicians are experienced with the appliance types and housing configurations common in Munirka. We offer the same professional, transparent service that thousands of customers across our 13 service areas trust.",
    ],
    responseTime: "Within 2 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in Munirka", slug: "ac-repair-service-delhi", description: "Expert AC repair for all brands — split, window, and cassette ACs." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "R22, R32, and R410A refrigerant refilling with leak detection." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge types repaired — single door, double door, and commercial units." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard repair, MCB installation for Munirka homes." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser heating issues, leakage repair, and new installation." },
      { title: "Washing Machine Repair", slug: "washing-machine-repair-delhi", description: "Front-load and top-load washing machine repair — all brands." },
    ],
    nearbyAreas: [
      { name: "Vasant Kunj", distance: "2 km" },
      { name: "JNU", distance: "1.5 km" },
      { name: "R.K. Puram", distance: "3 km" },
      { name: "Kishangarh", distance: "2 km" },
      { name: "Mahipalpur", distance: "5 km" },
    ],
    testimonials: [
      { name: "Asha Singh", area: "Munirka", service: "AC Repair", rating: 5, review: "Medon Company came within 2 hours and fixed my AC cooling problem on the spot. Professional technician and very reasonable charges. Highly recommend." },
      { name: "Deepak Sharma", area: "Munirka Village", service: "Refrigerator Repair", rating: 5, review: "Fridge stopped cooling on a hot day. Medon Company fixed it in under 2 hours. Technician was knowledgeable and the pricing was fair." },
      { name: "Rita Nair", area: "Munirka", service: "Electrical Work", rating: 5, review: "Got my flat's wiring and switchboards upgraded. Clean work, no mess, and completed the same day. Very satisfied." },
    ],
    faqs: [
      { question: "How quickly can you reach Munirka?", answer: "We typically reach Munirka within 1.5–2 hours of your call." },
      { question: "Do you repair all AC brands in Munirka?", answer: "Yes, we repair all major brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, and more." },
      { question: "Is same-day service available in Munirka?", answer: "Yes, same-day service is available for most requests. Call us early in the day for guaranteed same-day service." },
      { question: "What is the inspection charge in Munirka?", answer: "Our standard inspection fee is ₹199, adjusted against the repair bill if you proceed with the service." },
    ],
  },

  /* ───────────── R.K. PURAM ───────────── */
  {
    slug: "rk-puram",
    title: "Appliance Repair Services in R.K. Puram, Delhi",
    metaDescription:
      "Reliable appliance repair in R.K. Puram, Delhi. Medon Company offers AC repair, fridge service & electrical work. Verified technicians. Call +91 7303637086.",
    keywords: [
      "appliance repair R.K. Puram",
      "AC repair RK Puram Delhi",
      "AC service R.K. Puram",
      "electrician R.K. Puram Delhi",
      "fridge repair RK Puram",
      "home repair services RK Puram",
      "AC repair near me R.K. Puram",
      "Medon Company R.K. Puram",
    ],
    heroTitle: "Professional Appliance Repair",
    heroHighlight: "in R.K. Puram",
    heroDescription:
      "Medon Company serves R.K. Puram's large government housing colonies, residential sectors, and commercial areas with professional appliance repair. Verified technicians, transparent pricing, and guaranteed service quality.",
    heroStats: [
      { value: "2–3 hrs", label: "Average response time" },
      { value: "₹199", label: "Standard inspection rate" },
      { value: "500+", label: "R.K. Puram services done" },
      { value: "4.7★", label: "Average customer rating" },
    ],
    aboutHeading: "Trusted Repairs for R.K. Puram",
    aboutParagraphs: [
      "R.K. Puram is a large residential area with government colonies, private apartments, and commercial markets spread across 13+ sectors. Medon Company serves all sectors of R.K. Puram with the same professional, verified technician service.",
      "Our experience with government housing colonies means we understand the specific appliance types and electrical configurations common in R.K. Puram. Every repair is done transparently with a 90-day service warranty.",
    ],
    responseTime: "Within 2–3 hours",
    sinceYear: "2020",
    localServices: [
      { title: "AC Repair in R.K. Puram", slug: "ac-repair-service-delhi", description: "Expert AC repair for all brands — split, window, and cassette ACs." },
      { title: "AC Gas Refilling", slug: "ac-gas-refilling-delhi", description: "Refrigerant refilling with leak detection for all AC types." },
      { title: "Refrigerator Repair", slug: "refrigerator-repair-delhi", description: "All fridge types repaired — single door, double door, and commercial units." },
      { title: "Electrical Services", slug: "electrical-services-delhi", description: "Wiring, switchboard repair, and MCB installation for R.K. Puram homes." },
      { title: "Geyser Repair", slug: "geyser-repair-delhi", description: "Geyser heating issues, leakage repair, and installation." },
      { title: "Washing Machine Repair", slug: "washing-machine-repair-delhi", description: "Front-load and top-load washing machine repair — all brands." },
    ],
    nearbyAreas: [
      { name: "Munirka", distance: "3 km" },
      { name: "JNU", distance: "3 km" },
      { name: "Vasant Kunj", distance: "5 km" },
      { name: "Kishangarh", distance: "5 km" },
      { name: "Mahipalpur", distance: "8 km" },
    ],
    testimonials: [
      { name: "Suresh Rao", area: "R.K. Puram Sector 4", service: "AC Repair", rating: 5, review: "Medon Company sent a technician who fixed my split AC gas leak efficiently. Professional service, fair pricing, and a 90-day warranty. Very satisfied." },
      { name: "Vandana Gupta", area: "R.K. Puram Sector 7", service: "Refrigerator Repair", rating: 5, review: "My Samsung fridge stopped cooling. Medon Company diagnosed and repaired it on the same visit. Transparent pricing — no hidden charges." },
      { name: "K. Krishnamurthy", area: "R.K. Puram", service: "Electrical Work", rating: 4, review: "Got my switchboard upgraded to modular. Clean work and completed on time. Good professional service from Medon Company." },
    ],
    faqs: [
      { question: "Do you serve all sectors of R.K. Puram?", answer: "Yes, we serve all sectors of R.K. Puram. We typically reach within 2–3 hours of your call." },
      { question: "What appliances do you repair in R.K. Puram?", answer: "We repair ACs, refrigerators, washing machines, geysers, microwaves, and handle all electrical work." },
      { question: "Is same-day service available in R.K. Puram?", answer: "Same-day service is available for most requests. Call before noon for the best chance of same-day service." },
      { question: "What is the inspection charge for R.K. Puram?", answer: "Our standard inspection fee is ₹199, adjusted against the repair bill if you proceed with the service." },
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
