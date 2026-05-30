"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-white to-primary-light/30 py-16 sm:py-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Expert Tips & Guides
        </motion.span>

        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-[1.15] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Appliance Repair Tips{" "}
          <span className="text-primary-dark/70">& Maintenance Guides</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Practical AC repair tips, refrigerator troubleshooting guides, and
          expert maintenance advice for homeowners in Delhi NCR. Stay informed,
          save money, and keep your appliances running smoothly.
        </motion.p>
      </div>
    </section>
  );
}
