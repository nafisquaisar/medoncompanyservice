"use client";

import { motion } from "framer-motion";
import type { PricingItem } from "@/data/services";
import { Phone } from "lucide-react";

interface ServicePricingProps {
  pricing: PricingItem[];
}

export default function ServicePricing({ pricing }: ServicePricingProps) {
  return (
    <section className="py-20 sm:py-24 bg-secondary" aria-label="Service pricing">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Transparent Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Service Pricing
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            No hidden charges. Know the cost upfront before any work begins.
          </p>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-gray-100 shadow-lg shadow-black/[0.03] overflow-hidden"
        >
          <div className="divide-y divide-gray-100">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 sm:px-8 py-4 bg-primary text-white text-sm font-semibold">
              <div className="col-span-6 sm:col-span-5">Service</div>
              <div className="col-span-3 sm:col-span-4">Price</div>
              <div className="col-span-3 hidden sm:block">Note</div>
            </div>

            {/* Rows */}
            {pricing.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 px-6 sm:px-8 py-4 text-sm
                           hover:bg-primary-light/30 transition-colors duration-200"
              >
                <div className="col-span-6 sm:col-span-5 font-medium text-gray-800">
                  {item.service}
                </div>
                <div className="col-span-3 sm:col-span-4 font-bold text-primary">
                  {item.price}
                </div>
                <div className="col-span-3 hidden sm:block text-gray-400 text-xs mt-0.5">
                  {item.note || "—"}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-6 sm:px-8 py-5 bg-primary-light/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Prices may vary based on model and condition.{" "}
              <strong className="text-primary">Call for exact quote.</strong>
            </p>
            <a
              href="tel:+917303637086"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5
                         rounded-full font-semibold text-sm shadow-md shadow-primary/20
                         hover:bg-primary-dark transition-all duration-300"
            >
              <Phone size={14} />
              Get Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
