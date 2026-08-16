"use client";

import { useState } from "react";
import { Phone, Mail, ArrowRight, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────────
   SERVICE CARD DATA
   Inline SVG illustrations styled as minimal product photography.
   Each SVG is self-contained and renders crisply at any resolution.
───────────────────────────────────────────────────────────────── */
const SERVICE_CARDS = [
  {
    label: "AC Repair",
    id: "hero-card-ac",
    svg: (
      <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* AC unit body */}
        <rect x="10" y="28" width="140" height="54" rx="8" fill="#f0f4f8" stroke="#d1dbe8" strokeWidth="1.5" />
        {/* vents */}
        <rect x="10" y="63" width="140" height="13" rx="0" fill="#dde6ef" />
        {/* vent lines */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <line key={i} x1={16 + i * 14} y1="63" x2={16 + i * 14} y2="76" stroke="#b8c9da" strokeWidth="1" />
        ))}
        {/* display panel */}
        <rect x="105" y="36" width="36" height="18" rx="4" fill="#01395C" opacity="0.85" />
        <circle cx="120" cy="45" r="3" fill="#4ade80" opacity="0.9" />
        <rect x="126" y="42" width="10" height="2" rx="1" fill="#7dd3fc" />
        <rect x="126" y="46" width="7" height="2" rx="1" fill="#7dd3fc" opacity="0.6" />
        {/* logo slot */}
        <rect x="18" y="36" width="60" height="10" rx="3" fill="#e2eaf2" />
        {/* mounting brackets */}
        <rect x="18" y="24" width="12" height="6" rx="2" fill="#c5d5e4" />
        <rect x="130" y="24" width="12" height="6" rx="2" fill="#c5d5e4" />
        {/* airflow flap */}
        <rect x="10" y="76" width="140" height="5" rx="0" fill="#cdd8e4" />
        {/* subtle shadow */}
        <ellipse cx="80" cy="85" rx="65" ry="5" fill="#c5d5e4" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: "Refrigerator Repair",
    id: "hero-card-fridge",
    svg: (
      <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* fridge body */}
        <rect x="18" y="8" width="84" height="144" rx="10" fill="#e8edf2" stroke="#c5d0db" strokeWidth="1.5" />
        {/* freezer door */}
        <rect x="20" y="10" width="80" height="55" rx="8" fill="#dde4ec" />
        {/* freezer handle */}
        <rect x="50" y="20" width="6" height="30" rx="3" fill="#a8b8c8" />
        {/* freezer brand strip */}
        <rect x="30" y="12" width="45" height="5" rx="2" fill="#c5d0db" />
        {/* main door */}
        <rect x="20" y="70" width="80" height="80" rx="8" fill="#dde4ec" />
        {/* main handle */}
        <rect x="50" y="85" width="6" height="45" rx="3" fill="#a8b8c8" />
        {/* water dispenser */}
        <rect x="25" y="90" width="18" height="22" rx="4" fill="#c8d5e0" />
        <rect x="29" y="96" width="10" height="10" rx="2" fill="#b0c0d0" />
        <circle cx="34" cy="118" r="3" fill="#90a8b8" />
        {/* hinge */}
        <circle cx="92" cy="68" r="4" fill="#b0bec8" />
        {/* feet */}
        <rect x="28" y="148" width="12" height="4" rx="2" fill="#b0bec8" />
        <rect x="80" y="148" width="12" height="4" rx="2" fill="#b0bec8" />
        {/* shadow */}
        <ellipse cx="60" cy="155" rx="42" ry="4" fill="#c5d0db" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: "Washing Machine Repair",
    id: "hero-card-washer",
    svg: (
      <svg viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* body */}
        <rect x="10" y="10" width="120" height="140" rx="12" fill="#3d4a58" stroke="#2c3640" strokeWidth="1.5" />
        {/* front panel top */}
        <rect x="10" y="10" width="120" height="28" rx="12" fill="#2c3640" />
        {/* controls */}
        <rect x="18" y="18" width="40" height="12" rx="4" fill="#1a2530" />
        <circle cx="100" cy="24" r="8" fill="#1a2530" stroke="#4a5a6a" strokeWidth="1" />
        <circle cx="100" cy="24" r="3" fill="#7dd3fc" />
        {/* door circle */}
        <circle cx="70" cy="95" r="46" fill="#2c3640" />
        <circle cx="70" cy="95" r="42" fill="#1a2530" stroke="#4a5a6a" strokeWidth="1.5" />
        <circle cx="70" cy="95" r="36" fill="#243040" />
        {/* glass reflection */}
        <circle cx="70" cy="95" r="32" fill="#0f1820" opacity="0.9" />
        <path d="M50 75 Q60 68 78 72" stroke="#7dd3fc" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />
        <path d="M45 82 Q58 74 80 78" stroke="#7dd3fc" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" />
        {/* drum ribs */}
        <circle cx="70" cy="95" r="20" fill="none" stroke="#2c3640" strokeWidth="1.5" strokeDasharray="4 4" />
        {/* door handle */}
        <path d="M108 88 Q116 95 108 102" stroke="#4a5a6a" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* footer */}
        <rect x="10" y="140" width="120" height="10" rx="6" fill="#243040" />
        {/* feet */}
        <rect x="22" y="148" width="14" height="5" rx="3" fill="#1a2530" />
        <rect x="104" y="148" width="14" height="5" rx="3" fill="#1a2530" />
        {/* shadow */}
        <ellipse cx="70" cy="156" rx="55" ry="4" fill="#2c3640" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "Geyser Repair",
    id: "hero-card-geyser",
    svg: (
      <svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* tank body */}
        <rect x="20" y="20" width="60" height="108" rx="30" fill="#f0f4f8" stroke="#d1dbe8" strokeWidth="1.5" />
        {/* brand band */}
        <rect x="20" y="50" width="60" height="16" rx="0" fill="#e2eaf2" />
        {/* indicator light */}
        <circle cx="50" cy="58" r="5" fill="#f59e0b" opacity="0.9" />
        <circle cx="50" cy="58" r="2.5" fill="#fbbf24" />
        {/* thermostat knob */}
        <circle cx="50" cy="82" r="10" fill="#dde6ef" stroke="#c5d0db" strokeWidth="1.5" />
        <circle cx="50" cy="82" r="4" fill="#b0c0d0" />
        <line x1="50" y1="72" x2="50" y2="76" stroke="#8898a8" strokeWidth="1.5" strokeLinecap="round" />
        {/* top cap */}
        <ellipse cx="50" cy="20" rx="30" ry="8" fill="#dde6ef" stroke="#c5d0db" strokeWidth="1" />
        {/* bottom cap */}
        <ellipse cx="50" cy="128" rx="30" ry="8" fill="#dde6ef" stroke="#c5d0db" strokeWidth="1" />
        {/* pipes */}
        <rect x="30" y="8" width="8" height="14" rx="4" fill="#c5d0db" />
        <rect x="62" y="8" width="8" height="14" rx="4" fill="#c5d0db" />
        <rect x="26" y="128" width="8" height="18" rx="4" fill="#c5d0db" />
        {/* wall bracket */}
        <rect x="42" y="6" width="16" height="5" rx="2.5" fill="#b0bec8" />
        {/* shadow */}
        <ellipse cx="50" cy="148" rx="30" ry="4" fill="#c5d0db" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: "Microwave Repair",
    id: "hero-card-microwave",
    svg: (
      <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* body */}
        <rect x="8" y="18" width="164" height="84" rx="8" fill="#1a1a2e" stroke="#2d2d45" strokeWidth="1.5" />
        {/* door frame */}
        <rect x="12" y="22" width="112" height="76" rx="6" fill="#12121e" />
        {/* door glass */}
        <rect x="16" y="26" width="104" height="68" rx="4" fill="#0d1018" />
        {/* glass reflection */}
        <rect x="18" y="28" width="40" height="8" rx="2" fill="#1e2535" opacity="0.6" />
        {/* turntable */}
        <circle cx="68" cy="60" r="28" fill="#111520" stroke="#1e2535" strokeWidth="1" />
        <circle cx="68" cy="60" r="18" fill="#0d1018" stroke="#1a2030" strokeWidth="0.8" />
        <circle cx="68" cy="60" r="4" fill="#1e2535" />
        {/* control panel */}
        <rect x="130" y="22" width="38" height="76" rx="4" fill="#13131f" />
        {/* display */}
        <rect x="133" y="26" width="32" height="20" rx="3" fill="#0a1a0a" />
        <text x="137" y="39" fontSize="8" fill="#4ade80" fontFamily="monospace">12:00</text>
        {/* buttons grid */}
        {[0, 1, 2].map(row => [0, 1, 2].map(col => (
          <rect key={`${row}-${col}`} x={134 + col * 10} y={52 + row * 10} width="8" height="8" rx="2" fill="#1e2535" />
        )))}
        <rect x="134" y="84" width="28" height="8" rx="2" fill="#01395C" opacity="0.8" />
        {/* door handle */}
        <rect x="118" y="42" width="5" height="36" rx="2.5" fill="#2d3545" />
        {/* shadow */}
        <ellipse cx="90" cy="104" rx="72" ry="5" fill="#1a1a2e" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "Electrical Repair",
    id: "hero-card-electrical",
    svg: (
      <svg viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* cabinet */}
        <rect x="15" y="10" width="110" height="140" rx="6" fill="#e8edf2" stroke="#c5d0db" strokeWidth="1.5" />
        {/* door open effect - inner back */}
        <rect x="18" y="13" width="104" height="134" rx="4" fill="#dde4ec" />
        {/* DIN rail */}
        <rect x="25" y="28" width="90" height="4" rx="2" fill="#b0bec8" />
        <rect x="25" y="72" width="90" height="4" rx="2" fill="#b0bec8" />
        <rect x="25" y="116" width="90" height="4" rx="2" fill="#b0bec8" />
        {/* Main breaker */}
        <rect x="28" y="16" width="28" height="14" rx="3" fill="#2c3640" />
        <rect x="31" y="19" width="22" height="8" rx="2" fill="#1a2530" />
        <rect x="38" y="21" width="8" height="4" rx="1" fill="#ef4444" />
        {/* breakers row 1 */}
        {[0, 1, 2, 3, 4].map(i => (
          <g key={`r1-${i}`}>
            <rect x={28 + i * 17} y="34" width="14" height="36" rx="3" fill="#2c3640" />
            <rect x={30 + i * 17} y="36" width="10" height="8" rx="2" fill="#1a2530" />
            <rect x={32 + i * 17} y="38" width="6" height="4" rx="1" fill={i % 2 === 0 ? "#4ade80" : "#f59e0b"} opacity="0.9" />
            <rect x={33 + i * 17} y="48" width="4" height="18" rx="2" fill="#3d4a58" />
          </g>
        ))}
        {/* breakers row 2 */}
        {[0, 1, 2, 3, 4].map(i => (
          <g key={`r2-${i}`}>
            <rect x={28 + i * 17} y="78" width="14" height="36" rx="3" fill="#2c3640" />
            <rect x={30 + i * 17} y="80" width="10" height="8" rx="2" fill="#1a2530" />
            <rect x={32 + i * 17} y="82" width="6" height="4" rx="1" fill={i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#4ade80" : "#7dd3fc"} opacity="0.9" />
            <rect x={33 + i * 17} y="92" width="4" height="18" rx="2" fill="#3d4a58" />
          </g>
        ))}
        {/* wiring bundle */}
        <path d="M45 70 Q50 75 45 82" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M62 70 Q67 75 62 82" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M79 70 Q84 75 79 82" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* ground bar */}
        <rect x="25" y="124" width="90" height="8" rx="3" fill="#b0bec8" />
        {[0, 1, 2, 3, 4, 5].map(i => (
          <rect key={i} x={30 + i * 14} y="126" width="4" height="4" rx="1" fill="#8898a8" />
        ))}
        {/* label strip */}
        <rect x="25" y="136" width="90" height="8" rx="2" fill="#f0f4f8" />
        {/* shadow */}
        <ellipse cx="70" cy="153" rx="50" ry="4" fill="#c5d0db" opacity="0.4" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

/* ─────────────────────────────────────────────────────────────────
   HERO COMPONENT
───────────────────────────────────────────────────────────────── */
const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleScrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative bg-white overflow-hidden">
        {/* Subtle top gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6F9FC] via-white to-white pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-4 items-center">

            {/* ── LEFT COLUMN ─────────────────────────────────── */}
            <div className="flex flex-col">

              {/* Trust badge */}
              <motion.span
                className="inline-flex self-start items-center gap-1.5 mb-5 px-4 py-1.5
                           bg-[#01395C]/8 text-[#01395C] text-[11px] font-semibold
                           tracking-widest uppercase rounded-full border border-[#01395C]/12"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] inline-block" />
                Based in Mahipalpur — Trusted by 20,000+ Customers
              </motion.span>

              {/* H1 */}
              <motion.h1
                className="text-[2.1rem] sm:text-[2.6rem] lg:text-[2.85rem] font-extrabold
                           text-[#01395C] leading-[1.13] tracking-tight mb-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.6 }}
              >
                Expert AC &amp; Appliance Repair{" "}
                <span className="text-[#01395C]/55 font-bold">
                  in Mahipalpur
                </span>
              </motion.h1>

              {/* ── SERVICE CARDS 3×2 ───────────────────────── */}
              <motion.div
                className="grid grid-cols-3 gap-2 mb-6 max-w-[320px]"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {SERVICE_CARDS.map((card) => (
                  <motion.div
                    key={card.id}
                    id={card.id}
                    variants={cardVariants}
                    whileHover={{ y: -2, boxShadow: "0 4px 14px rgba(1,57,92,0.11)" }}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm
                               flex flex-col items-center justify-between
                               p-2 cursor-default select-none"
                  >
                    {/* Appliance illustration */}
                    <div className="w-full aspect-[3/2] flex items-center justify-center">
                      {card.svg}
                    </div>
                    {/* Label */}
                    <p className="mt-0.5 text-center text-[9px] font-semibold
                                  text-[#01395C] leading-tight">
                      {card.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* ── CTA BUTTONS ─────────────────────────────── */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <motion.button
                  id="hero-cta-book"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleScrollToServices}
                  className="group bg-[#01395C] text-white px-7 py-3.5 rounded-full
                             font-semibold shadow-lg shadow-[#01395C]/25
                             hover:bg-[#012B47] hover:shadow-xl hover:shadow-[#01395C]/30
                             transition-all duration-300 flex items-center justify-center gap-2
                             text-[15px]"
                >
                  <CalendarCheck size={16} />
                  Book a Service
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </motion.button>

                <motion.button
                  id="hero-cta-call"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpen(true)}
                  className="border-2 border-[#01395C]/20 text-[#01395C] px-7 py-3.5
                             rounded-full font-semibold bg-white
                             hover:border-[#01395C] hover:bg-[#E8F4FB]/60
                             transition-all duration-300 flex items-center justify-center gap-2
                             text-[15px]"
                >
                  <Phone size={15} />
                  Call Now
                </motion.button>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN — Hero composite image ─────────── */}
            <motion.div
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            >
              <div className="relative w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[520px]">
                <Image
                  src="/img/hero/rightbanner.png"
                  alt="Medon Company technician with folded arms surrounded by AC, refrigerator, washing machine, microwave, geyser and electrical panel"
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, 520px"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CONTACT MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40
                       backdrop-blur-sm px-4"
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
              <h4 className="text-xl font-bold text-[#01395C]">
                Contact Medon Company
              </h4>
              <p className="mt-2 text-gray-500">
                Call or email us to book a service instantly.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:+917303637086"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full
                             bg-[#01395C] px-4 py-3 text-white font-medium
                             shadow-md shadow-[#01395C]/20 hover:bg-[#012B47]
                             transition-all duration-300"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href="mailto:Medoncompany@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full
                             border-2 border-[#01395C]/20 text-[#01395C] px-4 py-3
                             font-medium hover:bg-[#E8F4FB]/50
                             transition-all duration-300"
                >
                  <Mail size={16} /> Email
                </a>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-5 w-full text-sm text-gray-400 hover:text-gray-600
                           transition-colors"
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
