import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* ── Typography ──────────────────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* ── Site-wide constants ─────────────────────────── */
const SITE_URL = "https://medoncompany.com";
const SITE_NAME = "Medon Company";
const SITE_DESC =
  "Medon Company provides expert AC repair, refrigerator service, electrical & geyser repair in Delhi NCR. Verified technicians, transparent pricing, real-time tracking. Book now!";

/* ── Global Metadata ─────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Medon Company – Expert AC & Appliance Repair Services in Delhi NCR",
    template: "%s | Medon Company",
  },

  description: SITE_DESC,

  keywords: [
    "AC repair Delhi",
    "AC service near me",
    "AC installation Delhi NCR",
    "refrigerator repair",
    "electrical services",
    "geyser repair",
    "Medon Company",
    "appliance repair Delhi",
    "AC deep cleaning",
    "home services Delhi NCR",
    "Mahipalpur AC repair",
    "Vasant Kunj AC service",
    "verified technicians",
  ],

  authors: [{ name: "Medon Company", url: SITE_URL }],
  creator: "NF Nexa Tech",
  publisher: "Medon Company",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Medon Company – Expert AC & Appliance Repair Services",
    description: SITE_DESC,
    images: [
      {
        url: "/img/webbanner.png",
        width: 1200,
        height: 630,
        alt: "Medon Company – Professional Appliance Repair Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Medon Company – Expert AC & Appliance Repair Services",
    description: SITE_DESC,
    images: ["/img/webbanner.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* ── Viewport ────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#01395C",
  width: "device-width",
  initialScale: 1,
};

/* ── Root Layout ─────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
