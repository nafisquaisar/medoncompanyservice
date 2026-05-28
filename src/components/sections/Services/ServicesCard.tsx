"use client";

import type { LucideIcon } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesCardProps {
  title: string;
  description: string;
  price: string;
  Icon: LucideIcon;
}

const ServicesCard = ({ title, description, price, Icon }: ServicesCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
          group relative h-full overflow-hidden
          rounded-2xl
          border border-gray-100
          bg-white
          p-6 sm:p-7
          flex flex-col
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-xl hover:shadow-primary/5
          hover:border-primary/10
        "
      >
        {/* CONTENT */}
        <div className="relative z-10 flex flex-col flex-1">
          {/* Icon */}
          <div
            className="
              mb-5 flex h-12 w-12 items-center justify-center
              rounded-2xl bg-primary-light text-primary
              transition-all duration-300
              group-hover:bg-primary group-hover:text-white
              group-hover:shadow-md group-hover:shadow-primary/20
            "
          >
            <Icon size={22} />
          </div>

          <h3 className="text-lg font-bold text-primary leading-snug">
            {title}
          </h3>

          <p className="mt-3 text-gray-500 text-sm whitespace-pre-line leading-relaxed flex-1">
            {description}
          </p>

          {/* PRICE */}
          <div className="mt-5 inline-flex items-baseline gap-1">
            <span className="text-primary font-bold text-lg">{price}</span>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="mt-4 w-full rounded-full bg-primary px-4 py-2.5 text-white text-sm
                       font-semibold shadow-md shadow-primary/20
                       hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
          >
            Book Now
          </motion.button>
        </div>
      </div>

      {/* MODAL */}
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
                Book {title}
              </h4>

              <p className="mt-2 text-gray-500">
                Contact us directly to book this service.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:+91 7303637086"
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

export default ServicesCard;
