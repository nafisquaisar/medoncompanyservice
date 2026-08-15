"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Zap,
  ShieldCheck,
  IndianRupee,
  MapPin,
  Star,
} from "lucide-react";

const TRUST_SIGNALS = [
  {
    Icon: UserCheck,
    title: "Verified & Background-Checked Technicians",
    description:
      "Every Medon Company technician is identity-verified, skill-tested, and background-checked before being assigned to your home in Mahipalpur or any of our 13 service areas.",
  },
  {
    Icon: Zap,
    title: "Same-Day Service Across Our Service Areas",
    description:
      "Book today, get served today. We offer same-day appliance repair in Mahipalpur, Vasant Kunj, Aerocity, Vasant Vihar, and all 13 of our service areas.",
  },
  {
    Icon: ShieldCheck,
    title: "90-Day Warranty on All Repairs",
    description:
      "Every repair comes with a 90-day service warranty. Parts replacements carry the manufacturer's warranty for complete peace of mind.",
  },
  {
    Icon: IndianRupee,
    title: "Transparent Pricing — No Hidden Charges",
    description:
      "Know the cost before the work begins. Our upfront pricing model means zero surprises — what you see is what you pay.",
  },
  {
    Icon: MapPin,
    title: "Headquartered in Mahipalpur, Delhi",
    description:
      "Our operations center is in Mahipalpur, giving us the fastest response times across Aerocity, Vasant Kunj, Vasant Vihar, Rangpuri, and all 13 of our service areas.",
  },
  {
    Icon: Star,
    title: "4.8★ Rating from 5,000+ Customers",
    description:
      "Trusted by thousands of homeowners and hotels across Mahipalpur and our 13 service areas for AC repair, refrigerator service, electrical work, and geyser repair.",
  },
];

export default function WhyChooseMedon() {
  return (
    <section
      className="py-20 sm:py-28 bg-secondary"
      aria-label="Why choose Medon Company for appliance repair in Delhi"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Why Customers Trust Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Why Choose Medon Company for Appliance Repair in Delhi
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From AC repair in Mahipalpur to electrical services across all 13 service areas —
            here&apos;s why 5,000+ customers trust Medon Company for their home
            repair needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRUST_SIGNALS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div
                className="
                  group relative h-full overflow-hidden
                  rounded-2xl
                  border border-gray-100
                  bg-white
                  p-6 sm:p-7
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-xl hover:shadow-primary/5
                  hover:border-primary/10
                "
              >
                <div
                  className="
                    mb-5 flex h-12 w-12 items-center justify-center
                    rounded-2xl bg-primary-light text-primary
                    transition-all duration-300
                    group-hover:bg-primary group-hover:text-white
                    group-hover:shadow-md group-hover:shadow-primary/20
                  "
                >
                  <item.Icon size={22} aria-hidden />
                </div>

                <h3 className="text-base font-bold text-primary leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
