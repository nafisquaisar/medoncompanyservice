"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const REGIONS = [
  {
    id: "delhi",
    name: "Delhi NCR",
    subtitle: "New Delhi",
    description: "Mahipalpur HQ & 13 service areas across South-West Delhi",
    areas: 13,
    href: "/delhi",
    emoji: "🏛️",
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderHover: "hover:border-blue-400/30",
    iconBg: "bg-blue-500",
  },
  {
    id: "bihar",
    name: "Samastipur, Bihar",
    subtitle: "Bihar",
    description: "Mushrigharari & 25 service areas across Samastipur district",
    areas: 25,
    href: "/samastipur",
    emoji: "🌾",
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderHover: "hover:border-emerald-400/30",
    iconBg: "bg-emerald-500",
  },
];

export default function ServiceLocations() {
  return (
    <section className="py-10 sm:py-14 bg-white" aria-label="Service locations">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ──────────────────────── */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Our Presence
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Service Locations
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            We serve across two regions. Tap a region to explore all covered areas.
          </p>
        </motion.div>

        {/* ── Two Region Cards ─────────────── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {REGIONS.map((region, i) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={region.href}
                className={`group relative flex flex-col items-center text-center p-8 sm:p-10
                  rounded-3xl border border-gray-100 bg-gradient-to-br ${region.gradient}
                  ${region.borderHover} hover:-translate-y-1
                  hover:shadow-2xl hover:shadow-primary/5
                  transition-all duration-300`}
              >
                {/* Emoji Icon */}
                <div
                  className={`h-16 w-16 rounded-2xl ${region.iconBg} text-white
                    flex items-center justify-center text-2xl shadow-lg
                    group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                >
                  {region.emoji}
                </div>

                {/* Region Name */}
                <h3 className="mt-5 text-xl sm:text-2xl font-bold text-primary">
                  {region.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {region.description}
                </p>

                {/* Area Count Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary/70 bg-white
                  px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                  <MapPin size={12} />
                  {region.areas} Service Areas
                </div>

                {/* Arrow CTA */}
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary
                  group-hover:gap-3 transition-all duration-300">
                  Explore Locations
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
