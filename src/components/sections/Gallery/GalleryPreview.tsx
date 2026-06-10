"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const previewImages = [
  "/img/galleryphoto/img1.png",
  "/img/galleryphoto/img2.png",
  "/img/galleryphoto/img3.png",
];

const GalleryPreview = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">Our Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Work Gallery
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A glimpse of our professional electronic repair and service work.
          </p>
        </motion.div>

        {/* Preview Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {previewImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <div
                className="group relative overflow-hidden rounded-2xl bg-white
                           ring-1 ring-black/5
                           transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src={img}
                    alt={`Professional appliance repair work by Medon Company – photo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 sm:mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-primary
                         px-8 py-3.5 text-white font-semibold shadow-lg shadow-primary/20
                         hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
            >
              View Full Gallery
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default GalleryPreview;
