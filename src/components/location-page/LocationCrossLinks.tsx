"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { getOtherLocations } from "@/data/locations";

interface LocationCrossLinksProps {
  currentSlug: string;
}

export default function LocationCrossLinks({ currentSlug }: LocationCrossLinksProps) {
  const others = getOtherLocations(currentSlug);

  return (
    <section className="py-16 sm:py-20 bg-white" aria-label="Other service areas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Other Areas
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            We Also Serve
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-3">
          {others.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${loc.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-secondary
                           p-4 sm:p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5
                           hover:border-primary/10 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-primary-light text-primary flex items-center justify-center
                               group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                    {loc.heroTitle} {loc.heroHighlight}
                  </span>
                  <p className="text-[11px] text-gray-400 mt-0.5">{loc.responseTime} response</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
