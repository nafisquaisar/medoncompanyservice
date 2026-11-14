"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Building2 } from "lucide-react";

/* ── Delhi Areas (with dedicated pages) ──────────────────── */
const DELHI_AREAS = [
  {
    name: "Mahipalpur",
    slug: "mahipalpur",
    description: "Our headquarters — fastest response times and special local pricing.",
    response: "Under 1 hour",
    highlight: "HQ Location",
  },
  {
    name: "Aerocity",
    slug: "aerocity",
    description: "Rapid service for hotels, residences & the hospitality corridor.",
    response: "Under 1 hour",
    highlight: "24/7 Hotels",
  },
  {
    name: "Vasant Kunj",
    slug: "vasant-kunj",
    description: "Serving all sectors A–F with high-rise AC expertise.",
    response: "Within 2 hours",
    highlight: "All Sectors",
  },
  {
    name: "Rangpuri",
    slug: "rangpuri",
    description: "Fast appliance repair just 1 km from our Mahipalpur HQ.",
    response: "Within 1 hour",
    highlight: "Nearby HQ",
  },
  {
    name: "IGI Airport",
    slug: "igi-airport",
    description: "Emergency repairs for airport zone hotels & residents.",
    response: "Under 1 hour",
    highlight: "Emergency",
  },
  {
    name: "Mahipalpur Extension",
    slug: "mahipalpur-extension",
    description: "Priority service — just 0.5 km from our operations center.",
    response: "~30 minutes",
    highlight: "Priority",
  },
  {
    name: "Vasant Vihar",
    slug: "vasant-vihar",
    description: "Premium appliance repair for Vasant Vihar residences.",
    response: "Within 2 hours",
    highlight: "Premium",
  },
  {
    name: "Shanti Niketan",
    slug: "shanti-niketan",
    description: "Expert repairs for Shanti Niketan homes and bungalows.",
    response: "2–3 hours",
    highlight: "Expert",
  },
  {
    name: "Nangal Dewat",
    slug: "nangal-dewat",
    description: "Reliable appliance repair for Nangal Dewat residents.",
    response: "2–3 hours",
    highlight: "Reliable",
  },
  {
    name: "Kishangarh",
    slug: "kishangarh",
    description: "Trusted repairs in Kishangarh — near Vasant Kunj.",
    response: "~1.5 hours",
    highlight: "Trusted",
  },
  {
    name: "JNU",
    slug: "jnu",
    description: "Serving JNU campus area, faculty residences & nearby colonies.",
    response: "2–3 hours",
    highlight: "Campus",
  },
  {
    name: "Munirka",
    slug: "munirka",
    description: "Fast, reliable repairs for Munirka homes and PGs.",
    response: "Within 2 hours",
    highlight: "Reliable",
  },
  {
    name: "R.K. Puram",
    slug: "rk-puram",
    description: "Professional repairs across all R.K. Puram sectors.",
    response: "2–3 hours",
    highlight: "All Sectors",
  },
];

/* ── Samastipur Areas ────────────────────────────────────── */
const SAMASTIPUR_AREAS = [
  { name: "Mushrigharari", highlight: "Branch HQ" },
  { name: "Sarairanjan", highlight: "Covered" },
  { name: "Tajpur", highlight: "Covered" },
  { name: "Samastipur", highlight: "District HQ" },
  { name: "Harpur Ailoth", highlight: "Covered" },
  { name: "Dhurlakh", highlight: "Covered" },
  { name: "Dudhpura", highlight: "Covered" },
  { name: "Harpur Aloth", highlight: "Covered" },
  { name: "Bhuindhara", highlight: "Covered" },
  { name: "Mohanpur", highlight: "Covered" },
  { name: "Musapur", highlight: "Covered" },
  { name: "Lagunia Raghukanth", highlight: "Covered" },
  { name: "Lagunia Suraj Kanth", highlight: "Covered" },
  { name: "Bejha Dih", highlight: "Covered" },
  { name: "Sitalpatti", highlight: "Covered" },
  { name: "Rahimpur Rudauli", highlight: "Covered" },
  { name: "Balbhadarpur", highlight: "Covered" },
  { name: "Chandpatti", highlight: "Covered" },
  { name: "Chak Jainab", highlight: "Covered" },
  { name: "Bikrampur Bande", highlight: "Covered" },
  { name: "Sangrampur", highlight: "Covered" },
  { name: "Garuara", highlight: "Covered" },
  { name: "Karpuri Gram", highlight: "Covered" },
  { name: "Jitwarpur", highlight: "Covered" },
  { name: "Chak Nur", highlight: "Covered" },
];

const TABS = [
  { id: "delhi", label: "🏛️ New Delhi", badge: `${DELHI_AREAS.length} Areas` },
  { id: "samastipur", label: "📍 Samastipur, Bihar", badge: `${SAMASTIPUR_AREAS.length} Areas` },
] as const;

export default function AreasWeServe() {
  const [activeTab, setActiveTab] = useState<string>("delhi");

  return (
    <section className="py-10 sm:py-14 bg-secondary" aria-label="Service areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Service Coverage
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Areas We Serve
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Based in Mahipalpur (Delhi) and Mushrigharari (Samastipur), we provide fast
            and reliable appliance repair services across two states.
          </p>
        </motion.div>

        {/* ── Region Tabs ──────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                transition-all duration-300
                ${activeTab === tab.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-primary/20 hover:text-primary hover:shadow-md"
                }`}
            >
              {tab.label}
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full
                  ${activeTab === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-400"
                  }`}
              >
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* ── Delhi Areas Grid (with links) ───────────── */}
        <AnimatePresence mode="wait">
          {activeTab === "delhi" && (
            <motion.div
              key="delhi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
            >
              {DELHI_AREAS.map((area, i) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/${area.slug}`}
                    className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-6 sm:p-7
                               hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                               hover:border-primary/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-2xl bg-primary-light text-primary
                                     flex items-center justify-center
                                     group-hover:bg-primary group-hover:text-white
                                     group-hover:shadow-md transition-all duration-300">
                        <MapPin size={20} />
                      </div>
                      <span className="text-[10px] font-bold tracking-wide uppercase text-primary bg-primary-light
                                       px-2.5 py-1 rounded-full">
                        {area.highlight}
                      </span>
                    </div>

                    <h3 className="font-bold text-primary text-lg group-hover:text-primary-dark transition-colors">
                      {area.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                      {area.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        ⏱ {area.response}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary/70
                                       group-hover:text-primary group-hover:gap-2 transition-all">
                        Explore
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── Samastipur Areas Grid (no dedicated pages yet) ─ */}
          {activeTab === "samastipur" && (
            <motion.div
              key="samastipur"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            >
              {SAMASTIPUR_AREAS.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  viewport={{ once: true }}
                  className={`group flex items-center gap-3 rounded-2xl border bg-white p-4 sm:p-5
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5
                    ${i === 0
                      ? "border-primary/20 shadow-md col-span-2 sm:col-span-1"
                      : "border-gray-100 hover:border-primary/10"
                    }`}
                >
                  <div
                    className={`h-9 w-9 flex-shrink-0 rounded-xl flex items-center justify-center
                      transition-all duration-300
                      ${i === 0
                        ? "bg-primary text-white shadow-sm"
                        : "bg-primary-light text-primary group-hover:bg-primary group-hover:text-white"
                      }`}
                  >
                    {i === 0 ? <Building2 size={16} /> : <MapPin size={16} />}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-semibold text-sm leading-tight truncate
                        ${i === 0 ? "text-primary" : "text-gray-700 group-hover:text-primary"}
                        transition-colors`}
                    >
                      {area.name}
                    </h3>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider
                        ${i === 0 ? "text-primary/60" : "text-gray-400"}`}
                    >
                      {area.highlight}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
