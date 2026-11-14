"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import VirtualMap, { type MapLocation } from "@/components/common/VirtualMap/VirtualMap";

interface LocationDetailPageProps {
  regionName: string;
  regionSubtitle: string;
  description: string;
  locations: MapLocation[];
  accent: "blue" | "emerald";
  phone?: string;
}

export default function LocationDetailPage({
  regionName,
  regionSubtitle,
  description,
  locations,
  accent,
  phone = "+91 7303637086",
}: LocationDetailPageProps) {
  return (
    <section className="py-10 sm:py-14 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Back + Heading ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#service-locations"
            className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary
              transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-12 sm:mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
              {regionSubtitle}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Service Areas in {regionName}
            </h1>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>

        {/* ── Virtual Map ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <VirtualMap
            locations={locations}
            regionName={regionName}
            accent={accent}
          />
        </motion.div>

        {/* ── All Locations Grid ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-8 text-center">
            All {locations.length} Service Areas
          </h2>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className={`group relative flex items-center gap-3 p-4 sm:p-5 rounded-2xl border bg-white
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5
                  ${loc.isHQ
                    ? "border-primary/20 shadow-md ring-1 ring-primary/10"
                    : "border-gray-100 hover:border-primary/10"
                  }`}
              >
                {/* Numbered pin */}
                <div
                  className={`h-9 w-9 flex-shrink-0 rounded-xl flex items-center justify-center
                    text-xs font-bold transition-all duration-300
                    ${loc.isHQ
                      ? "bg-amber-500 text-white shadow-sm"
                      : "bg-primary-light text-primary group-hover:bg-primary group-hover:text-white"
                    }`}
                >
                  {loc.isHQ ? "★" : <MapPin size={16} />}
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-semibold text-sm leading-tight
                      ${loc.isHQ ? "text-primary" : "text-gray-700 group-hover:text-primary"}
                      transition-colors`}
                  >
                    {loc.name}
                  </h3>
                  {loc.isHQ && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                      Headquarters
                    </span>
                  )}
                </div>

                {/* Serial number */}
                <span className="absolute top-2 right-3 text-[10px] font-bold text-gray-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-3xl
            bg-white border border-gray-100 shadow-lg shadow-primary/5">
            <div className="text-left">
              <p className="text-sm text-gray-500">Need service in {regionName}?</p>
              <p className="text-lg font-bold text-primary mt-1">Book a Service Now</p>
            </div>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20
                hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
            >
              <Phone size={16} />
              {phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

