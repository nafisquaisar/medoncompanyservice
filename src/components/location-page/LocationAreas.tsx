"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { NearbyArea } from "@/data/locations";

interface LocationAreasProps {
  areas: NearbyArea[];
  locationName: string;
}

export default function LocationAreas({ areas, locationName }: LocationAreasProps) {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-label="Areas we cover">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Areas Near {locationName} We Cover
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-secondary
                         px-4 py-3 hover:border-primary/10 hover:shadow-sm transition-all"
            >
              <MapPin size={14} className="text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate">{area.name}</p>
                <p className="text-[11px] text-gray-400">{area.distance}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
