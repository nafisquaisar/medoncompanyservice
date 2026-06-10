"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917303637086?text=Hi%20Medon%20Company%2C%20I%20need%20appliance%20repair%20service";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div className="relative px-6 sm:px-8 py-10 sm:py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
            Need Professional AC Service
            <br />
            <span className="text-white/80">in Delhi NCR?</span>
          </h2>

          <p className="mt-3 text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            Verified technicians • Same-day service • Transparent pricing •
            90-day warranty on all repairs.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="tel:+917303637086"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                         bg-white text-primary px-7 py-3.5 rounded-full font-bold text-sm
                         shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300"
            >
              <Phone size={16} />
              Call Now: +91 7303637086
            </motion.a>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                         bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold text-sm
                         shadow-lg shadow-[#25D366]/20 hover:bg-[#22c55e] hover:shadow-xl
                         transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
