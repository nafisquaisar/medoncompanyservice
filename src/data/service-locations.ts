/* ── Service Locations Data ──────────────────────────────────── */

export interface SubLocation {
  name: string;
  lat: number;
  lng: number;
}

export interface ServiceRegion {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  /** Center point for the map */
  center: { lat: number; lng: number };
  zoom: number;
  areas: SubLocation[];
}

/* ── Delhi NCR Locations ────────────────────────────────── */
export const DELHI_AREAS: SubLocation[] = [
  { name: "Mahipalpur (HQ)", lat: 28.5456, lng: 77.1255 },
  { name: "Aerocity", lat: 28.5535, lng: 77.1059 },
  { name: "Vasant Kunj", lat: 28.5206, lng: 77.1540 },
  { name: "Rangpuri", lat: 28.5250, lng: 77.1160 },
  { name: "IGI Airport", lat: 28.5562, lng: 77.1000 },
  { name: "Mahipalpur Extension", lat: 28.5470, lng: 77.1210 },
  { name: "Vasant Vihar", lat: 28.5580, lng: 77.1580 },
  { name: "Shanti Niketan", lat: 28.5720, lng: 77.1700 },
  { name: "Nangal Dewat", lat: 28.5120, lng: 77.1350 },
  { name: "Kishangarh", lat: 28.5310, lng: 77.1440 },
  { name: "JNU", lat: 28.5403, lng: 77.1662 },
  { name: "Munirka", lat: 28.5520, lng: 77.1710 },
  { name: "R.K. Puram", lat: 28.5640, lng: 77.1740 },
];

/* ── Samastipur, Bihar Locations ────────────────────────── */
export const SAMASTIPUR_AREAS: SubLocation[] = [
  { name: "Mushrigharari", lat: 25.8625, lng: 85.7812 },
  { name: "Sarairanjan", lat: 25.7655, lng: 86.0155 },
  { name: "Tajpur", lat: 25.8390, lng: 85.8610 },
  { name: "Samastipur", lat: 25.8630, lng: 85.7810 },
  { name: "Harpur Ailoth", lat: 25.8580, lng: 85.7750 },
  { name: "Dhurlakh", lat: 25.8560, lng: 85.7690 },
  { name: "Dudhpura", lat: 25.8710, lng: 85.7880 },
  { name: "Harpur Aloth", lat: 25.8575, lng: 85.7745 },
  { name: "Bhuindhara", lat: 25.8530, lng: 85.7650 },
  { name: "Mohanpur", lat: 25.8480, lng: 85.7920 },
  { name: "Musapur", lat: 25.8450, lng: 85.7600 },
  { name: "Lagunia Raghukanth", lat: 25.8700, lng: 85.7950 },
  { name: "Lagunia Suraj Kanth", lat: 25.8720, lng: 85.7970 },
  { name: "Bejha Dih", lat: 25.8380, lng: 85.7550 },
  { name: "Sitalpatti", lat: 25.8340, lng: 85.7500 },
  { name: "Rahimpur Rudauli", lat: 25.8300, lng: 85.7450 },
  { name: "Balbhadarpur", lat: 25.8750, lng: 85.8000 },
  { name: "Chandpatti", lat: 25.8200, lng: 85.7400 },
  { name: "Chak Jainab", lat: 25.8150, lng: 85.7350 },
  { name: "Bikrampur Bande", lat: 25.8100, lng: 85.7300 },
  { name: "Sangrampur", lat: 25.8050, lng: 85.7250 },
  { name: "Garuara", lat: 25.8000, lng: 85.7200 },
  { name: "Karpuri Gram", lat: 25.8780, lng: 85.8050 },
  { name: "Jitwarpur", lat: 25.8800, lng: 85.8100 },
  { name: "Chak Nur", lat: 25.7950, lng: 85.7150 },
];

/* ── Regions ────────────────────────────────────────────── */
export const SERVICE_REGIONS: ServiceRegion[] = [
  {
    id: "delhi",
    name: "New Delhi",
    shortName: "Delhi NCR",
    tagline: "HQ — Mahipalpur & 13 service areas across South-West Delhi",
    center: { lat: 28.5456, lng: 77.1255 },
    zoom: 13,
    areas: DELHI_AREAS,
  },
  {
    id: "samastipur",
    name: "Samastipur, Bihar",
    shortName: "Samastipur",
    tagline: "Mushrigharari & 25 service areas across Samastipur district",
    center: { lat: 25.8500, lng: 85.7700 },
    zoom: 12,
    areas: SAMASTIPUR_AREAS,
  },
];

