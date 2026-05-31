import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import TrustBadges from "@/components/sections/TrustBadges/TrustBadges";
import Services from "@/pages/Services/Services";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import WhyChooseMedon from "@/components/sections/WhyChooseMedon/WhyChooseMedon";
import PopularServices from "@/components/sections/PopularServices/PopularServices";
import AreasWeServe from "@/components/sections/AreasWeServe/AreasWeServe";
import GalleryPreview from "@/components/sections/Gallery/GalleryPreview";
import Reviews from "@/components/sections/Reviews/Reviews";
import HomepageFAQ from "@/components/sections/HomepageFAQ/HomepageFAQ";
import EmergencyCTA from "@/components/sections/EmergencyCTA/EmergencyCTA";
import Contact from "@/pages/Contact/ContactPage";
import StickyContactCTA from "@/components/common/StickyContactCTA/StickyContactCTA";
import Footer from "@/components/common/Footer/Footer";
import JsonLd from "@/components/seo/JsonLd";

/* ── Page-specific metadata ──────────────────────── */
export const metadata: Metadata = {
  title: {
    absolute:
      "Medon Company – Expert AC & Appliance Repair Service in Delhi NCR",
  },
  description:
    "Book professional AC repair, refrigerator service, electrical & geyser repair in Delhi NCR. Same-day service in Mahipalpur, Vasant Kunj & South Delhi. Verified technicians, transparent pricing. Call +91 7303637086.",
  keywords: [
    "AC repair near me",
    "appliance repair Delhi",
    "AC service Delhi",
    "AC repair Delhi NCR",
    "AC repair Mahipalpur",
    "AC service Vasant Kunj",
    "appliance repair South Delhi",
    "refrigerator repair Delhi",
    "electrical services Delhi",
    "geyser repair Delhi",
    "AC installation Delhi",
    "home repair services Delhi NCR",
  ],
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

        <TrustBadges />

        <section id="services" className="scroll-mt-20" aria-label="Our Services">
          <Services />
        </section>

        <section id="how-it-works" className="scroll-mt-20" aria-label="How It Works">
          <HowItWorks />
        </section>

        <WhyChooseMedon />

        <PopularServices />

        <section id="gallery" className="scroll-mt-20" aria-label="Work Gallery">
          <GalleryPreview />
        </section>

        <AreasWeServe />

        <section id="reviews" className="scroll-mt-20" aria-label="Customer Reviews">
          <Reviews />
        </section>

        <HomepageFAQ />

        <EmergencyCTA />

        <section id="contact" className="scroll-mt-20" aria-label="Contact Us">
          <Contact />
        </section>
      </main>

      <Footer />
      <StickyContactCTA />
    </>
  );
}