// src/app/robots.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Wildcard rule — applies to all crawlers including Googlebot
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",      // API routes — no indexable content
          "/_next/",    // Next.js build internals — always block
          "/private/",  // Any private/authenticated routes
        ],
      },
      {
        // Image crawler — allow access to actual public image paths.
        // NOTE: In Next.js, /public/ files are served at the URL root (/),
        // NOT at /public/. Never use /public/ as a URL path.
        userAgent: "Googlebot-Image",
        allow: ["/img/", "/icons/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
