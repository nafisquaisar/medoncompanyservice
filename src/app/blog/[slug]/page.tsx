import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_BLOG_POSTS, getBlogBySlug } from "@/data/blog-posts";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

/* ── Static Params — pre-render all blog posts at build time ── */
export async function generateStaticParams() {
  return ALL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

/* ── Dynamic Metadata per blog post ──────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Medon Company`,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate || post.publishDate,
      authors: [post.author],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

/* ── Blog Post Page ──────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}
