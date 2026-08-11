import type { Metadata } from "next";
import LegalPageTemplate from "@/components/common/LegalPageTemplate/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Medon Company. Learn how we collect, use, and protect your personal information when you use our appliance repair services in Delhi NCR.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Medon Company",
    description:
      "Privacy Policy for Medon Company — appliance repair services in Delhi NCR.",
    url: "/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Medon Company",
    description:
      "Privacy Policy for Medon Company — appliance repair services in Delhi NCR.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    content: [
      "Personal Information: When you book a service or contact us, we may collect your name, phone number, email address, and service address.",
      "Service Information: Details about the appliance type, issue description, and service preferences you provide.",
      "Device Information: Basic device and browser information collected automatically when you visit our website, including IP address, browser type, and operating system.",
      "Cookies & Analytics: We use cookies and analytics tools to understand website usage patterns and improve your experience.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    content: [
      "To schedule and provide appliance repair services at your location in Delhi NCR.",
      "To communicate with you about your service request, including confirmation, updates, and follow-ups.",
      "To send promotional offers, service reminders, and seasonal maintenance tips (you can opt out anytime).",
      "To improve our services based on feedback and usage analytics.",
      "To comply with legal obligations and resolve disputes.",
    ],
  },
  {
    heading: "3. Information Sharing",
    content:
      "Medon Company does not sell, trade, or rent your personal information to third parties. We may share your information only with our verified technicians (limited to the information necessary to complete your service request), payment processors for secure transaction handling, and as required by law or legal proceedings.",
  },
  {
    heading: "4. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "5. Your Rights",
    content: [
      "Access: You can request a copy of the personal data we hold about you.",
      "Correction: You can request correction of inaccurate or incomplete data.",
      "Deletion: You can request deletion of your personal data, subject to legal retention requirements.",
      "Opt-out: You can unsubscribe from promotional communications at any time by contacting us.",
    ],
  },
  {
    heading: "6. Third-Party Links",
    content:
      "Our website may contain links to third-party websites (such as Google Maps, WhatsApp, and social media platforms). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies separately.",
  },
  {
    heading: "7. Children's Privacy",
    content:
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.",
  },
  {
    heading: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, technical, or regulatory reasons. The updated policy will be posted on this page with a revised 'Last updated' date. We encourage you to review this page periodically.",
  },
  {
    heading: "9. Contact Us",
    content:
      "If you have questions about this Privacy Policy or wish to exercise your rights, contact Medon Company at: Email: Medoncompany@gmail.com, Phone: +91 7303637086, Address: Shop No L-3, Street Number 1, L Block, Mahipalpur Village, New Delhi 110037.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      lastUpdated="May 1, 2025"
      sections={SECTIONS}
    />
  );
}
