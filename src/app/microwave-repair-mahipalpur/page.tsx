import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

const SERVICE = getServiceBySlug("microwave-repair-delhi")!;

export const metadata: Metadata = {
  title: SERVICE.title,
  description: SERVICE.metaDescription,
  keywords: SERVICE.keywords,
  alternates: { canonical: "/microwave-repair-mahipalpur" },
  openGraph: {
    title: SERVICE.title + " | Medon Company",
    description: SERVICE.metaDescription,
    url: "/microwave-repair-mahipalpur",
  },
  twitter: {
    card: "summary_large_image",
    title: SERVICE.title + " | Medon Company",
    description: SERVICE.metaDescription,
    images: ["/img/webbanner.png"],
  },
};

export default function Page() {
  return <ServicePageTemplate data={SERVICE} />;
}
