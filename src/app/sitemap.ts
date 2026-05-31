import type { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { ALL_LOCATIONS } from "@/data/locations";
import { ALL_BLOG_POSTS } from "@/data/blog-posts";

const BASE_URL = "https://medoncompany.com";

export default function sitemap(): MetadataRoute.Sitemap {
  /* ── Core pages ─────────────────────────── */
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  /* ── Trust / Legal pages ──────────────────── */
  const trustPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cancellation-policy`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ── Service pages (auto-generated from data) ─── */
  const servicePages: MetadataRoute.Sitemap = ALL_SERVICES.map((service) => ({
    url: `${BASE_URL}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  /* ── Location pages (auto-generated from data) ── */
  const locationPages: MetadataRoute.Sitemap = ALL_LOCATIONS.map((location) => ({
    url: `${BASE_URL}/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ── Blog posts (auto-generated from data) ────── */
  const blogPages: MetadataRoute.Sitemap = ALL_BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedDate ? new Date(post.updatedDate) : new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...trustPages, ...servicePages, ...locationPages, ...blogPages];
}
