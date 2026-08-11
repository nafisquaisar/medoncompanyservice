import type { Metadata } from "next";
import LegalPageTemplate from "@/components/common/LegalPageTemplate/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for Medon Company appliance repair services. Learn about our fair refund process, eligibility criteria, and how to request a refund in Delhi NCR.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | Medon Company",
    description:
      "Refund Policy for Medon Company appliance repair services in Delhi NCR.",
    url: "/refund-policy",
  },
  twitter: {
    card: "summary",
    title: "Refund Policy | Medon Company",
    description:
      "Refund Policy for Medon Company appliance repair services in Delhi NCR.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SECTIONS = [
  {
    heading: "1. Our Commitment",
    content:
      "At Medon Company, customer satisfaction is our top priority. We stand behind the quality of our appliance repair services in Delhi NCR. If you are not satisfied with a service, we are committed to making it right through our fair and transparent refund policy.",
  },
  {
    heading: "2. Refund Eligibility",
    content: [
      "Issue Not Resolved: If the same issue recurs within the 90-day warranty period and we are unable to fix it, you are eligible for a full refund of the repair charges.",
      "Service Not Rendered: If a technician is dispatched but the service is not performed (e.g., parts unavailable, technician unable to diagnose), only the inspection fee may be charged.",
      "Overcharging: If you believe you were charged more than the quoted price, contact us within 7 days with your receipt for review and correction.",
      "Duplicate Payment: If a duplicate payment is made, the excess amount will be refunded within 7 business days.",
    ],
  },
  {
    heading: "3. Non-Refundable Items",
    content: [
      "Inspection/diagnostic fees (₹149–₹199) are non-refundable once the technician has performed the diagnosis, as this covers the technician's time and expertise.",
      "Parts and materials purchased specifically for your repair (e.g., compressor, gas, thermostat) are non-refundable once installed.",
      "Charges for services satisfactorily completed, even if you later decide to replace the appliance.",
      "Emergency or express service surcharges.",
    ],
  },
  {
    heading: "4. How to Request a Refund",
    content: [
      "Contact our support team at +91 7303637086 or email Medoncompany@gmail.com within 7 days of the service.",
      "Provide your booking details, the service date, and a description of the issue.",
      "Our team will review your request and respond within 48 hours.",
      "If approved, the refund will be processed within 7–10 business days via the original payment method (UPI, bank transfer, or cash).",
    ],
  },
  {
    heading: "5. Warranty-Related Refunds",
    content:
      "If a repair fails within the 90-day warranty period, we will first attempt to resolve the issue at no extra cost. If we are unable to fix the problem after a reasonable number of attempts (typically 2), a full refund of the original repair charges will be issued. This does not include normal wear and tear or issues caused by external factors (power surges, physical damage, water damage, or unauthorized tampering).",
  },
  {
    heading: "6. Dispute Resolution",
    content:
      "If you are not satisfied with our refund decision, you may escalate the matter by emailing Medoncompany@gmail.com with the subject line 'Refund Dispute'. A senior manager will review your case within 5 business days and provide a final resolution.",
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageTemplate
      title="Refund Policy"
      lastUpdated="May 1, 2025"
      sections={SECTIONS}
    />
  );
}
