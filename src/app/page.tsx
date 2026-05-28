import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/pages/Services/Services";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import PopularServices from "@/components/sections/PopularServices/PopularServices";
import AreasWeServe from "@/components/sections/AreasWeServe/AreasWeServe";
import GalleryPreview from "@/components/sections/Gallery/GalleryPreview";
import AboutPreview from "@/components/sections/About/AboutPreview";
import Reviews from "@/components/sections/Reviews/Reviews";
import Contact from "@/pages/Contact/ContactPage";
import Footer from "@/components/common/Footer/Footer";
import JsonLd from "@/components/seo/JsonLd";

/* ── Page-specific metadata ──────────────────────── */
export const metadata: Metadata = {
  title: {
    absolute: "Medon Company – Expert AC & Appliance Repair Services in Delhi NCR",
  },
  description:
    "Book professional AC repair, refrigerator service, electrical & geyser repair in Delhi NCR with Medon Company. Verified technicians, transparent pricing, real-time tracking.",
  alternates: {
    canonical: "/",
  },
};

/* ── Homepage ────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />

      <main id="main-content">
        <section id="home" className="scroll-mt-20" aria-label="Hero">
          <Hero />
        </section>

        <section id="services" className="scroll-mt-20" aria-label="Our Services">
          <Services />
        </section>

        <section id="how-it-works" className="scroll-mt-20" aria-label="How It Works">
          <HowItWorks />
        </section>

        <PopularServices />

        <section id="gallery" className="scroll-mt-20" aria-label="Work Gallery">
          <GalleryPreview />
        </section>

        <AreasWeServe />

        <section id="about" className="scroll-mt-20" aria-label="About Medon">
          <AboutPreview />
        </section>

        <section id="reviews" className="scroll-mt-20" aria-label="Customer Reviews">
          <Reviews />
        </section>

        <section id="contact" className="scroll-mt-20" aria-label="Contact Us">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}