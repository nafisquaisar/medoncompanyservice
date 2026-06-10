"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

interface LocationHeroProps {
  title: string;
  highlight: string;
  description: string;
  stats: { value: string; label: string }[];
}

export default function LocationHero({ title, highlight, description, stats }: LocationHeroProps) {
  return (
    <section
      className="relative bg-gradient-to-br from-primary/[0.04] via-white to-primary-light/30 py-16 sm:py-24 overflow-hidden"
      aria-label={`${title} ${highlight}`}
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-primary/10 rounded-full">
              <MapPin size={16} className="text-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                Local Service Area
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-[1.15] tracking-tight">
              {title}{" "}
              <span className="text-primary-dark/60">{highlight}</span>
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+917303637086"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white
                           px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/25
                           hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href="https://wa.me/917303637086?text=Hi%20Medon%20Company%2C%20I%20need%20a%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                           px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-[#25D366]/25
                           hover:bg-[#1fb855] hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-5 sm:p-6
                           text-center hover:shadow-lg hover:shadow-primary/5
                           hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
