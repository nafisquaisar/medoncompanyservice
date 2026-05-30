/* ── Blog Utility Functions ───────────────────────── */

import type { BlogPost } from "@/data/blog-posts";
import { ALL_BLOG_POSTS } from "@/data/blog-posts";

/**
 * Calculate reading time in minutes based on total word count.
 * Uses 200 WPM (average web reading speed).
 */
export function calculateReadingTime(post: BlogPost): number {
  let wordCount = 0;

  // Count excerpt
  wordCount += post.excerpt.split(/\s+/).length;

  // Count sections
  for (const section of post.sections) {
    wordCount += section.heading.split(/\s+/).length;
    wordCount += stripHtml(section.content).split(/\s+/).length;

    if (section.subSections) {
      for (const sub of section.subSections) {
        wordCount += sub.heading.split(/\s+/).length;
        wordCount += stripHtml(sub.content).split(/\s+/).length;
      }
    }
  }

  // Count FAQs
  if (post.faqs) {
    for (const faq of post.faqs) {
      wordCount += faq.question.split(/\s+/).length;
      wordCount += faq.answer.split(/\s+/).length;
    }
  }

  return Math.max(1, Math.ceil(wordCount / 200));
}

/**
 * Strip HTML tags from a string for word counting.
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

/**
 * Get related blog posts by slugs.
 */
export function getRelatedBlogs(slugs: string[]): BlogPost[] {
  return slugs
    .map((slug) => ALL_BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}

/**
 * Format a date string for display.
 */
export function formatBlogDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
