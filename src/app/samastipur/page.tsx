import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import LocationDetailPage from "@/page-components/LocationDetail/LocationDetailPage";
import type { MapLocation } from "@/components/common/VirtualMap/VirtualMap";

export const metadata: Metadata = {
  title: "Service Areas in Samastipur, Bihar – Medon Company",
  description:
    "Medon Company serves 25 areas across Samastipur district, Bihar including Mushrigharari, Sarairanjan, Tajpur, Samastipur city & more. Professional appliance repair service.",
  alternates: {
    canonical: "/samastipur",
  },
};

/*
 * Coordinates are spread for visual clarity on the illustrated map.
 * They represent approximate relative positions within Samastipur district.
 */
const SAMASTIPUR_LOCATIONS: MapLocation[] = [
  { name: "Mushrigharari", lat: 25.860, lng: 85.780, isHQ: true },
  { name: "Sarairanjan", lat: 25.770, lng: 86.020 },
  { name: "Tajpur", lat: 25.840, lng: 85.920 },
  { name: "Samastipur", lat: 25.870, lng: 85.830 },
  { name: "Harpur Ailoth", lat: 25.900, lng: 85.750 },
  { name: "Dhurlakh", lat: 25.820, lng: 85.700 },
  { name: "Dudhpura", lat: 25.920, lng: 85.850 },
  { name: "Harpur Aloth", lat: 25.890, lng: 85.710 },
  { name: "Bhuindhara", lat: 25.800, lng: 85.660 },
  { name: "Mohanpur", lat: 25.780, lng: 85.870 },
  { name: "Musapur", lat: 25.810, lng: 85.740 },
  { name: "Lagunia Raghukanth", lat: 25.940, lng: 85.900 },
  { name: "Lagunia Suraj Kanth", lat: 25.950, lng: 85.950 },
  { name: "Bejha Dih", lat: 25.760, lng: 85.680 },
  { name: "Sitalpatti", lat: 25.740, lng: 85.640 },
  { name: "Rahimpur Rudauli", lat: 25.720, lng: 85.720 },
  { name: "Balbhadarpur", lat: 25.930, lng: 85.810 },
  { name: "Chandpatti", lat: 25.700, lng: 85.790 },
  { name: "Chak Jainab", lat: 25.750, lng: 85.960 },
  { name: "Bikrampur Bande", lat: 25.690, lng: 85.850 },
  { name: "Sangrampur", lat: 25.830, lng: 85.980 },
  { name: "Garuara", lat: 25.850, lng: 86.000 },
  { name: "Karpuri Gram", lat: 25.910, lng: 85.960 },
  { name: "Jitwarpur", lat: 25.960, lng: 85.870 },
  { name: "Chak Nur", lat: 25.680, lng: 85.730 },
];

export default function SamastipurPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <LocationDetailPage
          regionName="Samastipur, Bihar"
          regionSubtitle="Our Bihar Branch"
          description="Operating from Mushrigharari in Samastipur — we provide professional appliance repair, AC service, electrical work & geyser repair across 25 service areas in Samastipur district. Trained technicians, affordable pricing."
          locations={SAMASTIPUR_LOCATIONS}
          accent="emerald"
        />
      </main>
      <Footer />
    </>
  );
}
