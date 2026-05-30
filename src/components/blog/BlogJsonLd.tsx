/* ── Blog Post Structured Data (JSON-LD) ──────────── */

import type { BlogPost } from "@/data/blog-posts";
import { calculateReadingTime } from "@/utils/blog-utils";

interface BlogJsonLdProps {
  post: BlogPost;
}

export default function BlogJsonLd({ post }: BlogJsonLdProps) {
  const url = `https://medoncompany.com/blog/${post.slug}`;
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
      url: "https://medoncompany.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Medon Company",
      url: "https://medoncompany.com",
      logo: {
        "@type": "ImageObject",
        url: "https://medoncompany.com/img/webbanner.png",
      },
    },
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    wordCount: readingTime * 200,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
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
        item: "https://medoncompany.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://medoncompany.com/blog",
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
