"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import type { ServiceIconName } from "@/data/services";
import { ICON_MAP } from "./ServiceIconMap";
import { useAnalytics } from "@/hooks/useAnalytics";

interface ServiceHeroProps {
  title: string;
  highlight: string;
  description: string;
  iconName: ServiceIconName;
}

export default function ServiceHero({
  title,
  highlight,
  description,
  iconName,
}: ServiceHeroProps) {
  const Icon = ICON_MAP[iconName];
  const { onCallClick, onWhatsAppClick, onBookingClick } = useAnalytics({
    location: "service_hero",
  });

  return (
    <section
      className="relative bg-gradient-to-br from-secondary via-white to-primary-light/30 py-16 sm:py-24 overflow-hidden"
      aria-label={`${title} ${highlight}`}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-primary/10 rounded-full">
              <Icon size={18} className="text-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                Medon Service
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-[1.15] tracking-tight">
              {title}{" "}
              <span className="text-primary-dark/60">{highlight}</span>
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href="tel:+917303637086"
              onClick={onCallClick}
              className="group inline-flex items-center justify-center gap-2 bg-primary text-white
                         px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/25
                         hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
            >
              <Phone size={16} />
              Call Now
            </a>

            <a
              href="https://wa.me/917303637086?text=Hi%20Medon%2C%20I%20need%20a%20service"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                         px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-[#25D366]/25
                         hover:bg-[#1fb855] hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <button
              onClick={() => {
                onBookingClick();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary/20
                         text-primary px-7 py-3.5 rounded-full font-semibold bg-white
                         hover:border-primary hover:bg-primary-light/40 transition-all duration-300"
            >
              Book Service
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
