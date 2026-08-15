// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE,
} from "@/config/site";
import EmergencyBanner from "@/components/common/EmergencyBanner/EmergencyBanner";
import QuickBookingPopup from "@/components/common/QuickBookingPopup/QuickBookingPopup";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleTagManager, {
  GTMNoScript,
} from "@/components/analytics/GoogleTagManager";
import WebVitals from "@/components/analytics/WebVitals";
/* MetaPixel: uncomment once NEXT_PUBLIC_META_PIXEL_ID is set */
// import MetaPixel from "@/components/analytics/MetaPixel";

/* ── Typography ──────────────────────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* ── Global Metadata ─────────────────────────────────── */
export const metadata: Metadata = {
  /*
   * metadataBase resolves ALL relative canonical/OG/alternate URLs.
   * This MUST match the canonical www domain exactly.
   * Import from @/config/site — never hardcode here.
   */
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} – Expert AC & Appliance Repair Services in Mahipalpur, Delhi`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
  "AC Repair Near Me",
  "AC Service Near Me",
  "AC Installation Near Me",
  "AC Technician Near Me",
  "Best AC Repair Service Delhi",
  "AC Repair Mahipalpur",
  "AC Repair Delhi",
  "AC Gas Filling Service",
  "AC Deep Cleaning Service",
  "Home Appliance Repair Service",
  "AC Repair Mahipalpur",
  "AC Service Mahipalpur",
  "AC Installation Mahipalpur",
  "AC Gas Filling Mahipalpur",
  "AC Technician Mahipalpur",
  "AC Repair Aerocity",
  "AC Service Aerocity",
  "AC Installation Aerocity",
  "AC Gas Filling Aerocity",
  "AC Technician Aerocity",
  "Refrigerator Repair Delhi",
  "Geyser Repair Service",
  "Electrical Services Delhi",
  "Verified AC Technicians",
  "Emergency AC Repair Mahipalpur",
  "24 Hour AC Repair Near Me",
  "Same Day AC Service",
  "Split AC Repair",
  "Window AC Repair",
  "Medon Company",

  "Single Door Fridge Repair",
  "Single Door Refrigerator Service",
  "Single Door Fridge Repair Near Me",
  "Single Door Refrigerator Technician",
  "Single Door Fridge Service Delhi",

  "Washing Machine Repair",
  "Washing Machine Service Near Me",
  "Washing Machine Repair Delhi",
  "Automatic Washing Machine Repair",
  "Washing Machine Technician Near Me"
],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  /*
   * DO NOT set alternates.canonical here in the root layout.
   * Root-level alternates get inherited by child pages that don't
   * define their own, causing every such page to claim the homepage
   * as its canonical. Set explicit canonicals in every page.tsx only.
   */

  /* ── Google Search Console verification ─────────────── */
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Expert AC & Appliance Repair Services`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Professional Appliance Repair Services`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Expert AC & Appliance Repair Services`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
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
    icon: "/logo.png",
  },
};

/* ── Viewport ────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#01395C",
  width: "device-width",
  initialScale: 1,
};

/* ── Root Layout ─────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {/* GTM noscript — must be first child of <body> per GTM spec */}
        <GTMNoScript />

        {/* Web Vitals reporter */}
        <WebVitals />

        <EmergencyBanner />

        {children}

        <QuickBookingPopup />

        {/* Analytics scripts */}
        <GoogleAnalytics />
        <GoogleTagManager />

        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11430002689"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11430002689');
        `}
        </Script>

        {/* Uncomment when NEXT_PUBLIC_META_PIXEL_ID is configured */}
        {/* <MetaPixel /> */}
      </body>
    </html>
  );
}
