"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LocalService } from "@/data/locations";

interface LocationServicesProps {
  services: LocalService[];
  locationName: string;
}

export default function LocationServices({ services, locationName }: LocationServicesProps) {
  return (
    <section className="py-20 sm:py-24 bg-secondary" aria-label={`Services available in ${locationName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Available Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Services in {locationName}
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            All of our professional repair and maintenance services are available
            in {locationName} with fast response times.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${svc.slug}`}
                className="group block h-full rounded-2xl border border-gray-100 bg-white p-6 sm:p-7
                           hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                           hover:border-primary/10 transition-all duration-300"
              >
                <h3 className="font-bold text-primary text-base group-hover:text-primary-dark transition-colors">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {svc.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary/70
                               group-hover:text-primary group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
