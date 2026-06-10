"use client";

import {
  Download,
  UserPlus,
  ClipboardList,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import StepCard from "./StepCard";

const steps = [
  {
    step: 1,
    title: "Download the App",
    description:
      "Download the Medon Company app from the Play Store to get started with reliable electronic services.",
    icon: Download,
  },
  {
    step: 2,
    title: "Sign In or Sign Up",
    description:
      "Create an account or log in securely to manage bookings and track service progress.",
    icon: UserPlus,
  },
  {
    step: 3,
    title: "Book a Service",
    description:
      "Choose the service you need, select a convenient time, and place your booking in seconds.",
    icon: ClipboardList,
  },
  {
    step: 4,
    title: "Service at Your Doorstep",
    description:
      "A verified technician arrives on time and completes the service efficiently.",
    icon: Wrench,
  },
  {
    step: 5,
    title: "Job Completed",
    description:
      "Confirm completion, rate the service, and enjoy a hassle-free experience.",
    icon: CheckCircle,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">Simple Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Simple steps to book, track, and complete electronic repair services with ease.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <StepCard
                step={item.step}
                title={item.title}
                description={item.description}
                Icon={item.icon}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
