import type { Metadata } from "next";
import { getLocationBySlug } from "@/data/locations";
import LocationPageTemplate from "@/components/location-page/LocationPageTemplate";

const LOCATION = getLocationBySlug("shanti-niketan")!;

export const metadata: Metadata = {
  title: LOCATION.title,
  description: LOCATION.metaDescription,
  keywords: LOCATION.keywords,
  alternates: { canonical: `/${LOCATION.slug}` },
  openGraph: {
    title: LOCATION.title + " | Medon Company",
    description: LOCATION.metaDescription,
    url: `/${LOCATION.slug}`,
  },
};

export default function Page() {
  return <LocationPageTemplate data={LOCATION} />;
}
