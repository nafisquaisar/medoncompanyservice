"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917303637086?text=Hi%20Medon%20Company%2C%20I%20need%20urgent%20appliance%20repair%20service";

export default function EmergencyCTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary"
      aria-label="Emergency appliance repair service in Delhi NCR"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90
                          text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
            <AlertTriangle size={14} />
            Emergency Service Available
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Need Urgent Appliance Repair
            <br className="hidden sm:block" />
            <span className="text-white/80"> in Delhi NCR?</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Same-day service available in Mahipalpur, Vasant Kunj, Aerocity,
            Dwarka, South Delhi, Saket &amp; Hauz Khas. Our verified technicians can be at your
            doorstep within 1–2 hours.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              href="tel:+917303637086"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5
                         bg-white text-primary px-8 py-4 rounded-full font-bold text-sm
                         shadow-lg shadow-black/10 hover:shadow-xl
                         transition-all duration-300"
            >
              <Phone size={18} />
              Call Now: +91 7303637086
            </motion.a>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5
                         bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm
                         shadow-lg shadow-[#25D366]/20 hover:bg-[#22c55e] hover:shadow-xl
                         transition-all duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </motion.a>
          </div>

          {/* Trust micro-copy */}
          <p className="mt-6 text-white/40 text-xs">
            ⏱ Average response time: under 1 hour in Mahipalpur &amp; Airport zone
          </p>
        </motion.div>
      </div>
    </section>
  );
}
