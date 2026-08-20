"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const AREAS = [
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

export default function AreasWeServe() {
  return (
    <section className="py-20 sm:py-28 bg-secondary" aria-label="Service areas">
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
            Based in Mahipalpur, we provide fast and reliable appliance repair
            services across 13 approved service areas in Mahipalpur and nearby.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {AREAS.map((area, i) => (
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
                {/* Icon + badge */}
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
        </div>
      </div>
    </section>
  );
}
