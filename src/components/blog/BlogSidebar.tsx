"use client";

import Link from "next/link";
import { Phone, ArrowRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { getBlogsByCluster } from "@/data/blog-posts";
import { ALL_SERVICES } from "@/data/services";

interface BlogSidebarProps {
  post: BlogPost;
}

const CLUSTER_LABELS: Record<string, string> = {
  "ac-repair": "AC Repair Guide",
  "refrigerator-repair": "Refrigerator Guide",
  maintenance: "Maintenance Guide",
};

export default function BlogSidebar({ post }: BlogSidebarProps) {
  /* Resolve related services */
  const relatedServices = post.relatedServiceSlugs
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  /* Resolve cluster siblings */
  const clusterPosts = post.cluster
    ? getBlogsByCluster(post.cluster, post.slug)
    : [];

  return (
    <aside className="space-y-6" aria-label="Blog sidebar">
      {/* ── Table of Contents ────────────────── */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
          Table of Contents
        </h4>
        <nav aria-label="Article sections">
          <ol className="space-y-2.5">
            {post.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="block text-sm text-gray-500 hover:text-primary transition-colors duration-200 leading-snug"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* ── Cluster: Related in this topic ──── */}
      {clusterPosts.length > 0 && (
        <div className="rounded-2xl border border-primary/10 bg-primary-light/30 p-5 sm:p-6">
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
            Related in this Topic
          </h4>
          <p className="text-xs text-gray-400 mb-4">
            {post.cluster ? CLUSTER_LABELS[post.cluster] || "Guide" : "Guide"} series
          </p>
          <ul className="space-y-2.5">
            {clusterPosts.map((cp) => (
              <li key={cp.slug}>
                <Link
                  href={`/blog/${cp.slug}`}
                  className="group flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  <BookOpen
                    size={12}
                    className="mt-1 text-primary/40 group-hover:text-primary flex-shrink-0 transition-colors"
                  />
                  <span className="leading-snug">{cp.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Related Services ─────────────────── */}
      {relatedServices.length > 0 && (
        <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
            Related Services
          </h4>
          <ul className="space-y-2">
            {relatedServices.map((service) =>
              service ? (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="group flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    <ArrowRight
                      size={12}
                      className="text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                    />
                    {service.heroTitle} {service.heroHighlight}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}

      {/* ── Book Service CTA ─────────────────── */}
      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-5 sm:p-6 text-center">
        <p className="text-white/90 text-sm font-semibold mb-1">
          Need AC Repair?
        </p>
        <p className="text-white/60 text-xs mb-4 leading-relaxed">
          Verified technicians • Same-day service
          <br />• 90-day warranty
        </p>
        <a
          href="tel:+917303637086"
          className="inline-flex items-center justify-center gap-2 w-full
                     bg-white text-primary px-5 py-3 rounded-full
                     font-bold text-sm shadow-md hover:shadow-lg
                     transition-all duration-300"
        >
          <Phone size={15} />
          Call: +91 7303637086
        </a>
      </div>
    </aside>
  );
}

