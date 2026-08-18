"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import type { LocalTestimonial } from "@/data/locations";

interface LocationTestimonialsProps {
  testimonials: LocalTestimonial[];
}

export default function LocationTestimonials({ testimonials }: LocationTestimonialsProps) {
  return (
    <section className="py-20 sm:py-24 bg-secondary" aria-label="Local customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Local Reviews
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            What Local Customers Say
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                         transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    className={
                      j < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-gray-200 text-gray-200"
                    }
                  />
                ))}
              </div>

              {/* Service badge */}
              <span className="inline-block text-[11px] font-semibold text-primary bg-primary-light
                              px-2.5 py-0.5 rounded-full mb-3">
                {t.service}
              </span>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-primary">{t.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={10} className="text-gray-400" />
                    <p className="text-[11px] text-gray-400">{t.area}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
