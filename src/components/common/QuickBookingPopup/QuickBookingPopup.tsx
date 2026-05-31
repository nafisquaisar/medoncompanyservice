"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/917303637086?text=Hi%20Medon%2C%20I%20want%20to%20book%20a%20service";

const POPUP_DELAY_MS = 15_000; // 15 seconds
const DISMISS_KEY = "medon_popup_dismissed";
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export default function QuickBookingPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    /* Check if dismissed recently */
    const dismissedAt = localStorage.getItem(DISMISS_KEY);
    if (dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_DURATION_MS) {
      return;
    }

    const timer = setTimeout(() => setShow(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    setShow(false);
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full rounded-3xl
                       bg-white/95 backdrop-blur-xl
                       border border-white/20 shadow-2xl
                       p-7 sm:p-8"
          >
            {/* Close */}
            <button
              onClick={dismiss}
              aria-label="Close booking popup"
              className="absolute top-4 right-4 p-2 rounded-full
                         text-gray-400 hover:text-gray-600 hover:bg-gray-100
                         transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-primary-light flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                Need Appliance Repair?
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Get same-day service in Mahipalpur, Vasant Kunj &amp; South Delhi.
                Call or WhatsApp us to book instantly!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href="tel:+917303637086"
                className="flex items-center justify-center gap-2.5
                           w-full py-3.5 rounded-full
                           bg-primary text-white font-semibold text-sm
                           shadow-md shadow-primary/20
                           hover:bg-primary-dark hover:shadow-lg
                           transition-all duration-300"
              >
                <Phone size={18} />
                Call Now: +91 7303637086
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5
                           w-full py-3.5 rounded-full
                           bg-[#25D366] text-white font-semibold text-sm
                           shadow-md shadow-[#25D366]/20
                           hover:bg-[#22c55e] hover:shadow-lg
                           transition-all duration-300"
              >
                <MessageCircle size={18} />
                Book via WhatsApp
              </a>
            </div>

            {/* Trust micro-copy */}
            <p className="mt-5 text-center text-xs text-gray-400">
              ⭐ 4.9/5 rating • ⏱ Under 1-hour response • 🛡️ 90-day warranty
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
