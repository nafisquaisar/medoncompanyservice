import type { Metadata } from "next";
import LegalPageTemplate from "@/components/common/LegalPageTemplate/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Medon Company appliance repair services in Delhi NCR. Read our service terms, warranty policy, and customer responsibilities.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    title: "Terms & Conditions | Medon Company",
    description:
      "Terms and Conditions for Medon Company appliance repair services in Delhi NCR.",
    url: "/terms-and-conditions",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Medon Company",
    description:
      "Terms and Conditions for Medon Company appliance repair services in Delhi NCR.",
  },
};

const SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    content:
      "By booking a service with Medon Company or using our website (www.medoncompany.in), you agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    heading: "2. Services Offered",
    content: [
      "AC Repair, Installation, Gas Refilling & Deep Cleaning",
      "Refrigerator Repair & Maintenance",
      "Electrical Services — Wiring, Switchboard, MCB Installation",
      "Geyser Repair & Installation",
      "Microwave Oven Repair",
      "All services are available across Delhi NCR including Mahipalpur, Vasant Kunj, Aerocity, Dwarka, South Delhi, Saket, and Hauz Khas.",
    ],
  },
  {
    heading: "3. Booking & Scheduling",
    content:
      "Services can be booked via phone (+91 7303637086), WhatsApp, or our website contact form. We strive to provide same-day service availability. Scheduling is subject to technician availability in your area. You will receive confirmation of your booking along with an estimated time of arrival.",
  },
  {
    heading: "4. Pricing & Payment",
    content: [
      "All prices quoted are in Indian Rupees (INR) and are inclusive of labor charges.",
      "Parts and materials are charged separately at market rates.",
      "An inspection fee (starting from ₹199) is charged for diagnostic visits. This fee is adjusted against the repair bill if you proceed with the service.",
      "Payment can be made via cash, UPI (Google Pay, PhonePe, Paytm), or card.",
      "Final pricing is communicated before any repair work begins. There are no hidden charges.",
    ],
  },
  {
    heading: "5. Service Warranty",
    content:
      "All repair work performed by Medon Company comes with a 90-day service warranty. This warranty covers the same issue recurring due to the original repair. Parts replacements carry the manufacturer's warranty period. The warranty does not cover damage caused by power surges, physical damage, misuse, or unauthorized tampering after our service.",
  },
  {
    heading: "6. Customer Responsibilities",
    content: [
      "Provide accurate information about the appliance issue and your location.",
      "Ensure safe access to the appliance for our technician.",
      "Be present at the service location during the scheduled time window.",
      "Inform us of any known electrical or safety hazards before the technician begins work.",
      "Obtain necessary permissions from your building management for any installation or external work.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    content:
      "Medon Company shall not be liable for any indirect, incidental, or consequential damages arising from our services. Our total liability shall not exceed the service fee paid for the specific service in question. We are not responsible for pre-existing conditions of your appliance that are unrelated to the repair performed.",
  },
  {
    heading: "8. Cancellation Policy",
    content:
      "Please refer to our dedicated Cancellation Policy page for details on service cancellation terms and procedures.",
  },
  {
    heading: "9. Intellectual Property",
    content:
      "All content on www.medoncompany.in — including text, images, logos, and design — is the property of Medon Company and protected by copyright laws. You may not reproduce, distribute, or use any content without prior written permission.",
  },
  {
    heading: "10. Governing Law",
    content:
      "These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
  },
  {
    heading: "11. Changes to Terms",
    content:
      "Medon Company reserves the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms & Conditions"
      lastUpdated="May 1, 2025"
      sections={SECTIONS}
    />
  );
}
