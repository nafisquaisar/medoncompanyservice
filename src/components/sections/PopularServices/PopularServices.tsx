"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Snowflake, Wrench, Refrigerator, Zap, Thermometer } from "lucide-react";

const POPULAR_SERVICES = [
  {
    title: "AC Repair Service in Delhi",
    slug: "ac-repair-service-delhi",
    description: "Expert split & window AC repair, gas refilling, compressor fix for all brands.",
    Icon: Snowflake,
  },
  {
    title: "AC Installation in Delhi",
    slug: "ac-installation-delhi",
    description: "Professional wall mounting, copper pipe fitting, and electrical setup.",
    Icon: Wrench,
  },
  {
    title: "Refrigerator Repair in Delhi",
    slug: "refrigerator-repair-delhi",
    description: "Fix cooling issues, compressor problems, gas leaks for all fridge models.",
    Icon: Refrigerator,
  },
  {
    title: "Electrical Services in Delhi",
    slug: "electrical-services-delhi",
    description: "Wiring, switchboard repair, MCB installation, and short circuit fix.",
    Icon: Zap,
  },
  {
    title: "Geyser Repair in Delhi",
    slug: "geyser-repair-delhi",
    description: "Heating issues, leakage repair, thermostat replacement, and installation.",
    Icon: Thermometer,
  },
];

export default function PopularServices() {
  return (
    <section className="py-20 sm:py-28 bg-white" aria-label="Popular services in Delhi NCR">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Top Rated
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Popular Services in Delhi NCR
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Trusted by thousands across Delhi NCR. Book a verified technician for
            any appliance repair or installation service.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_SERVICES.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${svc.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-6 sm:p-7
                           hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                           hover:border-primary/10 transition-all duration-300"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-primary-light text-primary
                               flex items-center justify-center
                               group-hover:bg-primary group-hover:text-white
                               group-hover:shadow-md transition-all duration-300">
                  <svc.Icon size={20} />
                </div>

                <h3 className="font-bold text-primary text-base group-hover:text-primary-dark transition-colors">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                  {svc.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary/70
                               group-hover:text-primary group-hover:gap-2 transition-all">
                  View Details
                  <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
