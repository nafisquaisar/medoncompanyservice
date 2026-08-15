import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

const SERVICE = getServiceBySlug("refrigerator-repair-delhi")!;

export const metadata: Metadata = {
  title: SERVICE.title,
  description: SERVICE.metaDescription,
  keywords: SERVICE.keywords,
  alternates: { canonical: "/refrigerator-repair-mahipalpur" },
  openGraph: {
    title: SERVICE.title + " | Medon Company",
    description: SERVICE.metaDescription,
    url: "/refrigerator-repair-mahipalpur",
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
