import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Contact from "@/pages/Contact/ContactPage";
import Footer from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "Contact Us – Get in Touch with Medon Company",
  description:
    "Contact Medon Company for AC repair, appliance service, or any enquiry. Call +91 7303637086, email Medoncompany@gmail.com, or visit us at Mahipalpur, New Delhi.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Medon Company",
    description:
      "Reach out to Medon Company for professional appliance repair services. Call, email, or send us a message.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
