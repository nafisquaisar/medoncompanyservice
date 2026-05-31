"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import GoogleMap from "@/components/common/GoogleMap/GoogleMap";

/* ── Footer link data ────────────────────────────── */
const SERVICE_LINKS = [
  { label: "AC Repair Service in Delhi", path: "/ac-repair-service-delhi" },
  { label: "AC Installation in Delhi", path: "/ac-installation-delhi" },
  { label: "AC Gas Refilling in Delhi", path: "/ac-gas-refilling-delhi" },
  { label: "Refrigerator Repair in Delhi", path: "/refrigerator-repair-delhi" },
  { label: "Electrical Services in Delhi", path: "/electrical-services-delhi" },
  { label: "Geyser Repair in Delhi", path: "/geyser-repair-delhi" },
  { label: "Microwave Repair in Delhi", path: "/microwave-repair-delhi" },
];

const LOCATION_LINKS = [
  { label: "Appliance Repair in Mahipalpur", path: "/mahipalpur" },
  { label: "AC Service in Vasant Kunj", path: "/vasant-kunj" },
  { label: "Appliance Repair in South Delhi", path: "/south-delhi" },
  { label: "Repair Services Near Delhi Airport", path: "/delhi-airport-area" },
];

const BLOG_LINKS = [
  { label: "Why AC Is Not Cooling Properly", path: "/blog/why-ac-is-not-cooling-properly" },
  { label: "Signs of AC Gas Leakage", path: "/blog/signs-of-ac-gas-leakage" },
  { label: "Best Time for AC Servicing", path: "/blog/best-time-for-ac-servicing-in-delhi" },
  { label: "Refrigerator Not Cooling?", path: "/blog/refrigerator-not-cooling-common-reasons" },
  { label: "How Often to Service Your AC", path: "/blog/how-often-should-you-service-your-ac" },
];

const QUICK_LINKS = [
  { label: "About Medon Company", path: "/about" },
  { label: "Our Work Gallery", path: "/gallery" },
  { label: "All Services", path: "/services" },
  { label: "Blog & Guides", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
  { label: "Refund Policy", path: "/refund-policy" },
  { label: "Cancellation Policy", path: "/cancellation-policy" },
];

/* ── Reusable footer link list ───────────────────── */
function FooterLinkList({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ── Footer component ────────────────────────────── */
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20
                   grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-6"
      >

        {/* Brand + NAP */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <h3 className="text-2xl font-bold tracking-tight">Medon Company</h3>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Delhi NCR&apos;s trusted appliance repair service provider. Expert AC repair,
            refrigerator service, electrical work &amp; geyser repair in Mahipalpur,
            Vasant Kunj, Aerocity, Dwarka, Saket, Hauz Khas &amp; South Delhi.
            Verified technicians with 90-day warranty on all repairs.
          </p>

          {/* NAP Block */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 text-white/70 text-sm" itemScope itemType="https://schema.org/PostalAddress">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span itemProp="streetAddress">
                Medon Company, Shop No L-3, Street No 1, L Block, Mahipalpur Village, New Delhi 110037
              </span>
            </div>
            <a href="tel:+917303637086" className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors">
              <Phone size={14} className="flex-shrink-0" />
              <span>+91 7303637086</span>
            </a>
            <a href="mailto:Medoncompany@gmail.com" className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors">
              <Mail size={14} className="flex-shrink-0" />
              <span>Medoncompany@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* Services */}
        <FooterLinkList title="Services" links={SERVICE_LINKS} />

        {/* Locations */}
        <FooterLinkList title="Locations" links={LOCATION_LINKS} />

        {/* Blog */}
        <FooterLinkList title="Blog & Guides" links={BLOG_LINKS} />

        {/* Quick Links */}
        <FooterLinkList title="Quick Links" links={QUICK_LINKS} />

      </motion.div>

      {/* Google Map embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <GoogleMap compact className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Medon Company. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/refund-policy" className="hover:text-white/60 transition-colors">Refunds</Link>
          </div>
          <span>Built by NF Nexa Tech in India 🇮🇳</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
