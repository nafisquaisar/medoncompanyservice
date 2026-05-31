import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/img/", "/public/"],
      },
    ],
    sitemap: "https://medoncompany.com/sitemap.xml",
    host: "https://medoncompany.com",
  };
}
