"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    role: "AC Repair Customer – Mahipalpur",
    review: "Medon Company made booking and tracking service super easy. Technician was professional and on time. Transparent pricing — no surprises.",
    rating: 5,
  },
  {
    name: "Anita Verma",
    role: "Refrigerator Repair – Vasant Kunj",
    review: "Very smooth experience. Support team kept me updated at every step. My fridge is working perfectly now.",
    rating: 5,
  },
  {
    name: "Vikas Kumar",
    role: "Electrical Service – Mahipalpur",
    review: "Transparent pricing and skilled technician. Got my switchboard upgraded to modular in just 2 hours. Highly recommended!",
    rating: 5,
  },
];

export default function ServiceReviews() {
  return (
    <section className="py-20 sm:py-24 bg-secondary" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                         transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={
                      j < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-gray-200 text-gray-200"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm text-primary">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
