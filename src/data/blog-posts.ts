/* ─────────────────────────────────────────────────────
   BLOG POST DATA — Medon Company
   Central data source for all blog posts.
   Pattern: mirrors services.ts (data-driven architecture)
   ───────────────────────────────────────────────────── */

/* ── Types ────────────────────────────────────────── */

export type BlogCategory =
  | "AC Repair"
  | "Refrigerator Repair"
  | "Electrical Tips"
  | "Appliance Maintenance"
  | "Home Repair Guides";

export type BlogCluster =
  | "ac-repair"
  | "refrigerator-repair"
  | "maintenance";

export const ALL_BLOG_CATEGORIES: BlogCategory[] = [
  "AC Repair",
  "Refrigerator Repair",
  "Electrical Tips",
  "Appliance Maintenance",
  "Home Repair Guides",
];

export interface BlogSection {
  heading: string;
  content: string;
  subSections?: {
    heading: string;
    content: string;
  }[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  /* URL & SEO */
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];

  /* Display */
  category: BlogCategory;
  publishDate: string;
  updatedDate?: string;
  author: string;

  /* Content */
  excerpt: string;
  sections: BlogSection[];

  /* Internal Linking */
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
  relatedBlogSlugs: string[];

  /* FAQ (optional — for FAQ schema) */
  faqs?: BlogFAQ[];

  /* Topical SEO Cluster */
  cluster?: BlogCluster;
}

/* ─────────────────────────────────────────────────────
   BLOG POSTS DATA
   ───────────────────────────────────────────────────── */

export const ALL_BLOG_POSTS: BlogPost[] = [
  /* ─────── Post 1: AC Not Cooling ─────── */
  {
    slug: "why-ac-is-not-cooling-properly",
    title: "Why AC Is Not Cooling Properly: Causes & Fixes",
    metaDescription:
      "Is your AC not cooling properly? Learn the top 8 reasons why your air conditioner may stop cooling and how to fix each issue. Expert AC repair tips from Medon Company, Delhi.",
    keywords: [
      "AC not cooling",
      "AC repair tips",
      "AC not cooling properly",
      "why AC not cooling",
      "AC cooling problem fix",
      "AC repair Delhi",
      "split AC not cooling",
    ],
    category: "AC Repair",
    cluster: "ac-repair",
    publishDate: "2025-04-15",
    updatedDate: "2025-05-20",
    author: "Medon Company",
    excerpt:
      "Is your AC running but not cooling the room? Discover the 8 most common reasons behind AC cooling failures and learn practical fixes you can try before calling a technician.",

    sections: [
      {
        heading: "Why Is Your AC Not Cooling? Understanding the Problem",
        content:
          "When your air conditioner runs but doesn't cool the room, it can be frustrating — especially during Delhi's scorching summers. The problem could range from a simple filter issue to a major compressor failure. Before you panic, let's walk through the most common causes and their solutions. At <a href='/ac-repair-service-delhi'>Medon Company</a>, we handle hundreds of AC cooling complaints every month across <a href='/mahipalpur'>Mahipalpur</a>, <a href='/vasant-kunj'>Vasant Kunj</a>, and <a href='/south-delhi'>South Delhi</a>.",
      },
      {
        heading: "Top 8 Reasons Your AC Is Not Cooling Properly",
        content:
          "Here are the most frequent causes our technicians encounter during AC repair visits in Delhi NCR:",
        subSections: [
          {
            heading: "1. Dirty or Clogged Air Filters",
            content:
              "Clogged filters restrict airflow, reducing cooling efficiency by up to 15%. This is the #1 reason for AC cooling problems. Clean or replace your AC filters every 2–3 weeks during peak summer. If you haven't cleaned your filters in months, this is likely your issue.",
          },
          {
            heading: "2. Low Refrigerant (Gas Leakage)",
            content:
              "If your AC is low on refrigerant, it won't cool effectively. Signs include ice formation on the indoor unit, hissing sounds, and the AC running continuously without reaching the set temperature. Gas leakage requires professional detection and <a href='/ac-gas-refilling-delhi'>AC gas refilling service</a>. Don't attempt to refill gas yourself — incorrect refrigerant type or quantity can damage the compressor.",
          },
          {
            heading: "3. Faulty Compressor",
            content:
              "The compressor is the heart of your AC system. If it fails, your AC will blow air but it won't be cold. Compressor issues usually require professional diagnosis. Our <a href='/ac-repair-service-delhi'>AC repair technicians in Delhi</a> can determine if a repair or replacement is needed.",
          },
          {
            heading: "4. Dirty Condenser Coils (Outdoor Unit)",
            content:
              "The outdoor unit's condenser coils release heat from inside your home. When coated with dust and debris, they can't dissipate heat effectively. This is especially common in dusty areas of Delhi like Mahipalpur and Dwarka. Annual professional deep cleaning solves this problem.",
          },
          {
            heading: "5. Faulty Thermostat",
            content:
              "A malfunctioning thermostat can cause your AC to cycle incorrectly or not reach the desired temperature. Try resetting your AC to factory settings. If the problem persists, thermostat replacement is a quick and affordable fix.",
          },
          {
            heading: "6. Incorrect AC Size for the Room",
            content:
              "An undersized AC will struggle to cool a large room. As a rule of thumb: a 1-ton AC is suitable for rooms up to 120 sq ft, 1.5-ton for up to 180 sq ft, and 2-ton for rooms up to 240 sq ft. If your AC is undersized, consider an <a href='/ac-installation-delhi'>AC upgrade or installation</a>.",
          },
          {
            heading: "7. Blocked or Leaking Ducts",
            content:
              "In ducted or centralized AC systems, blocked or leaking ducts can reduce cooling by 20–30%. Check for visible damage, disconnected sections, or obstructions in accessible duct areas.",
          },
          {
            heading: "8. Electrical Issues",
            content:
              "Voltage fluctuations, faulty wiring, or a tripped MCB can affect AC performance. If your AC frequently shuts off or restarts, you may need <a href='/electrical-services-delhi'>electrical services</a> to stabilize the power supply.",
          },
        ],
      },
      {
        heading: "Quick DIY Fixes You Can Try",
        content:
          "Before calling a technician, try these simple steps: (1) Clean or replace the air filters. (2) Check the thermostat — set it to 22–24°C in cooling mode. (3) Ensure the outdoor unit isn't obstructed by furniture, curtains, or debris. (4) Check if the remote's batteries need replacement. (5) Turn off the AC for 5 minutes, then restart it. If none of these fix the issue, it's time to call a professional.",
      },
      {
        heading: "When to Call a Professional AC Technician",
        content:
          "Call a professional if your AC shows ice formation, makes unusual noises, leaks water, or doesn't cool even after cleaning filters. At Medon Company, our verified technicians in <a href='/south-delhi'>South Delhi</a> and <a href='/vasant-kunj'>Vasant Kunj</a> can diagnose and fix any AC problem — usually within the same day. Our inspection starts at just ₹199 with transparent pricing and a 90-day warranty on all repairs.",
      },
    ],

    relatedServiceSlugs: [
      "ac-repair-service-delhi",
      "ac-gas-refilling-delhi",
      "ac-installation-delhi",
    ],
    relatedLocationSlugs: ["mahipalpur", "vasant-kunj", "south-delhi"],
    relatedBlogSlugs: [
      "signs-of-ac-gas-leakage",
      "how-often-should-you-service-your-ac",
      "best-time-for-ac-servicing-in-delhi",
    ],

    faqs: [
      {
        question: "Why is my AC running but not cooling?",
        answer:
          "The most common reasons are dirty air filters, low refrigerant (gas leakage), a faulty compressor, or dirty condenser coils. Start by cleaning the filters and checking the thermostat settings. If the issue persists, call a professional technician for diagnosis.",
      },
      {
        question: "How much does it cost to fix an AC that is not cooling?",
        answer:
          "The cost depends on the cause. Filter cleaning is free (DIY), gas refilling costs ₹999–₹2,999, thermostat replacement ₹499–₹999, and compressor repair starts from ₹2,500. Medon Company charges ₹199 for a diagnostic inspection.",
      },
      {
        question: "Can I fix AC cooling problems myself?",
        answer:
          "You can fix basic issues like dirty filters, incorrect thermostat settings, or a blocked outdoor unit. However, gas leakage, compressor problems, and electrical issues require a trained technician with proper tools and safety equipment.",
      },
      {
        question:
          "How often should I service my AC to prevent cooling problems?",
        answer:
          "Service your AC at least twice a year — once before summer and once after monsoon. In dusty areas of Delhi, monthly filter cleaning is recommended during peak usage months (April–September).",
      },
    ],
  },

  /* ─────── Post 2: AC Gas Leakage Signs ─────── */
  {
    slug: "signs-of-ac-gas-leakage",
    title: "Signs of AC Gas Leakage: How to Detect & Fix",
    metaDescription:
      "Learn how to detect AC gas leakage early. Discover the 6 warning signs of refrigerant leak in your air conditioner and why timely repair is essential. Expert guide by Medon Company, Delhi.",
    keywords: [
      "AC gas leakage signs",
      "AC gas leak",
      "AC refrigerant leak",
      "AC gas refilling",
      "AC gas leak repair Delhi",
      "how to detect AC gas leak",
      "AC repair tips",
    ],
    category: "AC Repair",
    cluster: "ac-repair",
    publishDate: "2025-04-28",
    author: "Medon Company",
    excerpt:
      "AC gas leakage is one of the most common AC problems in Delhi. Learn to identify the 6 warning signs early and understand why professional repair is essential to avoid compressor damage.",

    sections: [
      {
        heading: "What Is AC Gas Leakage and Why Does It Matter?",
        content:
          "AC gas (refrigerant) is the substance that absorbs heat from your room and releases it outside. When your AC has a gas leak, this cooling cycle gets disrupted. Left unfixed, a gas leak doesn't just reduce cooling — it can permanently damage the compressor, which is the most expensive component of your AC. In Delhi's summer heat, a leaking AC can increase your electricity bill by 30–40% as it works harder to compensate. Our <a href='/ac-gas-refilling-delhi'>AC gas refilling service</a> always includes a leak detection test to prevent recurring issues.",
      },
      {
        heading: "6 Warning Signs of AC Gas Leakage",
        content:
          "Here are the tell-tale signs that your AC may have a refrigerant leak:",
        subSections: [
          {
            heading: "1. AC Is Not Cooling Despite Running Continuously",
            content:
              "If your <a href='/blog/why-ac-is-not-cooling-properly'>AC is not cooling properly</a> even though the compressor is running, low refrigerant due to a leak is one of the most likely causes. The AC may blow room-temperature air instead of cold air.",
          },
          {
            heading: "2. Ice Formation on the Indoor Unit or Copper Pipes",
            content:
              "When refrigerant pressure drops due to a leak, the evaporator coil gets too cold and ice forms on the indoor unit or connecting copper pipes. This is one of the most visible signs of a gas leak.",
          },
          {
            heading: "3. Hissing or Bubbling Sounds",
            content:
              "A hissing sound near the indoor or outdoor unit indicates gas escaping from a small crack or hole in the refrigerant line. Bubbling sounds may occur if the leak is in a section where the refrigerant is in liquid form.",
          },
          {
            heading: "4. Increased Electricity Bills",
            content:
              "A gas-leaking AC works harder and longer to achieve the same cooling effect, resulting in significantly higher power consumption. If your electricity bill has spiked without changes in usage patterns, suspect a gas leak.",
          },
          {
            heading: "5. AC Takes Very Long to Cool the Room",
            content:
              "With low refrigerant, your AC may eventually cool the room but takes 2–3 times longer than normal. This gradual decline in performance over weeks often indicates a slow gas leak.",
          },
          {
            heading: "6. Warm Air from the AC Vents",
            content:
              "In severe cases, when most of the refrigerant has leaked out, the AC may blow warm air. At this point, the compressor is at serious risk of damage and immediate repair is essential.",
          },
        ],
      },
      {
        heading: "How Professionals Detect and Fix AC Gas Leaks",
        content:
          "At <a href='/ac-repair-service-delhi'>Medon Company</a>, our technicians use electronic leak detectors and nitrogen pressure testing to pinpoint the exact location of the leak. The repair process involves: (1) Identifying the leak location. (2) Brazing or sealing the leak. (3) Performing a pressure test to confirm the seal. (4) Vacuuming the system to remove moisture. (5) Refilling the correct refrigerant type (R22, R32, or R410A). This process typically takes 1–2 hours and costs ₹999–₹2,999 depending on the gas type and leak severity.",
      },
      {
        heading: "Can You Prevent AC Gas Leakage?",
        content:
          "While you can't prevent all leaks, regular maintenance significantly reduces the risk. Annual servicing allows technicians to catch micro-leaks before they become serious. Ensure your <a href='/ac-installation-delhi'>AC installation</a> is done professionally with proper copper pipe fitting and flaring — poor installation is the leading cause of gas leaks in new ACs. Residents of <a href='/mahipalpur'>Mahipalpur</a> and <a href='/vasant-kunj'>Vasant Kunj</a> can book our annual maintenance contracts for proactive care.",
      },
    ],

    relatedServiceSlugs: [
      "ac-gas-refilling-delhi",
      "ac-repair-service-delhi",
      "ac-installation-delhi",
    ],
    relatedLocationSlugs: ["mahipalpur", "vasant-kunj", "south-delhi"],
    relatedBlogSlugs: [
      "why-ac-is-not-cooling-properly",
      "how-often-should-you-service-your-ac",
      "best-time-for-ac-servicing-in-delhi",
    ],

    faqs: [
      {
        question: "How do I know if my AC gas is leaking?",
        answer:
          "Key signs include ice formation on the indoor unit, hissing sounds, reduced cooling, increased electricity bills, and the AC taking longer than usual to cool the room. If you notice any of these, call a professional for leak detection.",
      },
      {
        question: "How much does AC gas leak repair cost in Delhi?",
        answer:
          "AC gas leak repair in Delhi typically costs ₹500–₹1,500 for the leak fix (brazing), plus ₹999–₹2,999 for gas refilling depending on the refrigerant type (R22, R32, or R410A). Medon Company charges ₹199 for leak detection inspection.",
      },
      {
        question: "Is AC gas leakage dangerous?",
        answer:
          "Modern AC refrigerants (R32, R410A) are non-toxic in small quantities but can cause dizziness in poorly ventilated spaces. The bigger risk is compressor damage — running an AC with low gas can burn out the compressor, costing ₹5,000–₹15,000 to replace.",
      },
      {
        question: "How often does AC gas need to be refilled?",
        answer:
          "A properly installed and maintained AC should not need gas refilling for 5–7 years. If you need frequent refilling (every year), there's an underlying leak that needs to be fixed first, or the installation quality needs to be checked.",
      },
    ],
  },

  /* ─────── Post 3: Best Time for AC Servicing ─────── */
  {
    slug: "best-time-for-ac-servicing-in-delhi",
    title: "Best Time for AC Servicing in Delhi: Expert Guide",
    metaDescription:
      "When is the best time to service your AC in Delhi? Learn the ideal AC servicing schedule for Delhi's climate, pre-summer tips, and how regular maintenance saves money. By Medon Company.",
    keywords: [
      "AC servicing Delhi",
      "best time for AC service",
      "AC maintenance guide",
      "AC service schedule Delhi",
      "pre-summer AC service",
      "AC servicing tips",
      "appliance repair Delhi",
    ],
    category: "Appliance Maintenance",
    cluster: "maintenance",
    publishDate: "2025-03-10",
    updatedDate: "2025-05-15",
    author: "Medon Company",
    excerpt:
      "Delhi's extreme climate demands a specific AC servicing schedule. Learn when to service your AC, what each service should include, and how timely maintenance prevents costly breakdowns.",

    sections: [
      {
        heading: "Why AC Servicing Timing Matters in Delhi",
        content:
          "Delhi's climate is unique — scorching summers (45°C+), dusty conditions year-round, and humid monsoons create the perfect storm for AC problems. Servicing your AC at the right time ensures it runs efficiently when you need it most and lasts its full lifespan of 10–15 years. The wrong timing means either servicing too late (breakdowns during peak heat) or wasting money on unnecessary off-season service.",
      },
      {
        heading: "The Ideal AC Servicing Schedule for Delhi",
        content:
          "Based on our experience serving thousands of customers across <a href='/mahipalpur'>Mahipalpur</a>, <a href='/vasant-kunj'>Vasant Kunj</a>, and <a href='/south-delhi'>South Delhi</a>, here's the optimal AC service schedule:",
        subSections: [
          {
            heading: "Pre-Summer Service (February–March) — Most Important",
            content:
              "This is the BEST time to service your AC in Delhi. Book a comprehensive pre-summer service that includes deep cleaning, gas pressure check, electrical inspection, and performance testing. Early booking (February) means shorter wait times and better technician availability. By April, demand surges and same-day service becomes harder to get.",
          },
          {
            heading: "Mid-Summer Check (May–June)",
            content:
              "If your AC runs 12+ hours daily, a mid-summer filter cleaning and performance check is recommended. This is especially important for ACs in dusty areas like Mahipalpur, Dwarka, and Delhi Airport zone. A quick filter wash and basic inspection takes 30 minutes and extends peak-season performance.",
          },
          {
            heading: "Post-Monsoon Service (October–November)",
            content:
              "After the monsoon, moisture and humidity can cause fungal growth in your AC's indoor unit. A post-monsoon anti-bacterial deep cleaning prevents musty odors and ensures the AC is ready for winter storage or mild-weather usage. This is also the best time to check for any damage from monsoon power fluctuations.",
          },
          {
            heading: "Pre-Winter Shutdown (November–December)",
            content:
              "If you won't use your AC during winter, run it in fan mode for 30 minutes to dry internal moisture, clean the filters, cover the outdoor unit, and switch off the dedicated MCB. This prevents dust accumulation and insect nesting during months of non-use.",
          },
        ],
      },
      {
        heading: "What Should a Professional AC Service Include?",
        content:
          "A comprehensive <a href='/ac-repair-service-delhi'>AC service</a> should include: (1) Filter cleaning or replacement. (2) Evaporator coil cleaning with anti-bacterial spray. (3) Condenser coil cleaning (outdoor unit). (4) Drain pipe flushing. (5) Gas pressure check. (6) Electrical connection inspection. (7) Thermostat calibration check. (8) Performance testing with temperature measurement. If any service provider skips these steps, you're not getting a complete service.",
      },
      {
        heading: "How Regular Servicing Saves You Money",
        content:
          "Data from our service records shows that customers who follow a twice-yearly service schedule spend 60% less on repairs over 5 years compared to those who only call when something breaks. Regular servicing also reduces electricity consumption by 10–15% by keeping the AC running at peak efficiency. For Delhi residents, this translates to savings of ₹2,000–₹5,000 per year on electricity alone. Consider our annual maintenance contracts starting at ₹2,999 for worry-free AC care in <a href='/vasant-kunj'>Vasant Kunj</a>, <a href='/mahipalpur'>Mahipalpur</a>, and surrounding areas.",
      },
    ],

    relatedServiceSlugs: [
      "ac-repair-service-delhi",
      "ac-repair-mahipalpur",
      "ac-service-vasant-kunj",
    ],
    relatedLocationSlugs: [
      "mahipalpur",
      "vasant-kunj",
      "south-delhi",
      "delhi-airport-area",
    ],
    relatedBlogSlugs: [
      "how-often-should-you-service-your-ac",
      "why-ac-is-not-cooling-properly",
      "signs-of-ac-gas-leakage",
    ],

    faqs: [
      {
        question: "When is the best month to service AC in Delhi?",
        answer:
          "February or March is the best time for AC servicing in Delhi. This gives you a fully tuned AC before the summer heat begins in April. Booking early also means better availability and shorter wait times.",
      },
      {
        question: "How much does AC servicing cost in Delhi?",
        answer:
          "Basic AC servicing (filter cleaning + inspection) costs ₹199–₹499. Deep cleaning with anti-bacterial treatment costs ₹499–₹799 for split ACs. Annual maintenance contracts with 2–4 services start from ₹2,999.",
      },
      {
        question: "What happens if I don't service my AC regularly?",
        answer:
          "Skipping regular service leads to reduced cooling efficiency, higher electricity bills (10–15% more), frequent breakdowns, shorter AC lifespan, and potential compressor failure — the most expensive repair costing ₹5,000–₹15,000.",
      },
      {
        question: "How many times should I service my AC in a year in Delhi?",
        answer:
          "At minimum, twice a year — once before summer (Feb–Mar) and once after monsoon (Oct–Nov). If you use your AC heavily (12+ hours daily), add a mid-summer filter cleaning in May–June.",
      },
      {
        question: "Can I service my AC myself?",
        answer:
          "You can clean air filters and clear debris around the outdoor unit yourself. However, deep cleaning, gas pressure checks, electrical inspections, and coil cleaning require professional tools and expertise. DIY deep cleaning can damage the delicate evaporator fins.",
      },
    ],
  },

  /* ─────── Post 4: Refrigerator Not Cooling ─────── */
  {
    slug: "refrigerator-not-cooling-common-reasons",
    title: "Refrigerator Not Cooling? 8 Common Reasons & Solutions",
    metaDescription:
      "Is your refrigerator not cooling? Discover the 8 most common reasons behind fridge cooling failure and practical solutions. Expert refrigerator repair tips by Medon Company, Delhi.",
    keywords: [
      "refrigerator not cooling",
      "fridge not cooling",
      "refrigerator repair tips",
      "fridge repair Delhi",
      "fridge not cooling reasons",
      "refrigerator troubleshooting",
      "appliance repair Delhi",
    ],
    category: "Refrigerator Repair",
    cluster: "refrigerator-repair",
    publishDate: "2025-05-05",
    author: "Medon Company",
    excerpt:
      "Your fridge suddenly stopped cooling? Before calling a technician, learn about the 8 most common reasons behind refrigerator cooling problems and which ones you can fix yourself.",

    sections: [
      {
        heading: "Why Your Refrigerator May Stop Cooling",
        content:
          "A refrigerator that stops cooling is a household emergency — food spoils within hours in Delhi's heat. The good news is that many cooling problems have simple fixes. Before you panic, let's diagnose the issue. At <a href='/refrigerator-repair-delhi'>Medon Company</a>, our technicians handle fridge repairs across <a href='/south-delhi'>South Delhi</a>, <a href='/vasant-kunj'>Vasant Kunj</a>, and <a href='/mahipalpur'>Mahipalpur</a> daily.",
      },
      {
        heading: "8 Common Reasons Your Fridge Is Not Cooling",
        content:
          "Here are the most frequent causes, ordered from simplest to most complex:",
        subSections: [
          {
            heading: "1. Temperature Settings Changed Accidentally",
            content:
              "Check your fridge's temperature dial or digital display. Someone may have accidentally bumped it to a warmer setting. Set it to 3–5°C for the fridge compartment and -18°C for the freezer. Wait 24 hours after adjusting before concluding there's a problem.",
          },
          {
            heading: "2. Dirty Condenser Coils",
            content:
              "Condenser coils (usually at the back or bottom of the fridge) release heat. When covered in dust, they can't dissipate heat efficiently, causing poor cooling. Clean them every 6 months with a vacuum brush attachment. This is especially important in Delhi's dusty environment.",
          },
          {
            heading: "3. Damaged Door Seal (Gasket)",
            content:
              "A worn or damaged door seal lets warm air leak into the fridge, forcing it to work harder. Test by closing the door on a piece of paper — if the paper slides out easily, the seal needs replacement. Door seal replacement costs ₹399–₹799 and takes 30 minutes.",
          },
          {
            heading: "4. Overstocked or Blocked Vents",
            content:
              "Stuffing your fridge blocks the air circulation vents between the freezer and fridge compartments. Cold air can't flow properly, causing uneven or poor cooling. Leave some space between items and never block the rear vent panel.",
          },
          {
            heading: "5. Faulty Thermostat",
            content:
              "The thermostat controls when the compressor turns on and off. A faulty thermostat may not signal the compressor to run, resulting in no cooling. This is a common issue in refrigerators older than 5 years. Replacement costs ₹499–₹999.",
          },
          {
            heading: "6. Low Refrigerant (Gas Leak)",
            content:
              "Like ACs, refrigerators also use refrigerant gas for cooling. A gas leak causes gradual cooling decline. Signs include the compressor running continuously, frost in unusual places, or the back panel feeling unusually warm. Professional <a href='/refrigerator-repair-delhi'>refrigerator gas refilling</a> costs ₹999–₹1,999.",
          },
          {
            heading: "7. Faulty Evaporator Fan",
            content:
              "The evaporator fan circulates cold air from the freezer to the fridge. If it fails, the freezer may cool fine but the fridge won't. Listen for the fan — if you don't hear it running when the door is closed (press the door switch), it may need replacement.",
          },
          {
            heading: "8. Compressor Failure",
            content:
              "The compressor is the most critical (and expensive) component. If it fails, the fridge won't cool at all. Signs include a clicking sound, the compressor getting very hot, or no humming sound at all. Compressor repair or replacement costs ₹2,000–₹8,000 depending on the model.",
          },
        ],
      },
      {
        heading: "Quick Troubleshooting Steps",
        content:
          "Try these before calling a technician: (1) Check and adjust the temperature setting. (2) Ensure the fridge isn't overstocked. (3) Clean the condenser coils. (4) Check the door seal. (5) Verify the power supply is stable. (6) Listen for unusual sounds. If basic troubleshooting doesn't help, Medon Company's verified technicians in Delhi can diagnose the exact issue starting from just ₹199.",
      },
      {
        heading: "When to Repair vs. Replace Your Refrigerator",
        content:
          "A common dilemma! Here's a practical guideline: If your fridge is less than 7 years old and the repair cost is under 40% of a new fridge's price, repair is the better option. For fridges older than 10 years with major issues (compressor failure), replacement is usually more cost-effective considering improved energy efficiency of newer models. Our technicians always provide honest advice — we won't recommend unnecessary repairs.",
      },
    ],

    relatedServiceSlugs: [
      "refrigerator-repair-delhi",
      "electrical-services-delhi",
    ],
    relatedLocationSlugs: ["mahipalpur", "vasant-kunj", "south-delhi"],
    relatedBlogSlugs: [
      "why-ac-is-not-cooling-properly",
      "how-often-should-you-service-your-ac",
      "best-time-for-ac-servicing-in-delhi",
    ],

    faqs: [
      {
        question: "Why is my fridge running but not cooling?",
        answer:
          "The most common causes are dirty condenser coils, a faulty thermostat, damaged door seal, or low refrigerant. Start by checking the temperature settings and cleaning the condenser coils. If the problem persists, professional diagnosis is recommended.",
      },
      {
        question: "How much does refrigerator repair cost in Delhi?",
        answer:
          "Basic inspection costs ₹199. Door seal replacement costs ₹399–₹799, thermostat replacement ₹499–₹999, gas refilling ₹999–₹1,999, and compressor repair starts from ₹2,000. Medon Company provides transparent pricing with no hidden charges.",
      },
      {
        question: "How long does a refrigerator last?",
        answer:
          "A well-maintained refrigerator lasts 10–15 years. Regular cleaning of condenser coils, proper door seal maintenance, and avoiding overloading can extend its lifespan. In Delhi's dusty environment, annual maintenance is especially important.",
      },
      {
        question: "Can a refrigerator be repaired at home?",
        answer:
          "Yes, most refrigerator repairs are done at home by a visiting technician. Medon Company's technicians carry common replacement parts and tools for on-the-spot repair. Complex repairs like compressor replacement may require a follow-up visit.",
      },
    ],
  },

  /* ─────── Post 5: How Often Service AC ─────── */
  {
    slug: "how-often-should-you-service-your-ac",
    title: "How Often Should You Service Your AC? Complete Guide",
    metaDescription:
      "How often should you service your AC? Learn the recommended AC servicing frequency based on usage, climate, and AC type. Expert AC maintenance guide by Medon Company, Delhi.",
    keywords: [
      "how often service AC",
      "AC service frequency",
      "AC maintenance guide",
      "AC servicing schedule",
      "AC repair tips",
      "AC maintenance tips",
      "appliance maintenance Delhi",
    ],
    category: "Appliance Maintenance",
    cluster: "maintenance",
    publishDate: "2025-05-18",
    author: "Medon Company",
    excerpt:
      "Not sure how often your AC needs servicing? This comprehensive guide breaks down the ideal service frequency based on your usage pattern, AC type, and Delhi's specific climate conditions.",

    sections: [
      {
        heading: "AC Servicing Frequency: There's No One-Size-Fits-All Answer",
        content:
          "The short answer is: service your AC at least twice a year. But the real answer depends on several factors — how many hours you run it, where you live, the AC type, and local air quality. Delhi's dusty environment and extreme temperatures mean your AC works harder than in most cities, requiring more frequent attention. Let's break down the ideal servicing schedule for different situations.",
      },
      {
        heading: "Recommended AC Service Frequency by Usage",
        content:
          "Your daily usage pattern is the biggest factor in determining service frequency:",
        subSections: [
          {
            heading: "Light Use (4–6 Hours/Day)",
            content:
              "If you use your AC primarily in the evenings or only during peak afternoon heat, twice-yearly servicing is sufficient. Schedule a pre-summer deep clean in February–March and a post-monsoon service in October. Monthly filter cleaning during May–August will keep it running efficiently.",
          },
          {
            heading: "Moderate Use (8–12 Hours/Day)",
            content:
              "This is typical for most Delhi households during summer. Service your AC three times a year: pre-summer (March), mid-summer (June), and post-monsoon (October). Clean filters every 2–3 weeks during peak summer months.",
          },
          {
            heading: "Heavy Use (16–24 Hours/Day)",
            content:
              "Common for server rooms, hotels near <a href='/delhi-airport-area'>Delhi Airport</a>, and households with elderly or infant members. These ACs need quarterly servicing (every 3 months) and weekly filter checks during summer. An annual maintenance contract (AMC) is highly recommended for heavy-use scenarios.",
          },
        ],
      },
      {
        heading: "Service Frequency by AC Type",
        content:
          "Different AC types have different maintenance needs:",
        subSections: [
          {
            heading: "Split ACs",
            content:
              "Split ACs need servicing every 6 months minimum. The indoor unit's evaporator coil and filters require regular cleaning, and the outdoor unit needs annual condenser coil cleaning. Professional <a href='/ac-repair-service-delhi'>split AC service</a> ensures both units work in harmony.",
          },
          {
            heading: "Window ACs",
            content:
              "Window ACs are more exposed to dust and debris. They typically need servicing every 4–6 months. The single-unit design makes them easier to clean but also more susceptible to external dust, especially in areas like <a href='/mahipalpur'>Mahipalpur</a> with construction activity.",
          },
          {
            heading: "Inverter ACs",
            content:
              "Inverter ACs are more sensitive to refrigerant levels and electrical parameters. While they're more energy-efficient, they require careful professional servicing to maintain optimal performance. Follow the manufacturer's recommended schedule, typically every 6 months.",
          },
        ],
      },
      {
        heading: "Signs Your AC Needs Immediate Servicing",
        content:
          "Regardless of your regular schedule, service your AC immediately if you notice: (1) Reduced cooling performance. (2) Unusual noises (grinding, rattling, squealing). (3) Water leaking from the indoor unit. (4) Musty or foul smell. (5) AC frequently cycling on and off. (6) Ice formation on the unit. (7) Electricity bill spike. These symptoms indicate a developing problem that will worsen without professional attention. Don't wait for your scheduled service — call our technicians in <a href='/vasant-kunj'>Vasant Kunj</a> or <a href='/south-delhi'>South Delhi</a> for same-day diagnosis.",
      },
      {
        heading: "The Cost of Skipping AC Service",
        content:
          "Skipping regular AC servicing doesn't save money — it costs more in the long run. An unserviced AC consumes 10–15% more electricity (₹2,000–₹5,000 extra per year in Delhi). Dust buildup leads to <a href='/blog/signs-of-ac-gas-leakage'>gas leakage from corroded coils</a>. Clogged drains cause water damage to walls and ceilings. The compressor lifespan reduces from 10+ years to 5–7 years. A ₹499 annual service can prevent a ₹10,000+ repair bill.",
      },
    ],

    relatedServiceSlugs: [
      "ac-repair-service-delhi",
      "ac-service-vasant-kunj",
      "ac-repair-mahipalpur",
    ],
    relatedLocationSlugs: [
      "mahipalpur",
      "vasant-kunj",
      "south-delhi",
      "delhi-airport-area",
    ],
    relatedBlogSlugs: [
      "best-time-for-ac-servicing-in-delhi",
      "why-ac-is-not-cooling-properly",
      "signs-of-ac-gas-leakage",
    ],

    faqs: [
      {
        question: "How often should I service my split AC?",
        answer:
          "Service your split AC at least twice a year — once before summer (Feb–Mar) and once after monsoon (Oct–Nov). If you use it more than 12 hours daily, add a mid-summer service in June. Clean the filters every 2–3 weeks during peak usage.",
      },
      {
        question: "Is AC servicing necessary every year?",
        answer:
          "Yes, annual AC servicing is essential. Regular service maintains cooling efficiency, reduces electricity bills by 10–15%, prevents costly breakdowns, and extends the AC's lifespan. Skipping service leads to compressor stress and potential failure.",
      },
      {
        question: "What is included in a standard AC service?",
        answer:
          "A standard AC service includes filter cleaning/replacement, evaporator coil cleaning, drain pipe flushing, gas pressure check, electrical connection inspection, thermostat check, and performance testing. Deep cleaning adds condenser coil wash and anti-bacterial treatment.",
      },
      {
        question: "How much does regular AC servicing cost in Delhi?",
        answer:
          "Basic AC servicing costs ₹199–₹499 per service. Deep cleaning costs ₹499–₹799 for split ACs. Annual maintenance contracts (AMC) with 2–4 services, priority scheduling, and discounted repairs start from ₹2,999 at Medon Company.",
      },
      {
        question: "Can lack of AC service increase my electricity bill?",
        answer:
          "Yes, a poorly maintained AC can increase your electricity bill by 10–15%. Dirty filters, low gas, and dust-covered coils force the compressor to work harder, consuming more power. In Delhi's long summers, this adds up to ₹2,000–₹5,000 extra per year.",
      },
    ],
  },
];

/* ── Helper: get blog by slug ────────────────────── */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}

/* ── Helper: get blogs by category ───────────────── */
export function getBlogsByCategory(category: BlogCategory): BlogPost[] {
  return ALL_BLOG_POSTS.filter((p) => p.category === category);
}

/* ── Helper: get blogs by cluster ────────────────── */
export function getBlogsByCluster(cluster: BlogCluster, excludeSlug?: string): BlogPost[] {
  return ALL_BLOG_POSTS.filter(
    (p) => p.cluster === cluster && p.slug !== excludeSlug
  );
}
