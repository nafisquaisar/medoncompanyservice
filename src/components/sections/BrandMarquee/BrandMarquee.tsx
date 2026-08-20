"use client";

import Image from "next/image";
import styles from "./BrandMarquee.module.css";

const BRANDS = [
  { name: "Samsung", logo: "/companylogo/samsung.png" },
  { name: "LG", logo: "/companylogo/lg.png" },
  { name: "Whirlpool", logo: "/companylogo/whirlpool.png" },
  { name: "Voltas", logo: "/companylogo/voltas.png" },
  { name: "Godrej", logo: "/companylogo/godrej.png" },
  { name: "Haier", logo: "/companylogo/haier.png" },
  { name: "Bluestar", logo: "/companylogo/bluestar.png" },
  { name: "Videocon", logo: "/companylogo/videocon.png" },
];

export default function BrandMarquee() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#F59E0B]">
          Brands We Service
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#01395C]">
          We Repair All Major Brands
        </h2>
        <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
          Expert repair and service for all leading appliance brands — genuine parts, certified technicians.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <div className={styles.marqueeTrack}>
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center
                         w-[120px] h-[70px] transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} appliance repair service`}
                width={120}
                height={60}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
