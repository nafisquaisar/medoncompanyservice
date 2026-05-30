"use client";

import { useState } from "react";
import type { BlogCategory, BlogPost } from "@/data/blog-posts";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import BlogCard from "@/components/blog/BlogCard";
import { motion } from "framer-motion";

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(
    null
  );

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12 sm:mb-14">
        <BlogCategoryFilter onFilterChange={setActiveCategory} />
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-gray-400 text-sm">
            No articles found in this category yet. Check back soon!
          </p>
        </motion.div>
      )}
    </>
  );
}
