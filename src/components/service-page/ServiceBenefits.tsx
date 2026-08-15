"use client";

import { motion } from "framer-motion";
import { Shield, Clock, BadgeCheck, IndianRupee, Headphones, Star } from "lucide-react";

const WHY_CHOOSE_US = [
  { icon: BadgeCheck, title: "Verified Technicians", description: "Every technician is background-verified and managed by our admin team." },
  { icon: IndianRupee, title: "Transparent Pricing", description: "No hidden charges. Know the cost before any work begins." },
  { icon: Clock, title: "Fast Response", description: "2–4 hour technician dispatch across our service areas." },
  { icon: Shield, title: "Service Warranty", description: "90-day warranty on all repairs and replacements." },
  { icon: Star, title: "Quality Parts", description: "Genuine OEM parts and manufacturer-grade components." },
  { icon: Headphones, title: "Post-Service Support", description: "Follow-up calls and dedicated support after every service." },
];

interface ServiceBenefitsProps {
  benefits: string[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <>
      {/* Benefits Section */}
      <section className="py-20 sm:py-24 bg-white" aria-label="Service benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
              What You Get
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Service Benefits
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-primary-light/30 transition-colors"
              >
                <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-24 bg-secondary" aria-label="Why choose Medon Company">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
              The Medon Company Advantage
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Why Choose Medon Company?
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => (
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
                <div className="mb-4 h-11 w-11 rounded-2xl bg-primary-light text-primary
                               flex items-center justify-center
                               group-hover:bg-primary group-hover:text-white
                               group-hover:shadow-md transition-all duration-300">
                  <item.icon size={20} />
                </div>
                <h3 className="font-bold text-primary text-base">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
