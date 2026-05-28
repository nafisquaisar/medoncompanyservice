/* Icon names resolved client-side via ServiceIconMap */
export type ServiceIconName =
  | "Snowflake"
  | "Refrigerator"
  | "Zap"
  | "Flame"
  | "Microwave"
  | "Wrench"
  | "MapPin"
  | "Wind"
  | "Thermometer";

/* ─────────────────────────────────────────────────────
   SERVICE PAGE DATA TYPES
   ───────────────────────────────────────────────────── */

export interface ServiceDetail {
  title: string;
  description: string;
}

export interface PricingItem {
  service: string;
  price: string;
  note?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  /* ── URL & SEO ──────────────────────────── */
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];

  /* ── Hero ────────────────────────────────── */
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroIcon: ServiceIconName;

  /* ── Service Details ─────────────────────── */
  detailsHeading: string;
  detailsDescription: string;
  details: ServiceDetail[];

  /* ── Pricing ─────────────────────────────── */
  pricing: PricingItem[];

  /* ── Benefits ────────────────────────────── */
  benefits: string[];

  /* ── FAQ ──────────────────────────────────── */
  faqs: FAQ[];
}

/* ─────────────────────────────────────────────────────
   SERVICE DATA
   ───────────────────────────────────────────────────── */

export const ALL_SERVICES: ServicePageData[] = [
  /* ─────── AC Repair Service Delhi ─────── */
  {
    slug: "ac-repair-service-delhi",
    title: "AC Repair Service in Delhi NCR",
    metaDescription:
      "Professional AC repair service in Delhi NCR by Medon Company. Expert split & window AC repair, gas refilling, compressor fix. Verified technicians, transparent pricing. Call +91 7303637086.",
    keywords: [
      "AC repair Delhi",
      "AC repair service Delhi NCR",
      "split AC repair near me",
      "window AC repair Delhi",
      "AC not cooling fix",
      "AC compressor repair Delhi",
      "best AC repair service",
      "emergency AC repair Delhi",
    ],
    heroTitle: "Expert AC Repair Service",
    heroHighlight: "in Delhi NCR",
    heroDescription:
      "Get your AC fixed by Medon's verified technicians. We handle all brands and models — split, window, and cassette ACs. Fast response, transparent pricing, and guaranteed satisfaction.",
    heroIcon: "Snowflake",
    detailsHeading: "Complete AC Repair Solutions",
    detailsDescription:
      "From minor fixes to major compressor overhauls, our certified technicians diagnose and repair all AC issues with precision and transparency.",
    details: [
      { title: "Cooling Issue Diagnosis", description: "Complete inspection of refrigerant levels, filters, coils, and thermostat to identify why your AC isn't cooling properly." },
      { title: "Compressor Repair", description: "Expert compressor diagnosis and repair for split and window ACs. OEM parts used for all replacements." },
      { title: "Gas Refilling (R22/R32/R410A)", description: "Leak detection followed by precise gas refilling using brand-recommended refrigerant grades." },
      { title: "PCB & Sensor Repair", description: "Circuit board diagnostics and sensor replacement for error codes, auto-shutoff, and display failures." },
      { title: "Fan Motor Replacement", description: "Indoor and outdoor fan motor repair or replacement for noise, vibration, or airflow problems." },
      { title: "Drainage & Leak Fix", description: "Water leakage repair including drain pipe cleaning, tray alignment, and insulation fixes." },
    ],
    pricing: [
      { service: "AC General Inspection", price: "₹199", note: "All brands" },
      { service: "AC Gas Refilling (Split)", price: "₹1,499–₹2,999", note: "Depends on gas type" },
      { service: "AC Gas Refilling (Window)", price: "₹999–₹1,999" },
      { service: "Compressor Repair", price: "₹2,500+", note: "After diagnosis" },
      { service: "PCB Repair / Replacement", price: "₹1,200+", note: "Brand dependent" },
      { service: "Fan Motor Replacement", price: "₹800–₹1,800" },
    ],
    benefits: [
      "Same-day service in most Delhi NCR areas",
      "Verified and background-checked technicians",
      "90-day warranty on all repairs",
      "Transparent pricing — no hidden charges",
      "All brands supported: Daikin, LG, Samsung, Voltas, Blue Star, Hitachi",
      "Real-time tracking of your service request",
    ],
    faqs: [
      { question: "How quickly can you send a technician for AC repair in Delhi?", answer: "We typically dispatch a verified technician within 2–4 hours for most areas in Delhi NCR. For Mahipalpur and Vasant Kunj, same-hour service is often available." },
      { question: "Do you repair all AC brands?", answer: "Yes, our technicians are trained to repair all major brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, Carrier, and more." },
      { question: "What is the cost of AC gas refilling?", answer: "AC gas refilling starts from ₹999 for window ACs and ₹1,499 for split ACs. The exact cost depends on the refrigerant type (R22, R32, or R410A) and quantity needed." },
      { question: "Do you provide a warranty on AC repairs?", answer: "Yes, we provide a 90-day warranty on all repair work. Parts replacements carry the manufacturer's warranty." },
      { question: "Is there a visiting charge for AC inspection?", answer: "Our standard inspection charge is ₹199, which is adjusted against the repair bill if you proceed with the service." },
    ],
  },

  /* ─────── AC Repair Mahipalpur ─────── */
  {
    slug: "ac-repair-mahipalpur",
    title: "AC Repair Service in Mahipalpur",
    metaDescription:
      "Best AC repair service in Mahipalpur, Delhi. Medon Company offers expert split & window AC repair, gas refilling, installation near Mahipalpur. Call +91 7303637086.",
    keywords: [
      "AC repair Mahipalpur",
      "AC service Mahipalpur",
      "AC repair near Mahipalpur",
      "split AC repair Mahipalpur",
      "AC gas refilling Mahipalpur",
      "AC technician Mahipalpur Delhi",
      "best AC repair Mahipalpur",
    ],
    heroTitle: "AC Repair Service",
    heroHighlight: "in Mahipalpur",
    heroDescription:
      "Medon Company's headquarters is located in Mahipalpur — which means faster response times, priority scheduling, and same-hour technician dispatch for all AC repair needs in the area.",
    heroIcon: "MapPin",
    detailsHeading: "AC Services in Mahipalpur",
    detailsDescription:
      "As Mahipalpur's leading AC service provider, we offer comprehensive repair, maintenance, and installation services right at your doorstep.",
    details: [
      { title: "Split AC Repair", description: "Complete diagnosis and repair of split ACs — cooling issues, gas leaks, compressor problems, and electrical faults." },
      { title: "Window AC Repair", description: "Expert window AC repair including motor replacement, gas refilling, thermostat fix, and noise troubleshooting." },
      { title: "AC Deep Cleaning", description: "Professional deep cleaning of indoor and outdoor units using high-pressure jet wash and anti-bacterial treatment." },
      { title: "Emergency AC Repair", description: "Same-hour emergency repair service for AC breakdowns in Mahipalpur — available 7 days a week." },
      { title: "Annual Maintenance (AMC)", description: "Scheduled maintenance contracts with priority service, discounted repairs, and regular inspections." },
      { title: "AC Installation & Shifting", description: "Professional AC mounting, copper pipe fitting, and safe relocation of units within Mahipalpur." },
    ],
    pricing: [
      { service: "AC Inspection Visit", price: "₹149", note: "Mahipalpur special" },
      { service: "AC Deep Cleaning (Split)", price: "₹499–₹799" },
      { service: "AC Gas Refilling", price: "₹999–₹2,999" },
      { service: "AC Installation (Split)", price: "₹1,499–₹2,499" },
      { service: "Emergency Repair", price: "₹299+", note: "Urgent dispatch" },
      { service: "AMC (Annual)", price: "₹2,999–₹4,999" },
    ],
    benefits: [
      "Headquarters in Mahipalpur — fastest response times",
      "Same-hour emergency dispatch available",
      "Special pricing for Mahipalpur residents",
      "Cover entire Mahipalpur Village, Extension & nearby areas",
      "All brands serviced with genuine parts",
      "Post-service follow-up and support",
    ],
    faqs: [
      { question: "Is Medon based in Mahipalpur?", answer: "Yes, Medon Company's office is located in Mahipalpur at Shop No L-3, Street Number 1, L block, Mahipalpur Village, New Delhi 110037. This means we can offer the fastest response times in the area." },
      { question: "How fast can you reach for an emergency AC repair in Mahipalpur?", answer: "For Mahipalpur, our average response time is under 1 hour for emergency calls. We prioritize local service requests." },
      { question: "Do you offer discounted rates for Mahipalpur residents?", answer: "Yes, we offer special inspection rates (₹149 instead of ₹199) and priority scheduling for residents of Mahipalpur and nearby areas." },
      { question: "Which areas near Mahipalpur do you cover?", answer: "We cover Mahipalpur Village, Mahipalpur Extension, Vasant Kunj, Rangpuri, Kishangarh, Munirka, and all surrounding localities." },
      { question: "Can I get same-day AC installation in Mahipalpur?", answer: "Yes, same-day AC installation is available for Mahipalpur residents. Book before 12 PM for same-day service." },
    ],
  },

  /* ─────── AC Service Vasant Kunj ─────── */
  {
    slug: "ac-service-vasant-kunj",
    title: "AC Service & Repair in Vasant Kunj",
    metaDescription:
      "Reliable AC service & repair in Vasant Kunj, Delhi. Medon provides split AC repair, deep cleaning, gas refilling, and installation. Call +91 7303637086.",
    keywords: [
      "AC service Vasant Kunj",
      "AC repair Vasant Kunj",
      "AC repair near Vasant Kunj",
      "split AC service Vasant Kunj Delhi",
      "AC deep cleaning Vasant Kunj",
      "AC gas refilling Vasant Kunj",
      "AC installation Vasant Kunj",
    ],
    heroTitle: "AC Service & Repair",
    heroHighlight: "in Vasant Kunj",
    heroDescription:
      "Professional AC service across all Vasant Kunj sectors. From deep cleaning to major repairs, Medon's verified technicians deliver reliable service with transparent pricing.",
    heroIcon: "MapPin",
    detailsHeading: "AC Services in Vasant Kunj",
    detailsDescription:
      "We serve all sectors of Vasant Kunj including A, B, C, D, E & F blocks with comprehensive AC repair and maintenance solutions.",
    details: [
      { title: "AC Deep Cleaning Service", description: "Thorough cleaning of filters, coils, and drain lines using professional equipment for optimal cooling performance." },
      { title: "Split AC Repair", description: "Expert repair for all split AC issues — low cooling, water leakage, noise, error codes, and compressor problems." },
      { title: "AC Gas Refilling", description: "Precision gas refilling after leak detection. We use R32 and R410A refrigerants for modern split ACs." },
      { title: "AC Installation", description: "Professional wall-mounting, pipe fitting, and electrical wiring for new AC units in Vasant Kunj homes." },
      { title: "Preventive Maintenance", description: "Scheduled servicing to extend AC life, improve efficiency, and prevent breakdowns during peak summer." },
      { title: "AC Uninstallation & Shifting", description: "Safe removal and relocation of AC units during home renovation or moving within Vasant Kunj." },
    ],
    pricing: [
      { service: "AC Inspection", price: "₹199" },
      { service: "AC Deep Cleaning (Split)", price: "₹499–₹799" },
      { service: "AC Deep Cleaning (Window)", price: "₹399–₹599" },
      { service: "AC Gas Refilling", price: "₹999–₹2,999" },
      { service: "AC Installation", price: "₹1,499–₹2,499" },
      { service: "AC Uninstallation", price: "₹499–₹799" },
    ],
    benefits: [
      "Service across all Vasant Kunj sectors (A–F)",
      "2–4 hour technician dispatch to Vasant Kunj",
      "Experienced technicians for high-rise apartments",
      "All major brands supported",
      "Transparent pricing with no hidden costs",
      "90-day service warranty",
    ],
    faqs: [
      { question: "Do you serve all sectors of Vasant Kunj?", answer: "Yes, we provide AC service across all Vasant Kunj sectors — A, B, C, D, E, F blocks and surrounding areas like Kishangarh and Munirka." },
      { question: "How long does AC deep cleaning take?", answer: "A standard split AC deep cleaning takes 45–60 minutes. This includes filter wash, coil cleaning, drain flush, and anti-bacterial spray." },
      { question: "Can you service ACs in high-rise buildings?", answer: "Yes, our technicians are experienced with high-rise AC installations and repairs. We carry all necessary equipment for elevated work." },
      { question: "What brands do you service in Vasant Kunj?", answer: "We service all brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, Panasonic, Godrej, Lloyd, and more." },
      { question: "Do you offer AC AMC for Vasant Kunj residents?", answer: "Yes, we offer annual maintenance contracts starting from ₹2,999. AMC includes 2–4 services per year, priority scheduling, and discounted repair rates." },
    ],
  },

  /* ─────── AC Installation Delhi ─────── */
  {
    slug: "ac-installation-delhi",
    title: "AC Installation Service in Delhi NCR",
    metaDescription:
      "Professional AC installation service in Delhi NCR. Split AC mounting, copper pipe fitting, and electrical setup by Medon's verified technicians. Call +91 7303637086.",
    keywords: [
      "AC installation Delhi",
      "split AC installation near me",
      "AC installation service Delhi NCR",
      "AC mounting service",
      "AC installation charges Delhi",
      "window AC installation",
      "AC copper pipe fitting",
    ],
    heroTitle: "Professional AC Installation",
    heroHighlight: "in Delhi NCR",
    heroDescription:
      "Get your new AC installed perfectly by Medon's certified technicians. We handle wall mounting, copper pipe fitting, electrical wiring, and testing — all in a single visit.",
    heroIcon: "Wrench",
    detailsHeading: "AC Installation Services",
    detailsDescription:
      "Complete AC installation with precision mounting, proper pipe routing, and thorough testing to ensure optimal performance from day one.",
    details: [
      { title: "Split AC Installation", description: "Professional wall mounting of indoor/outdoor units with copper pipe fitting, drain pipe setup, and electrical connections." },
      { title: "Window AC Installation", description: "Secure window frame mounting with proper support bracket installation, sealing, and electrical hookup." },
      { title: "Copper Pipe Fitting", description: "High-quality copper pipe routing with proper insulation, flaring, and leak-proof connections for maximum cooling efficiency." },
      { title: "Electrical Wiring", description: "Dedicated MCB installation, proper gauge wiring, and earthing for safe and efficient AC operation." },
      { title: "AC Shifting & Relocation", description: "Safe removal, transport, and reinstallation of existing AC units during home shifting or renovation." },
      { title: "Multi-AC Setup", description: "Installation of multiple AC units for offices, shops, and large homes with centralized power management." },
    ],
    pricing: [
      { service: "Split AC Installation (1–1.5 Ton)", price: "₹1,499" },
      { service: "Split AC Installation (2 Ton)", price: "₹1,999" },
      { service: "Window AC Installation", price: "₹799" },
      { service: "AC Uninstallation", price: "₹499–₹799" },
      { service: "AC Shifting (Same Building)", price: "₹999" },
      { service: "Extra Copper Pipe (per ft)", price: "₹80–₹120" },
    ],
    benefits: [
      "Same-day installation available",
      "All accessories and pipe included in price",
      "Proper wall drilling with dust management",
      "Post-installation testing and calibration",
      "30-day installation warranty",
      "Support for all brands and tonnages",
    ],
    faqs: [
      { question: "What is included in the AC installation price?", answer: "Our standard installation includes wall mounting, up to 3 feet of copper pipe, drain pipe, electrical connection, and testing. Additional pipe length is charged separately." },
      { question: "How long does AC installation take?", answer: "A standard split AC installation takes 1.5–2 hours. Window AC installation typically takes 45 minutes to 1 hour." },
      { question: "Do I need a separate MCB for my AC?", answer: "Yes, we recommend a dedicated MCB (miniature circuit breaker) for each AC unit. We can install one during the setup if not already available." },
      { question: "Can you install the AC I bought online?", answer: "Absolutely! We install ACs purchased from any source — Amazon, Flipkart, Croma, or local dealers. All brands and models supported." },
      { question: "What if my wall is not suitable for mounting?", answer: "Our technician will assess your wall and suggest the best mounting solution. We can use heavy-duty stand brackets for concrete, brick, or plaster walls." },
    ],
  },

  /* ─────── AC Gas Refilling Delhi ─────── */
  {
    slug: "ac-gas-refilling-delhi",
    title: "AC Gas Refilling Service in Delhi NCR",
    metaDescription:
      "AC gas refilling service in Delhi NCR by Medon. R22, R32, R410A refrigerant refilling for split & window ACs. Leak detection included. Call +91 7303637086.",
    keywords: [
      "AC gas refilling Delhi",
      "AC gas refill near me",
      "AC gas refilling price Delhi",
      "R32 gas refilling",
      "R410A gas refilling",
      "AC gas leak repair Delhi",
      "split AC gas refilling cost",
    ],
    heroTitle: "AC Gas Refilling Service",
    heroHighlight: "in Delhi NCR",
    heroDescription:
      "Low cooling from your AC? It might need gas refilling. Medon provides professional refrigerant refilling with leak detection for all AC types and brands.",
    heroIcon: "Wind",
    detailsHeading: "AC Gas Refilling Solutions",
    detailsDescription:
      "Our gas refilling process includes leak detection, pressure testing, and precision refilling with the correct refrigerant grade for your AC model.",
    details: [
      { title: "Leak Detection", description: "Electronic leak detector testing of all joints, valves, and coil connections before any gas refilling to prevent recurring issues." },
      { title: "R22 Gas Refilling", description: "Refrigerant refilling for older AC models using R22 (Freon). Includes pressure calibration and performance verification." },
      { title: "R32 Gas Refilling", description: "Eco-friendly R32 refrigerant refilling for modern energy-efficient ACs. Precise filling to manufacturer specifications." },
      { title: "R410A Gas Refilling", description: "R410A refilling for premium inverter ACs. High-pressure handling with specialized equipment and gauges." },
      { title: "Gas Leak Repair", description: "Professional brazing and sealing of refrigerant leaks in copper pipes, joints, and evaporator/condenser coils." },
      { title: "Performance Testing", description: "Post-refilling temperature check, pressure verification, and 30-minute cooling performance test." },
    ],
    pricing: [
      { service: "Leak Detection", price: "₹199", note: "Adjusted against refilling" },
      { service: "R22 Gas Refilling (Window)", price: "₹999–₹1,499" },
      { service: "R22 Gas Refilling (Split)", price: "₹1,499–₹1,999" },
      { service: "R32 Gas Refilling", price: "₹1,999–₹2,499" },
      { service: "R410A Gas Refilling", price: "₹2,499–₹2,999" },
      { service: "Gas Leak Repair (Brazing)", price: "₹500–₹1,500" },
    ],
    benefits: [
      "Leak detection before refilling — prevents recurring costs",
      "Genuine refrigerant from authorized suppliers",
      "Precise pressure-calibrated filling",
      "All gas types: R22, R32, R410A",
      "Post-refilling cooling performance test",
      "90-day warranty on gas refilling",
    ],
    faqs: [
      { question: "How do I know if my AC needs gas refilling?", answer: "Common signs include reduced cooling, ice formation on the indoor unit, hissing sounds near the AC, or the AC running continuously without reaching the set temperature." },
      { question: "How often does an AC need gas refilling?", answer: "A properly installed AC should not need gas refilling for 5–7 years. If you need frequent refilling, there's likely a leak that needs repair first." },
      { question: "What's the difference between R22, R32, and R410A?", answer: "R22 is used in older ACs and is being phased out. R32 and R410A are eco-friendly alternatives used in modern ACs. R410A operates at higher pressure and is common in premium inverter models." },
      { question: "Can wrong gas damage my AC?", answer: "Yes, using the wrong refrigerant can damage the compressor and void your warranty. Our technicians always verify the correct gas type for your specific AC model before refilling." },
      { question: "How long does gas refilling take?", answer: "The complete process including leak detection, refilling, and testing takes about 45–60 minutes." },
    ],
  },

  /* ─────── Refrigerator Repair Delhi ─────── */
  {
    slug: "refrigerator-repair-delhi",
    title: "Refrigerator Repair Service in Delhi NCR",
    metaDescription:
      "Expert refrigerator repair in Delhi NCR by Medon Company. Fix cooling issues, compressor problems, gas leaks for all fridge models. Call +91 7303637086.",
    keywords: [
      "refrigerator repair Delhi",
      "fridge repair near me",
      "refrigerator repair service Delhi NCR",
      "fridge not cooling repair",
      "Samsung fridge repair Delhi",
      "LG refrigerator repair",
      "double door fridge repair",
    ],
    heroTitle: "Refrigerator Repair Service",
    heroHighlight: "in Delhi NCR",
    heroDescription:
      "Fridge not cooling? Medon's verified technicians repair all refrigerator types — single door, double door, side-by-side, and mini fridges. All brands supported.",
    heroIcon: "Refrigerator",
    detailsHeading: "Refrigerator Repair Solutions",
    detailsDescription:
      "From cooling failures to compressor replacements, we diagnose and fix all refrigerator problems with precision and genuine parts.",
    details: [
      { title: "Cooling Issue Diagnosis", description: "Complete inspection of thermostat, compressor, condenser coils, and refrigerant levels to identify cooling failures." },
      { title: "Compressor Repair", description: "Expert compressor testing and repair for all refrigerator types. Replacement with OEM parts when needed." },
      { title: "Gas Leak Repair & Refilling", description: "Leak detection, brazing, and precise refrigerant refilling for optimal cooling temperature." },
      { title: "Thermostat Replacement", description: "Faulty thermostat diagnosis and replacement for temperature control issues and overcooling problems." },
      { title: "Door Seal Replacement", description: "Replacement of worn-out rubber gaskets to prevent cold air leakage and improve energy efficiency." },
      { title: "Ice Maker & Dispenser Repair", description: "Fix ice maker malfunctions, water dispenser issues, and water inlet valve problems in premium fridges." },
    ],
    pricing: [
      { service: "Fridge Inspection", price: "₹199" },
      { service: "Thermostat Replacement", price: "₹499–₹999" },
      { service: "Gas Refilling", price: "₹999–₹1,999" },
      { service: "Door Seal Replacement", price: "₹399–₹799" },
      { service: "Compressor Repair", price: "₹2,000+", note: "After diagnosis" },
      { service: "PCB / Sensor Repair", price: "₹800–₹1,500" },
    ],
    benefits: [
      "All fridge types: single door, double door, side-by-side, mini",
      "All major brands supported",
      "Genuine OEM replacement parts",
      "Same-day repair in most cases",
      "90-day warranty on repairs",
      "No fix, no fee policy",
    ],
    faqs: [
      { question: "My fridge is not cooling. What could be the problem?", answer: "Common causes include low gas levels, a faulty thermostat, dirty condenser coils, a malfunctioning compressor, or a damaged door seal. Our technician will diagnose the exact cause." },
      { question: "How much does refrigerator repair cost in Delhi?", answer: "Basic repairs start from ₹199 (inspection). Thermostat replacement costs ₹499–₹999, gas refilling ₹999–₹1,999. Major repairs like compressor replacement are quoted after diagnosis." },
      { question: "Do you repair all fridge brands?", answer: "Yes, we repair all major brands including Samsung, LG, Whirlpool, Godrej, Haier, Bosch, Hitachi, Panasonic, and more." },
      { question: "How long does a fridge repair take?", answer: "Most repairs are completed within 1–2 hours. Compressor replacement or parts ordering may take an additional day." },
      { question: "Is it worth repairing an old refrigerator?", answer: "Generally, if your fridge is less than 10 years old and the repair cost is under 50% of a new one, repair is recommended. Our technician will advise you honestly." },
    ],
  },

  /* ─────── Electrical Services Delhi ─────── */
  {
    slug: "electrical-services-delhi",
    title: "Electrical Services in Delhi NCR",
    metaDescription:
      "Professional electrical services in Delhi NCR by Medon. Wiring, switchboard repair, MCB installation, short circuit fix, fan & light installation. Call +91 7303637086.",
    keywords: [
      "electrical services Delhi",
      "electrician near me Delhi",
      "electrical wiring service Delhi NCR",
      "switchboard repair Delhi",
      "MCB installation",
      "short circuit repair Delhi",
      "home electrician Delhi",
    ],
    heroTitle: "Professional Electrical Services",
    heroHighlight: "in Delhi NCR",
    heroDescription:
      "Medon provides safe and reliable electrical services for homes and offices. Wiring, switchboard repair, fan installation, MCB setup, and emergency fault resolution.",
    heroIcon: "Zap",
    detailsHeading: "Electrical Service Solutions",
    detailsDescription:
      "From basic wiring to complex electrical troubleshooting, our licensed electricians handle all residential and commercial electrical work.",
    details: [
      { title: "Electrical Wiring & Rewiring", description: "Complete home and office wiring using ISI-certified cables with proper load distribution and safety compliance." },
      { title: "Switchboard Repair & Installation", description: "Modular switchboard installation, repair, and upgrade with branded switches and sockets." },
      { title: "MCB & Distribution Board", description: "MCB installation, fuse box upgrades, and distribution board setup for proper circuit protection." },
      { title: "Short Circuit Troubleshooting", description: "Emergency short circuit diagnosis and repair to restore safe power supply to your home or office." },
      { title: "Fan, Light & Fixture Installation", description: "Ceiling fan, LED light, chandelier, exhaust fan, and decorative fixture mounting and wiring." },
      { title: "Earthing & Power Stabilization", description: "Proper earthing installation and power fluctuation solutions to protect your appliances and ensure safety." },
    ],
    pricing: [
      { service: "Electrician Visit Charge", price: "₹199" },
      { service: "Switch / Socket Repair", price: "₹149–₹299" },
      { service: "Fan Installation", price: "₹249–₹499" },
      { service: "MCB Installation", price: "₹299–₹599" },
      { service: "Wiring (per point)", price: "₹199–₹399" },
      { service: "Short Circuit Fix", price: "₹499+", note: "Based on complexity" },
    ],
    benefits: [
      "Licensed and verified electricians",
      "ISI-certified wiring and materials",
      "Emergency electrical service available",
      "Safety-first approach with proper earthing",
      "Residential and commercial service",
      "Transparent per-point pricing",
    ],
    faqs: [
      { question: "Do you provide emergency electrical service?", answer: "Yes, we offer emergency electrical services for short circuits, power failures, and safety hazards. Our electricians can be dispatched within 2–4 hours." },
      { question: "How much does an electrician charge in Delhi?", answer: "Our standard visit charge is ₹199. Additional work is charged per task — switch repair from ₹149, fan installation from ₹249, wiring from ₹199 per point." },
      { question: "Do you handle office/commercial electrical work?", answer: "Yes, we provide electrical services for offices, shops, and commercial spaces including distribution board setup, dedicated circuits, and server room wiring." },
      { question: "Are your electricians licensed?", answer: "Yes, all our electricians are licensed, verified, and trained in safety protocols. They carry proper tools and insulated equipment." },
      { question: "Can you upgrade my old switchboard to a modular one?", answer: "Yes, we specialize in upgrading old switchboards to modern modular systems with MCB protection. Typical upgrade takes 2–3 hours." },
    ],
  },

  /* ─────── Geyser Repair Delhi ─────── */
  {
    slug: "geyser-repair-delhi",
    title: "Geyser Repair & Installation in Delhi NCR",
    metaDescription:
      "Professional geyser repair & installation in Delhi NCR. Fix heating issues, leakage, thermostat problems. New geyser installation. Call Medon at +91 7303637086.",
    keywords: [
      "geyser repair Delhi",
      "geyser installation near me",
      "geyser not heating repair",
      "geyser leakage repair Delhi",
      "water heater repair Delhi NCR",
      "geyser thermostat repair",
      "instant geyser installation",
    ],
    heroTitle: "Geyser Repair & Installation",
    heroHighlight: "in Delhi NCR",
    heroDescription:
      "Get your geyser repaired or installed by Medon's verified technicians. We handle all types — storage, instant, and gas geysers. Safety-first approach guaranteed.",
    heroIcon: "Thermometer",
    detailsHeading: "Geyser Service Solutions",
    detailsDescription:
      "From heating failures to new installations, we provide comprehensive geyser services with safety compliance and quality assurance.",
    details: [
      { title: "Geyser Heating Issue Fix", description: "Diagnosis and repair of heating element, thermostat, and thermal cutoff issues causing no hot water or slow heating." },
      { title: "Geyser Leakage Repair", description: "Tank leak sealing, valve replacement, and pipe connection repair to stop water leakage from your geyser." },
      { title: "Thermostat & Element Replacement", description: "Faulty thermostat and heating element replacement with ISI-certified parts for reliable performance." },
      { title: "New Geyser Installation", description: "Professional mounting, plumbing connection, and electrical wiring for new storage and instant geysers." },
      { title: "Safety Valve Replacement", description: "Pressure relief valve and safety valve replacement to prevent dangerous pressure buildup." },
      { title: "Wiring & Power Supply Check", description: "Dedicated electrical circuit setup, proper earthing, and MCB protection for safe geyser operation." },
    ],
    pricing: [
      { service: "Geyser Inspection", price: "₹199" },
      { service: "Thermostat Replacement", price: "₹399–₹799" },
      { service: "Heating Element Replacement", price: "₹499–₹999" },
      { service: "New Geyser Installation", price: "₹499–₹799" },
      { service: "Leakage Repair", price: "₹300–₹800" },
      { service: "Safety Valve Replacement", price: "₹199–₹399" },
    ],
    benefits: [
      "All geyser types: storage, instant, gas",
      "Safety-first approach with proper earthing",
      "ISI-certified replacement parts",
      "Same-day service available",
      "Post-repair safety testing",
      "90-day warranty on repairs",
    ],
    faqs: [
      { question: "My geyser is not heating water. What should I do?", answer: "This usually indicates a faulty heating element or thermostat. Turn off the geyser and call us for a diagnosis. Do not attempt to open the geyser yourself." },
      { question: "How much does geyser repair cost?", answer: "Inspection costs ₹199. Thermostat replacement is ₹399–₹799, heating element ₹499–₹999. We provide a clear quote before starting any repair." },
      { question: "Can you install a new geyser?", answer: "Yes, we provide professional installation for all geyser types — instant, storage, and gas. Installation includes mounting, plumbing, electrical wiring, and testing." },
      { question: "Is it safe to repair a leaking geyser?", answer: "Minor valve leaks can be repaired safely. However, if the inner tank is leaking, replacement is usually recommended. Our technician will advise you based on the condition." },
      { question: "How long does geyser installation take?", answer: "Standard geyser installation takes 30–45 minutes including mounting, plumbing, electrical connection, and testing." },
    ],
  },

  /* ─────── Microwave Repair Delhi ─────── */
  {
    slug: "microwave-repair-delhi",
    title: "Microwave Repair Service in Delhi NCR",
    metaDescription:
      "Expert microwave oven repair in Delhi NCR by Medon. Fix heating issues, turntable problems, control panel repair. All brands. Call +91 7303637086.",
    keywords: [
      "microwave repair Delhi",
      "microwave oven repair near me",
      "microwave not heating repair",
      "Samsung microwave repair Delhi",
      "LG microwave repair",
      "microwave repair service Delhi NCR",
      "convection microwave repair",
    ],
    heroTitle: "Microwave Repair Service",
    heroHighlight: "in Delhi NCR",
    heroDescription:
      "Microwave not working? Medon's certified technicians repair all types — solo, grill, and convection microwaves. All brands supported with genuine parts.",
    heroIcon: "Microwave",
    detailsHeading: "Microwave Repair Solutions",
    detailsDescription:
      "Expert diagnosis and repair of all microwave problems using manufacturer-grade parts and safety-compliant procedures.",
    details: [
      { title: "Heating Issue Repair", description: "Magnetron testing and repair for microwaves that won't heat, heat unevenly, or take too long to warm food." },
      { title: "Control Panel Repair", description: "Touchpad, display, and control board diagnosis and repair for unresponsive buttons or error displays." },
      { title: "Turntable Motor Fix", description: "Repair or replacement of turntable motor, roller ring, and glass plate for smooth rotation." },
      { title: "Door Switch Repair", description: "Door latch, interlock switch, and safety mechanism repair to resolve door-related malfunctions." },
      { title: "Fuse & Power Issues", description: "Internal fuse replacement, power cord repair, and transformer diagnosis for dead microwaves." },
      { title: "Convection Fan Repair", description: "Fan motor repair and heating element fix for convection microwaves with baking/grilling issues." },
    ],
    pricing: [
      { service: "Microwave Inspection", price: "₹199" },
      { service: "Turntable Motor Replacement", price: "₹399–₹699" },
      { service: "Door Switch Repair", price: "₹299–₹599" },
      { service: "Control Panel Repair", price: "₹599–₹1,299" },
      { service: "Magnetron Replacement", price: "₹1,499–₹2,499", note: "Model dependent" },
      { service: "Fuse / Power Repair", price: "₹199–₹499" },
    ],
    benefits: [
      "All types: solo, grill, convection, OTG",
      "All brands: Samsung, LG, IFB, Panasonic, Godrej",
      "Genuine manufacturer-grade parts",
      "Safety-compliant repair procedures",
      "Same-day service available",
      "90-day warranty on repairs",
    ],
    faqs: [
      { question: "My microwave is not heating food. Can it be repaired?", answer: "Yes, this is usually caused by a faulty magnetron, diode, or capacitor. Our technician will diagnose the exact issue and provide a repair quote." },
      { question: "How much does microwave repair cost in Delhi?", answer: "Inspection costs ₹199. Minor repairs like door switch or turntable motor start from ₹299. Major repairs like magnetron replacement cost ₹1,499–₹2,499." },
      { question: "Is it worth repairing an old microwave?", answer: "If your microwave is less than 7 years old and the repair cost is under 50% of a new one, repair is usually worth it. We'll give you an honest assessment." },
      { question: "Do you repair convection microwaves?", answer: "Yes, we repair all microwave types including solo, grill, convection, and OTG ovens. Our technicians are trained for convection-specific issues." },
      { question: "How long does microwave repair take?", answer: "Most microwave repairs are completed within 1–2 hours. If parts need to be ordered, we'll schedule a follow-up visit." },
    ],
  },
];

/* ── Helper: get service by slug ──────────────────── */
export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

/* ── Helper: get cross-link services (exclude current) */
export function getCrossLinks(currentSlug: string) {
  return ALL_SERVICES.filter((s) => s.slug !== currentSlug).map((s) => ({
    slug: s.slug,
    title: s.heroTitle + " " + s.heroHighlight,
    icon: s.heroIcon,
  }));
}
