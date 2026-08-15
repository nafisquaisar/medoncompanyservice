import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

const SERVICE = getServiceBySlug("geyser-repair-delhi")!;

export const metadata: Metadata = {
  title: SERVICE.title,
  description: SERVICE.metaDescription,
  keywords: SERVICE.keywords,
  alternates: { canonical: "/geyser-repair-mahipalpur" },
  openGraph: {
    title: SERVICE.title + " | Medon Company",
    description: SERVICE.metaDescription,
    url: "/geyser-repair-mahipalpur",
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
