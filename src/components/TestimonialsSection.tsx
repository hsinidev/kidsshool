"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingRocket } from "./decorations/Decorations";

const testimonials = [
  {
    name: "Noah Emma",
    role: "Business Parent",
    text: "KidsCool has been an absolute blessing for our family. My daughter has blossomed academically and socially. The teachers are caring, creative, and truly passionate about nurturing each child. I couldn't ask for a better place!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Working Mother",
    text: "The progress our son has made since joining KidsCool is remarkable. He went from a shy toddler to a confident, curious learner. The Montessori approach combined with creative arts keeps him excited to go to school every day.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Tech Professional",
    text: "We've tried multiple daycare centers, but KidsCool stands out for its attention to safety, nutrition, and genuine care. The daily updates and transparent communication give us complete peace of mind while at work.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorations */}
      <FloatingRocket className="top-8 left-[4%] animate-float hidden md:block" size={70} />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">💝 Happy Parents</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="text-primary">Testimonials</span>
          </h2>
          <p className="mt-4 text-text-primary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Hear what happy parents say about their experience with Hsini KidsCool.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Pink speech bubble */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-10 text-white relative shadow-xl">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-base md:text-lg leading-relaxed opacity-95 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Dots separator */}
                <div className="flex gap-1 mt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === current
                          ? "bg-white w-6"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Triangle pointer */}
                <div className="absolute -bottom-4 right-20 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-primary" />
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-8 ml-8 md:ml-12">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center text-white text-xl font-bold shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4
                    className="font-bold text-primary text-lg"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    -{testimonial.name}
                  </h4>
                  <p className="text-sm text-text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
