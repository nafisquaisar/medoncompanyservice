"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/data/blog-posts";
import { getRelatedBlogs } from "@/utils/blog-utils";

interface RelatedPostsProps {
  slugs: string[];
  currentSlug: string;
}

export default function RelatedPosts({ slugs, currentSlug }: RelatedPostsProps) {
  const posts: BlogPost[] = getRelatedBlogs(slugs).filter(
    (p) => p.slug !== currentSlug
  );

  if (posts.length === 0) return null;

  /* Show max 3 */
  const displayPosts = posts.slice(0, 3);

  return (
    <section aria-label="Related articles">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
          Keep Reading
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          Related Articles
        </h2>
      </motion.div>

      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
