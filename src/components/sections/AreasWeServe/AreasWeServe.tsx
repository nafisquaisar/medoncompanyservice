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
    name: "Vasant Kunj",
    slug: "vasant-kunj",
    description: "Serving all sectors A–F with high-rise AC expertise.",
    response: "Within 2 hours",
    highlight: "All Sectors",
  },
  {
    name: "South Delhi",
    slug: "south-delhi",
    description: "Premium service across Saket, Hauz Khas, GK, Vasant Vihar & more.",
    response: "2–4 hours",
    highlight: "15+ Areas",
  },
  {
    name: "Delhi Airport Area",
    slug: "delhi-airport-area",
    description: "Rapid service for Aerocity, Dwarka & the hospitality corridor.",
    response: "Under 1 hour",
    highlight: "24/7 Hotels",
  },
];

export default function AreasWeServe() {
  return (
    <section className="py-20 sm:py-28 bg-secondary" aria-label="Areas we serve in Delhi NCR">
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
            Areas We Serve in Delhi NCR
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Based in Mahipalpur, we provide fast and reliable appliance repair
            services across South Delhi and the airport zone.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
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
