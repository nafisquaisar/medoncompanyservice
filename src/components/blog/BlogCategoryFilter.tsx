"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { BlogCategory } from "@/data/blog-posts";
import { ALL_BLOG_CATEGORIES } from "@/data/blog-posts";

interface BlogCategoryFilterProps {
  onFilterChange: (category: BlogCategory | null) => void;
}

export default function BlogCategoryFilter({
  onFilterChange,
}: BlogCategoryFilterProps) {
  const [active, setActive] = useState<BlogCategory | null>(null);

  const handleClick = (category: BlogCategory | null) => {
    setActive(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {/* "All" pill */}
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => handleClick(null)}
        className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
          ${
            active === null
              ? "bg-primary text-white shadow-md shadow-primary/20"
              : "bg-white text-gray-500 border border-gray-100 hover:border-primary/20 hover:text-primary"
          }`}
      >
        All Posts
      </motion.button>

      {/* Category pills */}
      {ALL_BLOG_CATEGORIES.map((category) => (
        <motion.button
          key={category}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => handleClick(category)}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
            ${
              active === category
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-white text-gray-500 border border-gray-100 hover:border-primary/20 hover:text-primary"
            }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
