// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { ALL_SERVICES } from "@/data/services";
import { ALL_LOCATIONS } from "@/data/locations";
import { ALL_BLOG_POSTS } from "@/data/blog-posts";

/* ─────────────────────────────────────────────────────────────────
   Static last-modified dates.
   ❌ DO NOT use new Date() for static/data-driven pages —
      it reports every page as modified RIGHT NOW on every sitemap
      fetch, wasting crawl budget and making the signal meaningless.
   ✅ Update these dates only when you actually change the content.
───────────────────────────────────────────────────────────────── */
const DATE_SITE_LAUNCH   = new Date("2025-03-01"); // When the site went live
const DATE_CORE_UPDATED  = new Date("2026-08-09"); // Last major core page change
const DATE_DATA_UPDATED  = new Date("2026-08-09"); // Last services/locations data update (added washing machine repair)

/* ─────────────────────────────────────────────────────────────────
   Derive the blog index last-modified date from actual post dates
   so it stays accurate without manual updates.
───────────────────────────────────────────────────────────────── */
function getLatestBlogDate(): Date {
  const timestamps = ALL_BLOG_POSTS.map((p) => {
    const raw = p.updatedDate ?? p.publishDate;
    const d = new Date(raw);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  });
  const latest = Math.max(...timestamps);
  return latest > 0 ? new Date(latest) : DATE_SITE_LAUNCH;
}

export default function sitemap(): MetadataRoute.Sitemap {

  /* ── Core Pages ───────────────────────────────────────────────── */
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: DATE_CORE_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: DATE_DATA_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: DATE_SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: getLatestBlogDate(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: DATE_SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: DATE_CORE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  /* ── Service Pages ────────────────────────────────────────────── */
  const servicePages: MetadataRoute.Sitemap = ALL_SERVICES.map((service) => ({
    url: `${SITE_URL}/${service.slug}`,
    lastModified: DATE_DATA_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  /* ── Location Pages ───────────────────────────────────────────── */
  const locationPages: MetadataRoute.Sitemap = ALL_LOCATIONS.map((location) => ({
    url: `${SITE_URL}/${location.slug}`,
    lastModified: DATE_DATA_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ── Blog Posts ───────────────────────────────────────────────── */
  const blogPages: MetadataRoute.Sitemap = ALL_BLOG_POSTS.map((post) => {
    const raw = post.updatedDate ?? post.publishDate;
    const parsed = new Date(raw);
    // Guard: fall back if the date string is malformed or in the future
    const lastModified =
      isNaN(parsed.getTime()) || parsed > new Date()
        ? DATE_SITE_LAUNCH
        : parsed;

    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  /* ── Combined — highest priority first ───────────── */
  return [
    ...corePages,
    ...servicePages,
    ...locationPages,
    ...blogPages,
    /*
     * Legal pages (privacy-policy, terms-and-conditions, refund-policy,
     * cancellation-policy) are intentionally excluded from the sitemap.
     * They are thin utility pages that waste crawl budget. They remain
     * accessible via footer links but should not compete for index slots.
     */
  ];
}