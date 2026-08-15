import type { Metadata } from "next";
import { ALL_BLOG_POSTS } from "@/data/blog-posts";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import StickyContactCTA from "@/components/common/StickyContactCTA/StickyContactCTA";
import BlogHero from "@/components/blog/BlogHero";
import BlogListClient from "@/components/blog/BlogListClient";

/* ── Page-specific metadata ──────────────────────── */
export const metadata: Metadata = {
  title: "Blog – AC Repair Tips & Appliance Maintenance Guides",
  description:
    "Expert AC repair tips, refrigerator troubleshooting, electrical safety guides, and appliance maintenance advice for homeowners in Mahipalpur and nearby areas. By Medon Company.",
  keywords: [
    "AC repair tips",
    "AC maintenance guide",
    "refrigerator repair tips",
    "appliance repair Delhi",
    "AC servicing tips Delhi",
    "home repair guides",
    "appliance maintenance tips",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog – AC Repair Tips & Maintenance Guides | Medon Company",
    description:
      "Expert AC repair tips, refrigerator troubleshooting, and appliance maintenance guides for Mahipalpur and nearby area homeowners.",
    url: "/blog",
    type: "website",
  },
};

/* ── Blog Listing Page ───────────────────────────── */
export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <BlogHero />

        <section className="py-16 sm:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogListClient posts={ALL_BLOG_POSTS} />
          </div>
        </section>
      </main>

      <Footer />
      <StickyContactCTA />
    </>
  );
}
