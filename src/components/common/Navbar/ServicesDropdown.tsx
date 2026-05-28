"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Snowflake, Wrench, Wind, Refrigerator, Zap, Thermometer, Microwave } from "lucide-react";

const DROPDOWN_SERVICES = [
  { label: "AC Repair Service in Delhi", slug: "ac-repair-service-delhi", Icon: Snowflake },
  { label: "AC Installation in Delhi", slug: "ac-installation-delhi", Icon: Wrench },
  { label: "AC Gas Refilling in Delhi", slug: "ac-gas-refilling-delhi", Icon: Wind },
  { label: "Refrigerator Repair in Delhi", slug: "refrigerator-repair-delhi", Icon: Refrigerator },
  { label: "Electrical Services in Delhi", slug: "electrical-services-delhi", Icon: Zap },
  { label: "Geyser Repair in Delhi", slug: "geyser-repair-delhi", Icon: Thermometer },
  { label: "Microwave Repair in Delhi", slug: "microwave-repair-delhi", Icon: Microwave },
];

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Close on click outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide uppercase
                   text-gray-500 hover:text-primary transition-colors duration-300"
      >
        Services
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseLeave={() => setOpen(false)}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72
                       bg-white rounded-2xl shadow-xl shadow-black/[0.08]
                       border border-gray-100 overflow-hidden z-50"
          >
            <div className="p-2">
              {DROPDOWN_SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/${svc.slug}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl
                             hover:bg-primary-light/40 transition-colors duration-200"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary-light text-primary flex items-center justify-center
                                 group-hover:bg-primary group-hover:text-white transition-all duration-200 flex-shrink-0">
                    <svc.Icon size={15} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    {svc.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 p-2">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="block text-center text-xs font-semibold text-primary py-2 rounded-xl
                           hover:bg-primary-light/40 transition-colors"
              >
                View All Services →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
