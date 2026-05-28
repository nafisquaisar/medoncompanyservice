"use client";

import { motion } from "framer-motion";
import type { ServiceDetail } from "@/data/services";
import { CheckCircle } from "lucide-react";

interface ServiceDetailsProps {
  heading: string;
  description: string;
  details: ServiceDetail[];
}

export default function ServiceDetails({
  heading,
  description,
  details,
}: ServiceDetailsProps) {
  return (
    <section className="py-20 sm:py-24 bg-white" aria-label="Service details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {details.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 sm:p-7
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                         hover:border-primary/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-bold text-primary text-base">{item.title}</h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
