"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const LOCATIONS = [
  {
    name: "Mahipalpur",
    slug: "mahipalpur",
    response: "Under 1 hour",
    highlight: "HQ Location",
  },
  {
    name: "Vasant Kunj",
    slug: "vasant-kunj",
    response: "Within 2 hours",
    highlight: "All Sectors",
  },
  {
    name: "South Delhi",
    slug: "south-delhi",
    response: "2–4 hours",
    highlight: "15+ Areas",
  },
  {
    name: "Delhi Airport Area",
    slug: "delhi-airport-area",
    response: "Under 1 hour",
    highlight: "24/7 Hotels",
  },
];

interface ServiceLocationLinksProps {
  /** e.g. "AC Repair" – used to build SEO-rich anchor text */
  serviceName: string;
}

export default function ServiceLocationLinks({ serviceName }: ServiceLocationLinksProps) {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-label="Service areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Service Coverage
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Areas We Serve
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Get fast and reliable {serviceName.toLowerCase()} service across Delhi NCR.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${loc.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-secondary
                           p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                           hover:border-primary/10 transition-all duration-300"
              >
                {/* Icon + badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl bg-primary-light text-primary
                                 flex items-center justify-center
                                 group-hover:bg-primary group-hover:text-white
                                 group-hover:shadow-md transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[10px] font-bold tracking-wide uppercase text-primary bg-primary-light
                                   px-2.5 py-1 rounded-full">
                    {loc.highlight}
                  </span>
                </div>

                <h3 className="font-bold text-primary text-base group-hover:text-primary-dark transition-colors">
                  {serviceName} in {loc.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    ⏱ {loc.response}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary/70
                                   group-hover:text-primary group-hover:gap-2 transition-all">
                    {serviceName} in {loc.name}
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
