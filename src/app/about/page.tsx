import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import AboutPage from "@/pages/About/AboutPage";
import Footer from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "About Us – Our Mission & Story",
  description:
    "Learn about Medon Company — our mission to bring structured, transparent, and technology-driven electronic repair services to Delhi NCR. Verified technicians, real-time tracking, and quality accountability.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Medon Company – Our Mission & Story",
    description:
      "Medon Company is building India's most structured electronic service platform with verified technicians, transparent pricing, and real-time monitoring.",
    url: "/about",
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
