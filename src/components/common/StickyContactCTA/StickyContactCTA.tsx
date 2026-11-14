"use client";

import { useEffect, useState, useCallback } from "react";
import { Phone, MessageCircle, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnalytics } from "@/hooks/useAnalytics";

const PHONE = "917303637086";

/* ── Services list for WhatsApp quick-select ───────── */
const SERVICES = [
  { label: "AC Repair & Service", emoji: "❄️" },
  { label: "AC Installation", emoji: "🔧" },
  { label: "AC Gas Refilling", emoji: "💨" },
  { label: "Refrigerator Repair", emoji: "🧊" },
  { label: "Washing Machine Repair", emoji: "👕" },
  { label: "Electrical Services", emoji: "⚡" },
  { label: "Geyser Repair", emoji: "🔥" },
  { label: "Microwave Repair", emoji: "📻" },
  { label: "Other Service", emoji: "🛠️" },
];

function buildWhatsAppUrl(service?: string) {
  const msg = service
    ? `Hi Medon Company, I need *${service}*. Please share details and availability.`
    : "Hi Medon Company, I need appliance repair service.";
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export default function StickyContactCTA() {
  const [visible, setVisible] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const { onCallClick, onWhatsAppClick } = useAnalytics({
    location: "sticky_bar",
  });

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsAppService = useCallback(
    (service: string) => {
      onWhatsAppClick();
      window.open(buildWhatsAppUrl(service), "_blank", "noopener,noreferrer");
      setShowPicker(false);
    },
    [onWhatsAppClick]
  );

  const togglePicker = useCallback(() => {
    setShowPicker((prev) => !prev);
  }, []);

  /* Close picker on outside click */
  const closePicker = useCallback(() => {
    setShowPicker(false);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── MOBILE: Full-width bottom bar ────────────── */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden
                       bg-white/95 backdrop-blur-xl border-t border-gray-100
                       shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
                       px-4 py-3 safe-area-inset-bottom"
          >
            <div className="flex gap-2.5 max-w-md mx-auto">
              <a
                href={`tel:+${PHONE}`}
                aria-label="Call Medon Company for appliance repair"
                onClick={onCallClick}
                className="flex-1 inline-flex items-center justify-center gap-2
                           bg-primary text-white py-3 rounded-full font-semibold text-sm
                           shadow-md shadow-primary/20 active:scale-95
                           transition-all duration-200"
              >
                <Phone size={16} />
                Call Now
              </a>

              <button
                onClick={togglePicker}
                aria-label="WhatsApp Medon Company — choose service"
                className="flex-1 inline-flex items-center justify-center gap-2
                           bg-[#25D366] text-white py-3 rounded-full font-semibold text-sm
                           shadow-md shadow-[#25D366]/20 active:scale-95
                           transition-all duration-200"
              >
                <MessageCircle size={16} />
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* ── DESKTOP: Floating WhatsApp pill ──────────── */}
          <motion.button
            aria-label="Chat with Medon Company on WhatsApp"
            onClick={togglePicker}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex fixed bottom-8 right-8 z-40
                       items-center gap-2.5 bg-[#25D366] text-white
                       pl-5 pr-6 py-3.5 rounded-full font-semibold text-sm
                       shadow-xl shadow-[#25D366]/30
                       hover:bg-[#22c55e] hover:shadow-2xl
                       transition-colors duration-300 cursor-pointer"
          >
            <MessageCircle size={20} />
            Chat with Us
          </motion.button>

          {/* ── SERVICE PICKER POPUP ────────────────────── */}
          <AnimatePresence>
            {showPicker && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[45] bg-black/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-0"
                  onClick={closePicker}
                />

                {/* ── MOBILE: Bottom sheet ─────────────── */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="fixed bottom-0 left-0 right-0 z-[50] lg:hidden
                             bg-white rounded-t-3xl shadow-2xl max-h-[80vh] overflow-auto"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-primary">
                        Select a Service
                      </h3>
                      <button
                        onClick={closePicker}
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-400"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-5">
                      Choose your service — we&apos;ll send a pre-filled message on WhatsApp.
                    </p>
                    <div className="space-y-2">
                      {SERVICES.map((svc) => (
                        <button
                          key={svc.label}
                          onClick={() => handleWhatsAppService(svc.label)}
                          className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left
                                     border border-gray-100 hover:border-[#25D366]/30
                                     hover:bg-[#25D366]/5 transition-all duration-200 group"
                        >
                          <span className="text-xl">{svc.emoji}</span>
                          <span className="flex-1 text-sm font-semibold text-gray-700 group-hover:text-[#25D366]">
                            {svc.label}
                          </span>
                          <ChevronRight size={16} className="text-gray-300 group-hover:text-[#25D366]" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* ── DESKTOP: Floating panel ──────────── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="hidden lg:block fixed bottom-24 right-8 z-[50]
                             w-80 bg-white rounded-2xl shadow-2xl border border-gray-100
                             overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <MessageCircle size={18} className="text-white" />
                      <span className="text-white font-bold text-sm">Chat on WhatsApp</span>
                    </div>
                    <button
                      onClick={closePicker}
                      className="p-1 rounded-full hover:bg-white/20 text-white/80"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Service list */}
                  <div className="p-3 max-h-[360px] overflow-y-auto">
                    <p className="text-xs text-gray-500 px-2 mb-2">
                      Select your service:
                    </p>
                    {SERVICES.map((svc, idx) => (
                      <motion.button
                        key={svc.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        onClick={() => handleWhatsAppService(svc.label)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                                   hover:bg-[#25D366]/5 transition-all duration-150 group"
                      >
                        <span className="text-base">{svc.emoji}</span>
                        <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-[#25D366]">
                          {svc.label}
                        </span>
                        <ChevronRight size={14} className="text-gray-300 group-hover:text-[#25D366]" />
                      </motion.button>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-100 px-5 py-3">
                    <p className="text-[10px] text-gray-400 text-center">
                      Powered by WhatsApp • Replies within 5 minutes
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
