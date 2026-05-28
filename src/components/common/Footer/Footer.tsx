"use client";

import FooterLinks from "./FooterLinks";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-primary text-white"
      aria-label="Site footer"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4"
      >

        {/* Brand */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <h3 className="text-2xl font-bold tracking-tight">Medon</h3>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Top-Rated AC Installation and Repair Services in Mahipalpur & Vasant Kunj.
            Our verified professionals ensure your comfort is never compromised.
          </p>

          {/* Contact info in footer */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <Phone size={14} />
              <span>+91 7303637086</span>
            </div>
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <Mail size={14} />
              <span>Medoncompany@gmail.com</span>
            </div>
            <div className="flex items-start gap-3 text-white/50 text-sm">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span>Mahipalpur, New Delhi, 110037</span>
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FooterLinks
            title="Services"
            links={[
              { label: "AC Repair", type: "scroll", id: "services" },
              { label: "Refrigerator Repair", type: "scroll", id: "services" },
              { label: "Washing Machine Repair", type: "scroll", id: "services" },
              { label: "Electrical Services", type: "scroll", id: "services" },
            ]}
          />
        </motion.div>

        {/* Company */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FooterLinks
            title="Company"
            links={[
              { label: "About Us", type: "route", path: "/about" },
              { label: "How It Works", type: "scroll", id: "how-it-works" },
              { label: "Careers", type: "route", path: "/careers" },
              { label: "Contact", type: "scroll", id: "contact" },
            ]}
          />
        </motion.div>

        {/* Support */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FooterLinks
            title="Support"
            links={[
              { label: "Help Center", type: "route", path: "/help" },
              { label: "Privacy Policy", type: "route", path: "/privacy" },
              { label: "Terms & Conditions", type: "route", path: "/terms" },
            ]}
          />
        </motion.div>

      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Medon Company. All rights reserved.</span>
          <span>Built by NF Nexa Tech in India 🇮🇳</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
