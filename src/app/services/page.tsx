import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Services from "@/pages/Services/Services";
import Footer from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "Services – AC Repair, Refrigerator, Electrical & More",
  description:
    "Explore Medon Company's professional appliance repair services: AC servicing, refrigerator repair, electrical wiring, geyser installation, and microwave repair. Transparent pricing starting from ₹199.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Medon Company Services – Professional Appliance Repair",
    description:
      "AC repair, refrigerator service, electrical work, geyser & microwave repair with transparent pricing and verified technicians.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Services />
      </main>
      <Footer />
    </>
  );
}
