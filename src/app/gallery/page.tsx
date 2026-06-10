import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import GallerySection from "@/components/sections/Gallery/GallerySection";
import Footer from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "Gallery – Our Professional Service Work",
  description:
    "View Medon Company's portfolio of professional AC repair, refrigerator service, and electrical work. See real photos from our verified technicians on the field.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Medon Company Work Gallery – Service Portfolio",
    description:
      "Browse real photos of professional appliance repair and service work by Medon Company's verified technicians.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
