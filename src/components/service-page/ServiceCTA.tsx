"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function ServiceCTA() {
  const { onCallClick, onWhatsAppClick } = useAnalytics({
    location: "service_cta",
  });

  return (
    <section
      className="py-20 sm:py-28 bg-gradient-to-br from-secondary to-primary-light/30 relative overflow-hidden"
      aria-label="Book a service"
      id="contact"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Ready to Get Started?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Book Your Service Now
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed max-w-xl mx-auto">
            Call us, message us on WhatsApp, or book online. Our team is available
            7 days a week for all your service needs.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="tel:+917303637086"
            onClick={onCallClick}
            className="group inline-flex items-center justify-center gap-2 bg-primary text-white
                       px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/25
                       hover:bg-primary-dark hover:shadow-xl transition-all duration-300 text-base"
          >
            <Phone size={18} />
            Call +91 7303637086
          </a>

          <a
            href="https://wa.me/917303637086?text=Hi%20Medon%20Company%2C%20I%20need%20a%20service"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                       px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#25D366]/25
                       hover:bg-[#1fb855] hover:shadow-xl transition-all duration-300 text-base"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.p
          className="mt-6 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Available 24/7 • Mahipalpur, New Delhi
        </motion.p>
      </div>
    </section>
  );
}
