/* ── Blog Post Structured Data (JSON-LD) ──────────── */
/* Outputs: Article + FAQPage (optional) + BreadcrumbList */

import type { BlogPost } from "@/data/blog-posts";
import { calculateReadingTime } from "@/utils/blog-utils";
import {
  SITE_URL,
  SITE_NAME,
  OG_IMAGE,
  SITE_LOGO,
} from "@/config/site";

interface BlogJsonLdProps {
  post: BlogPost;
}

export default function BlogJsonLd({ post }: BlogJsonLdProps) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const readingTime = calculateReadingTime(post);

  /* ── Article Schema ────────────────────── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: post.author,
      /*
       * author.url should be a URL, not just a name string.
       * Pointing to the About page is the correct practice.
       */
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        /*
         * Publisher logo must be a rectangular image ≤600px wide, ≤60px tall
         * for Google News eligibility. Use the site logo, not the OG banner.
         */
        url: SITE_LOGO,
      },
    },
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    wordCount: readingTime * 200,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
  };

  /* ── FAQ Schema (if FAQs exist) ────────── */
  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  /* ── Breadcrumb Schema ─────────────────── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
