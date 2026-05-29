"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { HOMEPAGE_FAQS } from "@/data/homepage-faqs";

/* ── Internal link data for answers ────────────────────── */
const FAQ_LINKS: Record<number, { text: string; href: string }[]> = {
  0: [{ text: "AC Repair Service in Delhi", href: "/ac-repair-service-delhi" }],
  1: [{ text: "AC repair services in Mahipalpur", href: "/mahipalpur" }],
  2: [
    { text: "Mahipalpur", href: "/mahipalpur" },
    { text: "Vasant Kunj", href: "/vasant-kunj" },
    { text: "South Delhi", href: "/south-delhi" },
    { text: "Delhi Airport area", href: "/delhi-airport-area" },
  ],
  6: [{ text: "AC repair service", href: "/ac-repair-service-delhi" }],
  7: [
    { text: "emergency AC repair near Delhi Airport", href: "/delhi-airport-area" },
  ],
};

/* ── Accordion item ────────────────────────────────────── */
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof HOMEPAGE_FAQS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const links = FAQ_LINKS[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="border border-gray-100 rounded-2xl bg-white overflow-hidden
                 hover:border-primary/10 hover:shadow-md hover:shadow-primary/5
                 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                   group"
        aria-expanded={isOpen}
      >
        <h3 className="text-sm sm:text-base font-semibold text-primary group-hover:text-primary-dark transition-colors pr-2">
          {faq.question}
        </h3>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-primary/40 transition-transform duration-300
                     ${isOpen ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
              <p>{faq.answer}</p>
              {links && links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex text-xs font-semibold text-primary hover:text-primary-dark
                                 bg-primary-light/60 hover:bg-primary-light px-3 py-1.5 rounded-full
                                 transition-colors duration-200"
                    >
                      {link.text} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main FAQ Section ──────────────────────────────────── */
export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-label="Frequently asked questions about appliance repair in Delhi"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Common Questions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Answers to the most common questions about our AC repair,
            refrigerator service, and electrical work in Delhi NCR.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {HOMEPAGE_FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
