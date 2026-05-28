"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Flame,
  Snowflake,
  Microwave,
  Refrigerator,
} from "lucide-react";

import ServicesCard from "@/components/sections/Services/ServicesCard";

const services = [
   {
    title: "Air Conditioner Services",
    description:
      "• AC servicing (Split & Window)\n• Installation & uninstallation\n• Cooling performance diagnosis\n• Gas leakage inspection\n• Indoor & outdoor unit cleaning",
    price: "Starting from ₹499",
    icon: Snowflake,
  },
   {
    title: "Refrigerator Repair & Service",
    description:
      "• Refrigerator & freezer repair\n• All models support (single to side-by-side)\n• Cooling & gas leakage diagnosis\n• Compressor & sensor inspection",
    price: "Inspection ₹199 | Minor ₹199+ | Major after diagnosis",
    icon: Refrigerator,
  },
  {
    title: "Electrical Services",
    description:
      "• Electrical wiring & fittings\n• Switchboard repair\n• MCB & fuse replacement\n• Short circuit troubleshooting\n• Fan, light & socket installation\n• Earthing & power fluctuation checks",
    price: "Starting from ₹199",
    icon: Zap,
  },
  {
    title: "Geyser Services",
    description:
      "• Geyser repair\n• New geyser installation\n• Heating issue resolution\n• Leakage & thermostat repair\n• Safety valve & pressure issue check\n• Wiring & power supply inspection",
    price: "Starting from ₹300",
    icon: Flame,
  },
  {
    title: "Microwave Services",
    description:
      "• Microwave repair\n• Heating issue resolution\n• Control panel repair\n• Installation support\n• Door switch & safety lock check\n• Turntable & internal component inspection\n• Power supply issue",
    price: "Starting from ₹300",
    icon: Microwave,
  },
 
];

const Services = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="mb-14 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">What We Offer</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Professional appliance repair services with transparent pricing and verified technicians.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="grid gap-6 sm:gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <ServicesCard
                title={service.title}
                description={service.description}
                price={service.price}
                Icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default Services;
