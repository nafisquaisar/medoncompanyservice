"use client";

import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "AC Service Customer",
    review:
      "Medon made booking and tracking service super easy. Technician was professional and on time.",
    rating: 5,
  },
  {
    name: "Anita Verma",
    role: "Washing Machine Repair",
    review:
      "Very smooth experience. Support team kept me updated at every step.",
    rating: 4,
  },
  {
    name: "Vikas Kumar",
    role: "Refrigerator Repair",
    review:
      "Transparent pricing and skilled technician. Highly recommended!",
    rating: 5,
  },
];

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
            Real feedback from customers who trust Medon for their service needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item, index) => (
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
