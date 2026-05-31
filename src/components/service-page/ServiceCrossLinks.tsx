"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getCrossLinks } from "@/data/services";
import { ICON_MAP } from "./ServiceIconMap";

interface ServiceCrossLinksProps {
  currentSlug: string;
}

export default function ServiceCrossLinks({ currentSlug }: ServiceCrossLinksProps) {
  const links = getCrossLinks(currentSlug);

  return (
    <section className="py-16 sm:py-20 bg-secondary" aria-label="Other services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Explore More
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Other Services
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, i) => {
            const LinkIcon = ICON_MAP[link.icon];
            return (
            <motion.div
              key={link.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${link.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white
                           p-4 sm:p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5
                           hover:border-primary/10 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-primary-light text-primary flex items-center justify-center
                               group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <LinkIcon size={18} />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                  {link.title}
                </span>
              </Link>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
