"use client";

import {
  Zap,
  Radar,
  UserCheck,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const aboutHighlights = [
  {
    title: "Fast & Easy Service Booking",
    description:
      "Book electronic services in seconds. Choose the service, select a time slot, and confirm — no calls, no waiting.",
    icon: Zap,
  },
  {
    title: "Live Job Updates",
    description:
      "Stay informed at every stage. From booking confirmation to job completion, receive real-time updates.",
    icon: Radar,
  },
  {
    title: "Verified Service Experts",
    description:
      "All technicians are verified and managed by admin only, ensuring safety, quality, and accountability.",
    icon: UserCheck,
  },
  {
    title: "Business-Ready Backend",
    description:
      "A powerful admin system to manage technicians, assign jobs, and monitor operations in real time.",
    icon: LayoutDashboard,
  },
];

const AboutPreview = () => {
  const router = useRouter();

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            About Medon
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Medon is a technology-driven platform built to simplify electronic
            services through transparency, reliability, and smart management.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div
                className="
                  group relative overflow-hidden h-full
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
                    rounded-2xl
                    bg-primary-light
                    text-primary
                    transition-all duration-300
                    group-hover:bg-primary
                    group-hover:text-white
                    group-hover:shadow-md group-hover:shadow-primary/20
                  "
                >
                  <item.icon size={22} aria-hidden />
                </div>

                <h3 className="relative z-10 text-base font-bold text-primary leading-snug">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-3 text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              router.push("/about");
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "auto",
                });
              }, 0);
            }}
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5
                       rounded-full font-semibold shadow-lg shadow-primary/20
                       hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
          >
            Know More About Medon
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPreview;
