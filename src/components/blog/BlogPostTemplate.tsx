import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { calculateReadingTime, formatBlogDate } from "@/utils/blog-utils";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import StickyContactCTA from "@/components/common/StickyContactCTA/StickyContactCTA";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import BlogContent from "@/components/blog/BlogContent";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ShareButtons from "@/components/blog/ShareButtons";

interface BlogPostTemplateProps {
  post: BlogPost;
}

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const readingTime = calculateReadingTime(post);

  /* Split sections: first half + CTA + second half */
  const midPoint = Math.ceil(post.sections.length / 2);
  const firstHalf = post.sections.slice(0, midPoint);
  const secondHalf = post.sections.slice(midPoint);

  return (
    <>
      <BlogJsonLd post={post} />
      <Navbar />

      <main id="main-content">
        {/* ── Article Hero / Header ──────────────── */}
        <header className="relative bg-gradient-to-br from-secondary via-white to-primary-light/30 py-12 sm:py-16 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs text-gray-400"
            >
              <Link
                href="/"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-500 truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            {/* Category badge */}
            <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-[1.15] tracking-tight">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="mt-5 flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <Calendar size={14} className="text-primary/50" />
                {formatBlogDate(post.updatedDate || post.publishDate)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <Clock size={14} className="text-primary/50" />
                {readingTime} min read
              </span>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>
        </header>

        {/* ── Article Body ───────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14">
            {/* Main content */}
            <article>
              {/* First half of sections */}
              <BlogContent sections={firstHalf} />

              {/* Mid-article CTA */}
              {secondHalf.length > 0 && (
                <div className="my-10">
                  <BlogCTA />
                </div>
              )}

              {/* Second half of sections */}
              {secondHalf.length > 0 && (
                <BlogContent sections={secondHalf} />
              )}

              {/* FAQ section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 pt-10 border-t border-gray-100">
                  <BlogFAQSection faqs={post.faqs} />
                </div>
              )}

              {/* Back to blog */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark
                             hover:gap-3 transition-all duration-300"
                >
                  <ArrowLeft size={14} />
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <BlogSidebar post={post} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Posts ───────────────────────── */}
        {post.relatedBlogSlugs.length > 0 && (
          <section className="bg-secondary py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <RelatedPosts
                slugs={post.relatedBlogSlugs}
                currentSlug={post.slug}
              />
            </div>
          </section>
        )}

        {/* ── Bottom CTA ─────────────────────────── */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogCTA />
          </div>
        </section>
      </main>

      <Footer />
      <StickyContactCTA />
    </>
  );
}
