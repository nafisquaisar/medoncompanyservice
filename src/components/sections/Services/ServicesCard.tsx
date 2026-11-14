"use client";

import type { LucideIcon } from "lucide-react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesCardProps {
  title: string;
  description: string;
  price: string;
  Icon: LucideIcon;
}

const PHONE = "+917303637086";
const EMAIL = "Medoncompany@gmail.com";

function buildWhatsAppUrl(serviceTitle: string) {
  const msg = `Hi Medon Company, I need *${serviceTitle}*. Please share details and availability.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
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
              {/* Header */}
              <div className="text-center mb-6">
                <div className="mx-auto mb-3 h-14 w-14 rounded-2xl bg-primary-light flex items-center justify-center">
                  <Icon size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary">
                  Book {title}
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Choose how you&apos;d like to book this service.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                {/* Call */}
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2.5
                             w-full py-3.5 rounded-full
                             bg-primary text-white font-semibold text-sm
                             shadow-md shadow-primary/20
                             hover:bg-primary-dark hover:shadow-lg
                             transition-all duration-300"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                {/* WhatsApp */}
                <a
                  href={buildWhatsAppUrl(title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5
                             w-full py-3.5 rounded-full
                             bg-[#25D366] text-white font-semibold text-sm
                             shadow-md shadow-[#25D366]/20
                             hover:bg-[#22c55e] hover:shadow-lg
                             transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Booking: ${title}`)}&body=${encodeURIComponent(`Hi Medon Company,\n\nI need ${title}. Please share details and availability.\n\nThank you.`)}`}
                  className="flex items-center justify-center gap-2.5
                             w-full py-3.5 rounded-full
                             border-2 border-gray-200 text-gray-700 font-semibold text-sm
                             hover:border-primary/30 hover:text-primary hover:bg-primary-light/30
                             transition-all duration-300"
                >
                  <Mail size={18} />
                  Email
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
