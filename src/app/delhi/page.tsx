import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import LocationDetailPage from "@/page-components/LocationDetail/LocationDetailPage";
import type { MapLocation } from "@/components/common/VirtualMap/VirtualMap";

export const metadata: Metadata = {
  title: "Service Areas in Mahipalpur & Nearby Delhi – Medon Company",
  description:
    "Medon Company serves Mahipalpur (HQ) and 13 nearby areas across South-West Delhi including Aerocity, Vasant Kunj, Rangpuri, IGI Airport, Vasant Vihar, Kishangarh & more. Same-day appliance repair service.",
  alternates: {
    canonical: "/delhi",
  },
};

/*
 * Coordinates spread for visual clarity on the illustrated map.
 * They represent Mahipalpur HQ and surrounding/nearby areas in South-West Delhi.
 */
const DELHI_LOCATIONS: MapLocation[] = [
  { name: "Mahipalpur (HQ)", lat: 28.545, lng: 77.125, isHQ: true },
  { name: "Mahipalpur Ext.", lat: 28.540, lng: 77.105 },
  { name: "Aerocity", lat: 28.555, lng: 77.090 },
  { name: "Rangpuri", lat: 28.525, lng: 77.110 },
  { name: "Nangal Dewat", lat: 28.500, lng: 77.130 },
  { name: "IGI Airport", lat: 28.570, lng: 77.085 },
  { name: "Vasant Kunj", lat: 28.515, lng: 77.160 },
  { name: "Kishangarh", lat: 28.520, lng: 77.145 },
  { name: "Vasant Vihar", lat: 28.565, lng: 77.165 },
  { name: "JNU Campus", lat: 28.535, lng: 77.170 },
  { name: "Munirka", lat: 28.555, lng: 77.180 },
  { name: "Shanti Niketan", lat: 28.585, lng: 77.175 },
  { name: "R.K. Puram", lat: 28.575, lng: 77.185 },
];

export default function DelhiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <LocationDetailPage
          regionName="Mahipalpur & Nearby (Delhi)"
          regionSubtitle="Our Delhi Headquarters"
          description="Based in Mahipalpur Village, New Delhi — we provide expert AC repair, refrigerator service, electrical work & appliance repair across Mahipalpur and all surrounding nearby areas in South-West Delhi. Verified technicians, under 1-hour response."
          locations={DELHI_LOCATIONS}
          accent="blue"
        />
      </main>
      <Footer />
    </>
  );
}
