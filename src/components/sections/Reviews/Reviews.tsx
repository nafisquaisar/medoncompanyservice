"use client";

import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ALL_REVIEWS, AGGREGATE_RATING } from "@/data/reviews";

const Reviews = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="mb-14 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Real feedback from customers who trust Medon Company for their appliance repair needs
            across Mahipalpur, Vasant Kunj, Aerocity, and Vasant Vihar.
          </p>

          {/* Aggregate Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 inline-flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-full px-5 py-2.5"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(AGGREGATE_RATING.ratingValue)
                    ? "text-amber-400 fill-amber-400"
                    : "text-amber-200 fill-amber-200"}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-amber-700">
              {AGGREGATE_RATING.ratingValue}/5
            </span>
            <span className="text-xs text-amber-600">
              from {AGGREGATE_RATING.reviewCount}+ verified reviews
            </span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ALL_REVIEWS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <ReviewCard
                name={item.name}
                role={item.role}
                review={item.review}
                rating={item.rating}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
