"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnalytics } from "@/hooks/useAnalytics";

const WHATSAPP_URL =
  "https://wa.me/917303637086?text=Hi%20Medon%20Company%2C%20I%20need%20appliance%20repair%20service";

export default function StickyContactCTA() {
  const [visible, setVisible] = useState(false);
  const { onCallClick, onWhatsAppClick } = useAnalytics({
    location: "sticky_bar",
  });

  useEffect(() => {
    const onScroll = () => {
      /* Show after scrolling past ~500px (roughly past hero) */
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check on mount
    return () => window.removeEventListener("scroll", onScroll);
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
                href="tel:+917303637086"
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

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Medon Company for appliance repair"
                onClick={onWhatsAppClick}
                className="flex-1 inline-flex items-center justify-center gap-2
                           bg-[#25D366] text-white py-3 rounded-full font-semibold text-sm
                           shadow-md shadow-[#25D366]/20 active:scale-95
                           transition-all duration-200"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* ── DESKTOP: Floating WhatsApp pill ──────────── */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Medon Company on WhatsApp"
            onClick={onWhatsAppClick}
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
                       transition-colors duration-300"
          >
            <MessageCircle size={20} />
            Chat with Us
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
