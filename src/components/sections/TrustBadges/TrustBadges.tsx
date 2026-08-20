"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Clock,
  Users,
  Star,
  Wrench,
} from "lucide-react";

const BADGES = [
  {
    Icon: Award,
    value: "5+",
    label: "Years Experience",
    color: "from-amber-400 to-orange-500",
  },
  {
    Icon: ShieldCheck,
    value: "100%",
    label: "Verified Technicians",
    color: "from-emerald-400 to-green-600",
  },
  {
    Icon: Clock,
    value: "<1hr",
    label: "Response Time",
    color: "from-blue-400 to-indigo-600",
  },
  {
    Icon: Wrench,
    value: "20,000+",
    label: "Services Completed",
    color: "from-violet-400 to-purple-600",
  },
  {
    Icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
    color: "from-yellow-400 to-amber-500",
  },
  {
    Icon: Users,
    value: "90-Day",
    label: "Repair Warranty",
    color: "from-cyan-400 to-teal-600",
  },
];

export default function TrustBadges() {
  return (
    <section
      className="py-12 sm:py-16 bg-white"
      aria-label="Medon Company trust badges and credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative text-center"
            >
              <div className="relative flex flex-col items-center gap-3 p-5 sm:p-6
                              rounded-2xl border border-gray-100 bg-white
                              transition-all duration-300
                              hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                              hover:border-primary/10">
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl
                              bg-gradient-to-br ${badge.color} text-white
                              shadow-lg shadow-black/10
                              transition-transform duration-300 group-hover:scale-110`}
                >
                  <badge.Icon size={22} />
                </div>

                {/* Value */}
                <span className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
                  {badge.value}
                </span>

                {/* Label */}
                <span className="text-xs text-gray-500 font-medium leading-tight">
                  {badge.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
