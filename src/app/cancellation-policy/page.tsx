import type { Metadata } from "next";
import LegalPageTemplate from "@/components/common/LegalPageTemplate/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Cancellation Policy for Medon Company appliance repair services. Learn how to cancel a booked service, cancellation charges, and rescheduling options in Delhi NCR.",
  alternates: { canonical: "/cancellation-policy" },
  openGraph: {
    title: "Cancellation Policy | Medon Company",
    description:
      "Cancellation Policy for Medon Company appliance repair services in Delhi NCR.",
    url: "/cancellation-policy",
  },
  twitter: {
    card: "summary",
    title: "Cancellation Policy | Medon Company",
    description:
      "Cancellation Policy for Medon Company appliance repair services in Delhi NCR.",
  },
};

const SECTIONS = [
  {
    heading: "1. Cancellation Before Technician Dispatch",
    content:
      "You may cancel a booked service at no charge if the cancellation is made before a technician has been dispatched to your location. To cancel, call us at +91 7303637086 or send a WhatsApp message. There are no cancellation fees for timely cancellations.",
  },
  {
    heading: "2. Cancellation After Technician Dispatch",
    content:
      "If you cancel after a technician has already been dispatched to your location, a minimum visit charge of ₹149–₹199 may apply. This covers the technician's travel time and fuel costs. We understand that emergencies happen — if you have a genuine reason, please contact us and we will try to accommodate your request.",
  },
  {
    heading: "3. Cancellation During Service",
    content: [
      "If you decide to cancel during the diagnostic/inspection phase, only the inspection fee (₹149–₹199) will be charged.",
      "If you cancel after repair work has begun, charges for the completed work and any parts used will apply.",
      "Our technicians will always communicate the full cost before starting any repair. You have the right to decline the repair at the diagnosis stage with no additional charges.",
    ],
  },
  {
    heading: "4. Rescheduling",
    content:
      "You may reschedule a booked service at no extra charge. We recommend rescheduling at least 2 hours before the scheduled time slot. Rescheduled services are subject to technician availability. You can reschedule by calling +91 7303637086 or messaging us on WhatsApp.",
  },
  {
    heading: "5. No-Show Policy",
    content:
      "If our technician arrives at your location and you are not available (no-show), a visit charge of ₹199 may be applied. To avoid this, please inform us at least 30 minutes before the scheduled time if you need to cancel or reschedule.",
  },
  {
    heading: "6. Cancellation by Medon Company",
    content: [
      "In rare cases, we may need to cancel or reschedule a service due to unforeseen circumstances such as extreme weather, technician unavailability, or safety concerns.",
      "If we cancel a service, you will be notified immediately and offered a priority rescheduled slot at no additional cost.",
      "No charges will apply for cancellations initiated by Medon Company.",
    ],
  },
  {
    heading: "7. How to Cancel",
    content: [
      "Phone: Call +91 7303637086",
      "WhatsApp: Message us at +91 7303637086",
      "Email: Medoncompany@gmail.com",
      "Please provide your booking reference or phone number used for booking when requesting cancellation.",
    ],
  },
];

export default function CancellationPolicyPage() {
  return (
    <LegalPageTemplate
      title="Cancellation Policy"
      lastUpdated="May 1, 2025"
      sections={SECTIONS}
    />
  );
}
