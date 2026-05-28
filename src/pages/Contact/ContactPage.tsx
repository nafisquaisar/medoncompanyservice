"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/sections/Contact/ContactForm";

const Contact = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">Reach Out</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Have a question, need assistance, or want to know more about
            Medon&apos;s services? Our team is ready to help.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">

          {/* LEFT – CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Phone, label: "+91 7303637086" },
              { icon: Mail, label: "Medoncompany@gmail.com" },
              {
                icon: MapPin,
                label:
                  "Shop No, L-3, Street Number 1, L block, Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100
                           hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="h-11 w-11 flex-shrink-0 flex items-center justify-center rounded-xl
                               bg-primary-light text-primary">
                  <item.icon size={20} />
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed pt-0.5">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT – FORM CARD */}
          <motion.div
            className="rounded-3xl border border-gray-100 bg-white p-7 sm:p-9 shadow-lg shadow-black/[0.03]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-primary mb-6">
              Send us a message
            </h3>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
