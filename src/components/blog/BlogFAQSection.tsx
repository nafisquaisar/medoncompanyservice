"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { BlogFAQ } from "@/data/blog-posts";

interface BlogFAQSectionProps {
  faqs: BlogFAQ[];
}

export default function BlogFAQSection({ faqs }: BlogFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section aria-label="Frequently asked questions">
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
          Common Questions
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            viewport={{ once: true }}
            className="border border-gray-100 rounded-2xl bg-white overflow-hidden
                       hover:border-primary/10 hover:shadow-md hover:shadow-primary/5
                       transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              aria-expanded={openIndex === i}
            >
              <h3 className="text-sm sm:text-base font-semibold text-primary group-hover:text-primary-dark transition-colors pr-2">
                {faq.question}
              </h3>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-primary/40 transition-transform duration-300
                           ${openIndex === i ? "rotate-180 text-primary" : ""}`}
              />
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
