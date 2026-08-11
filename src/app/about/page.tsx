import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import AboutPage from "@/page-components/About/AboutPage";
import Footer from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "About Us – Medon Company | Appliance Repair Experts in Delhi NCR",
  description:
    "Medon Company is Mahipalpur's trusted home appliance repair service. Expert AC repair, refrigerator service, geyser repair, and electrical work across Delhi NCR. Verified technicians, transparent pricing, same-day service.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Medon Company – Appliance Repair Experts in Delhi NCR",
    description:
      "Medon Company is headquartered in Mahipalpur, Delhi — providing AC repair, refrigerator service, geyser repair, and electrical work across Delhi NCR since 2020.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Medon Company – Appliance Repair Experts in Delhi NCR",
    description:
      "Trusted appliance repair service in Mahipalpur, Delhi. AC repair, fridge service, electrical work & more across Delhi NCR.",
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
