"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/img/galleryphoto/img1.png", alt: "Medon technician servicing a split AC unit" },
  { src: "/img/galleryphoto/img2.png", alt: "Professional refrigerator repair by Medon" },
  { src: "/img/galleryphoto/img3.png", alt: "Electrical wiring installation service" },
  { src: "/img/galleryphoto/img4.png", alt: "AC deep cleaning and gas refilling" },
  { src: "/img/galleryphoto/img5.png", alt: "Geyser installation and safety check" },
  { src: "/img/galleryphoto/img6.png", alt: "Window AC servicing and maintenance" },
  { src: "/img/galleryphoto/img7.png", alt: "Microwave oven repair service" },
  { src: "/img/galleryphoto/img8.png", alt: "Completed AC installation at customer home" },
];

const GallerySection = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary" aria-label="Service work gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">Our Portfolio</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Work Gallery
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A glimpse of our professional electronic repair and service work.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3" role="list">
          {images.map((img, index) => (
            <motion.div
              key={index}
              role="listitem"
              className="
                group relative overflow-hidden rounded-2xl bg-white
                ring-1 ring-black/5
                transition-all duration-500
                hover:shadow-xl hover:shadow-primary/5
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56 sm:h-64 w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
