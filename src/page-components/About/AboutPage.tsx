"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const AboutPage = () => {
  return (
    <div className="pt-1">

{/* ================= PREMIUM ABOUT HERO ================= */}
<section className="relative bg-gradient-to-br from-primary/5 via-white to-primary/10 py-10">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="text-sm uppercase tracking-widest text-primary font-semibold">
        About Medon Company
      </p>

      <h1 className="mt-6 text-5xl font-bold text-primary leading-tight">
        Engineering Trust in Electronic Services
      </h1>

      <p className="mt-8 text-gray-700 text-lg leading-relaxed text-justify">
        Medon Company was founded to introduce structure, accountability,
        and operational transparency into an industry traditionally
        marked by inconsistency. We identified the critical gap between
        customers and service professionals and built a centralized,
        technology-supervised ecosystem to bridge that divide.
      </p>

      <p className="mt-6 text-gray-700 leading-relaxed text-justify">
        Our fully managed operational framework integrates technician
        verification, inspection protocols, live workflow tracking,
        and performance monitoring into a single streamlined system.
        Every service request follows defined standards —
        ensuring reliability, measurable quality, and long-term trust.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-semibold text-primary">
            Admin Controlled
          </h4>
          <p className="text-gray-600 text-sm mt-1">
            Verified technician network
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-primary">
            Technology Driven
          </h4>
          <p className="text-gray-600 text-sm mt-1">
            Structured execution framework
          </p>
        </div>
      </div>
    </motion.div>

    {/* RIGHT IMAGE + CARD */}
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <div className="rounded-2xl overflow-hidden shadow-xl relative h-[450px]">
        <Image
          src="/img/webbanner.png"
          alt="Medon Company professional operations and service team"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute -bottom-10 -left-10 bg-white shadow-xl rounded-2xl p-8 w-80 border"
      >
        <h3 className="text-lg font-semibold text-primary">
          Our Commitment
        </h3>

        <ul className="mt-4 space-y-3 text-sm text-gray-600">
          <li>• Verified managed technicians</li>
          <li>• Transparent pricing system</li>
          <li>• Real-time monitoring</li>
          <li>• Quality accountability standards</li>
        </ul>
      </motion.div>

    </motion.div>

  </div>
</section>



{/* ================= MISSION ================= */}
<section className="py-32 bg-white relative overflow-hidden">
  
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Heading */}
    <motion.div
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="text-sm font-semibold tracking-widest text-primary uppercase">
        Our Mission
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
        Setting a New Standard in Electronic Service Excellence
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        We are building India&apos;s most structured and professionally managed 
        electronic service platform by integrating intelligent technology, 
        centralized operational control, and rigorously verified service professionals.
      </p>
    </motion.div>

    {/* Mission Content Grid */}
    <div className="mt-20 grid md:grid-cols-2 gap-14 items-center">

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 leading-relaxed text-lg">
          Medon Company exists to eliminate inconsistency, opacity, and operational 
          fragmentation within the electronic services ecosystem. 
          Our platform introduces accountability, workflow supervision, 
          and measurable service standards at every level.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          By combining structured field execution with real-time monitoring 
          and centralized control, we ensure predictable service outcomes, 
          pricing transparency, and long-term customer trust.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl"
      >
        <h3 className="text-xl font-semibold text-primary mb-6">
          Our Strategic Focus
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-primary"></span>
            Technology-supervised service lifecycle
          </li>

          <li className="flex items-start gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-primary"></span>
            Admin-controlled technician network
          </li>

          <li className="flex items-start gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-primary"></span>
            Transparent pricing and inspection protocols
          </li>

          <li className="flex items-start gap-3">
            <span className="h-2 w-2 mt-2 rounded-full bg-primary"></span>
            Performance monitoring & accountability systems
          </li>
        </ul>
      </motion.div>

    </div>

  </div>
</section>





{/* ================= PROBLEM & SOLUTION ================= */}
<section className="py-5 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-primary">
        The Industry Problem
      </h3>

      <ul className="mt-6 space-y-4 text-gray-600 list-disc list-inside">
        <li>Unverified and unregulated service providers</li>
        <li>Hidden charges and unclear inspection pricing</li>
        <li>Delayed response times and poor accountability</li>
        <li>No structured system for customer transparency</li>
      </ul>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-primary">
        The Medon Company Solution
      </h3>

      <ul className="mt-6 space-y-4 text-gray-600 list-disc list-inside">
        <li>Admin-controlled onboarding & verification</li>
        <li>Transparent inspection and service pricing</li>
        <li>Real-time job tracking and structured workflow</li>
        <li>Technology-backed accountability systems</li>
      </ul>
    </motion.div>

  </div>
</section>









     {/* ================= COMPANY STATS ================= */}
<section className="py-24">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

    {[
      { value: "5000+", label: "Services Completed" },
      { value: "300+", label: "Verified Technicians" },
      { value: "98%", label: "Customer Satisfaction" },
      { value: "24 hrs", label: "Average Response Time" },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-primary">
          {item.value}
        </h3>
        <p className="mt-2 text-gray-600">
          {item.label}
        </p>
      </motion.div>
    ))}

  </div>
</section>




{/* ================= LEADERSHIP ================= */}
<section className="py-10 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <motion.h2
      className="text-3xl font-bold text-primary"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Leadership
    </motion.h2>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Founder Card */}
      <motion.div
        className="rounded-2xl bg-white border p-10 shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mx-auto h-28 w-28 rounded-full overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/employee/founder.jpg"
            alt="Founder & CEO of Medon Company"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.h3
          className="mt-6 text-xl font-semibold text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Founder &amp; CEO
        </motion.h3>

        <motion.p
          className="mt-2 text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Medon Company
        </motion.p>

        <motion.p
          className="mt-6 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Our leadership is committed to building scalable systems,
          enforcing operational discipline, and maintaining the highest
          standards of service reliability and customer trust.
        </motion.p>
      </motion.div>

      {/* Co-Founder Card */}
      <motion.div
        className="rounded-2xl bg-white border p-10 shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mx-auto h-28 w-28 rounded-full overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <Image
            src="/employee/co-founder.jpg"
            alt="Nafis Quaisar - Co-Founder of Medon Company"
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.h3
          className="mt-6 text-xl font-semibold text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true }}
        >
          Nafis Quaisar
        </motion.h3>

        <motion.p
          className="mt-2 text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          viewport={{ once: true }}
        >
          Co-Founder
        </motion.p>

        <motion.p
          className="mt-6 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          viewport={{ once: true }}
        >
          Driving technology, digital strategy, and customer experience
          innovation to ensure Medon Company stays ahead in delivering
          fast, reliable, and transparent appliance repair services.
        </motion.p>
      </motion.div>
    </div>

  </div>
</section>




      {/* ================= CORE VALUES ================= */}
<section className="py-24">
  <div className="max-w-6xl mx-auto px-6">

    <motion.h2
      className="text-3xl font-bold text-primary text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Core Values
    </motion.h2>

    <div className="mt-14 grid md:grid-cols-4 gap-8 text-center">

      {[
        "Integrity",
        "Transparency",
        "Accountability",
        "Customer First"
      ].map((value, index) => (
        <motion.div
          key={index}
          className="rounded-xl border bg-primary/5 p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-primary">
            {value}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>



{/* ================= FINAL CTA ================= */}
<section className="py-32 bg-gradient-to-br from-secondary to-primary-light relative overflow-hidden">

  {/* Decorative blur shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <motion.span
      className="text-sm uppercase tracking-widest text-primary/70"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Get Started With Medon Company
    </motion.span>

    <motion.h2
      className="mt-6 text-4xl md:text-5xl font-bold text-primary leading-tight"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Structured. Transparent. Professionally Managed.
    </motion.h2>

    <motion.p
      className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Experience technology-driven electronic service operations designed
      for accountability, verified technicians, and consistent delivery standards.
      Medon Company ensures clarity at every step — from booking to completion.
    </motion.p>

    <motion.div
      className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const section = document.getElementById("services");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-primary text-white px-10 py-4 rounded-2xl font-semibold shadow-md hover:shadow-xl transition-all duration-300"
      >
        Book a Service
      </motion.button>

      <motion.a
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+917303637086"
        className="border border-primary text-primary px-10 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
      >
        Call Now
      </motion.a>

    </motion.div>

  </div>

</section>



    </div>
  );
};

export default AboutPage;
