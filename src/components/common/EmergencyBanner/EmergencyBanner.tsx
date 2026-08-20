"use client";

import { useState } from "react";
import { X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-[55] overflow-hidden
                     bg-gradient-to-r from-red-600 via-red-500 to-orange-500"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-2
                          flex items-center justify-center gap-2 sm:gap-4 text-white">
            <span className="hidden sm:inline text-sm font-medium">🔴</span>
            <span className="text-xs sm:text-sm font-medium text-center">
              Emergency AC Repair?{" "}
              <a
                href="tel:+917303637086"
                className="inline-flex items-center gap-1 font-bold underline underline-offset-2
                           hover:text-white/90 transition-colors"
              >
                <Phone size={12} />
                Call +91 7303637086
              </a>
              <span className="hidden sm:inline">
                {" "}— Average response: under 1 hour in Mahipalpur &amp; nearby area
              </span>
            </span>

            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss emergency banner"
              className="absolute right-2 sm:right-4 p-1 rounded-full
                         text-white/60 hover:text-white hover:bg-white/10
                         transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
