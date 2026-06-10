"use client";

import { useState } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleScrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-secondary via-white to-primary-light/30 py-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Subtle decorative blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Based in Mahipalpur — Trusted by 5,000+ Delhi NCR Customers
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-[1.15] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Expert AC & Appliance Repair{" "}
              <span className="text-primary-dark/70">
                in Mahipalpur &amp; Delhi NCR
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Medon Company provides professional AC repair, refrigerator service, electrical work &amp; geyser repair across Delhi NCR — serving Mahipalpur, Vasant Kunj, Aerocity, Dwarka, Saket, Hauz Khas &amp; South Delhi. Verified technicians, same-day service, transparent pricing.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToServices}
                className="group bg-primary text-white px-7 py-3.5 rounded-full font-semibold
                           shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl
                           hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book a Service
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpen(true)}
                className="border-2 border-primary/20 text-primary px-7 py-3.5 rounded-full font-semibold
                           bg-white hover:border-primary hover:bg-primary-light/40
                           transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-full max-w-lg h-72 sm:h-80 lg:h-[400px] rounded-3xl overflow-hidden
                            shadow-2xl shadow-primary/10 ring-1 ring-black/5 relative">
              <Image
                src="/img/webbanner.png"
                alt="Medon Company technician performing professional AC repair service"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-xl font-bold text-primary">
                Contact Medon Company
              </h4>

              <p className="mt-2 text-gray-500">
                Call or email us to book a service instantly.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:+917303637086"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary
                             px-4 py-3 text-white font-medium shadow-md shadow-primary/20
                             hover:bg-primary-dark transition-all duration-300"
                >
                  <Phone size={16} /> Call
                </a>

                <a
                  href="mailto:Medoncompany@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full border-2
                             border-primary/20 text-primary px-4 py-3 font-medium
                             hover:bg-primary-light/50 transition-all duration-300"
                >
                  <Mail size={16} /> Email
                </a>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-5 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
