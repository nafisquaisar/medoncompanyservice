import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import TrustBadges from "@/components/sections/TrustBadges/TrustBadges";
import Services from "@/page-components/Services/Services";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import WhyChooseMedon from "@/components/sections/WhyChooseMedon/WhyChooseMedon";
import PopularServices from "@/components/sections/PopularServices/PopularServices";
import AreasWeServe from "@/components/sections/AreasWeServe/AreasWeServe";
import GalleryPreview from "@/components/sections/Gallery/GalleryPreview";
import Reviews from "@/components/sections/Reviews/Reviews";
import HomepageFAQ from "@/components/sections/HomepageFAQ/HomepageFAQ";
import EmergencyCTA from "@/components/sections/EmergencyCTA/EmergencyCTA";
import BrandMarquee from "@/components/sections/BrandMarquee/BrandMarquee";
import Contact from "@/page-components/Contact/ContactPage";
import StickyContactCTA from "@/components/common/StickyContactCTA/StickyContactCTA";
import Footer from "@/components/common/Footer/Footer";
import JsonLd from "@/components/seo/JsonLd";

/* ── Page-specific metadata ──────────────────────── */
/*
 * LOCAL SEO STRATEGY:
 *   Primary location  → Mahipalpur (HQ, fastest response, highest relevance)
 *   Secondary location → Delhi / Delhi NCR (broad reach, high search volume)
 *
 * Title format: [Primary Service] in [Primary Location] | [Brand]
 *   - Leads with the money keyword "AC Repair in Mahipalpur"
 *   - Bracket format proven to improve CTR in local pack results
 *   - Stays under 60 characters for full SERP display
 *
 * Description strategy:
 *   - Opens with primary location + unique differentiator (HQ = fastest)
 *   - Includes primary service keywords naturally
 *   - Has a direct call-to-action with phone number
 *   - Under 158 characters to avoid SERP truncation
 */
export const metadata: Metadata = {
  title: {
    absolute:
      "AC Repair in Mahipalpur, Delhi | Medon Company – Same-Hour Service",
  },
  description:
    "Medon Company is headquartered in Mahipalpur — get AC repair, fridge service & electrical work in under 1 hour. Serving Mahipalpur, Aerocity, Vasant Kunj, Rangpuri & 13 areas. Verified techs. ₹199 onwards. Call +91 7303637086.",
  keywords: [
    // ── Primary: Mahipalpur (HQ location — highest local relevance) ──
    "AC repair Mahipalpur",
    "AC service Mahipalpur",
    "appliance repair Mahipalpur",
    "AC repair near Mahipalpur",
    "AC technician Mahipalpur",
    "AC installation Mahipalpur",
    // ── Secondary: Delhi (high-volume broad terms) ──
    "AC repair Delhi",
    "AC repair near me",
    "appliance repair Mahipalpur",
    "refrigerator repair Delhi",
    "washing machine repair Delhi",
    "washing machine repair near me",
    "electrical services Delhi",
    "geyser repair Delhi",
    "AC installation Delhi",
    "home repair services Mahipalpur",
    // ── Nearby locations ──
    "AC repair Vasant Kunj",
    "AC repair Aerocity",
    "AC repair Vasant Vihar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AC Repair in Mahipalpur | Medon Company",
    description:
      "Based in Mahipalpur — AC repair, refrigerator service & electrical work in under 1 hour. Serving Mahipalpur, Aerocity, Vasant Kunj, Rangpuri & 13 areas. Verified technicians, transparent pricing.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Repair in Mahipalpur | Medon Company",
    description:
      "Based in Mahipalpur — AC repair, refrigerator service & electrical work in under 1 hour. Serving Mahipalpur, Aerocity, Vasant Kunj, Rangpuri & 13 areas. Verified technicians, transparent pricing.",
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

        <BrandMarquee />

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