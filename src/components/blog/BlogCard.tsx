"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { calculateReadingTime, formatBlogDate } from "@/utils/blog-utils";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const readingTime = calculateReadingTime(post);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-6 sm:p-7
                   hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                   hover:border-primary/10 transition-all duration-300"
      >
        {/* Category badge */}
        <span
          className="self-start text-[10px] font-bold tracking-wide uppercase text-primary
                        bg-primary-light px-3 py-1 rounded-full"
        >
          {post.category}
        </span>

        {/* Title */}
        <h3 className="mt-4 font-bold text-primary text-lg leading-snug group-hover:text-primary-dark transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center gap-4 text-xs text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={12} />
            {formatBlogDate(post.publishDate)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} />
            {readingTime} min read
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
