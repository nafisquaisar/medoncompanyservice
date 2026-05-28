"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, MapPin } from "lucide-react";

interface LocationAboutProps {
  heading: string;
  paragraphs: string[];
  responseTime: string;
  sinceYear: string;
}

export default function LocationAbout({
  heading,
  paragraphs,
  responseTime,
  sinceYear,
}: LocationAboutProps) {
  return (
    <section className="py-20 sm:py-24 bg-white" aria-label="About our local service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
              Local Expertise
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              {heading}
            </h2>

            <div className="mt-6 space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-gray-500 leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Stats sidebar */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-100 bg-secondary p-6">
              <Clock size={24} className="text-primary mb-3" />
              <p className="text-sm font-semibold text-gray-700">Response Time</p>
              <p className="text-2xl font-bold text-primary mt-1">{responseTime}</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-secondary p-6">
              <Calendar size={24} className="text-primary mb-3" />
              <p className="text-sm font-semibold text-gray-700">Serving Since</p>
              <p className="text-2xl font-bold text-primary mt-1">{sinceYear}</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-secondary p-6">
              <MapPin size={24} className="text-primary mb-3" />
              <p className="text-sm font-semibold text-gray-700">Headquarters</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Shop No L-3, Mahipalpur Village, New Delhi 110037
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
