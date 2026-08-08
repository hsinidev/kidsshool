"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingPencil, FloatingStar } from "./decorations/Decorations";

const posts = [
  {
    date: { day: "Dec 28", year: "2025" },
    title: "Adventure and Outdoor Play Zone",
    excerpt:
      "An exciting outdoor area designed for exploration, physical development, and imaginative play adventures.",
  },
  {
    date: { day: "Dec 25", year: "2025" },
    title: "Well Equipped Indoor Class Rooms",
    excerpt:
      "Modern classrooms with interactive whiteboards, comfortable seating, and a wealth of learning materials.",
  },
  {
    date: { day: "Dec 20", year: "2025" },
    title: "Education Filled With Fun & Games",
    excerpt:
      "Our unique approach blends academic learning with exciting games that keep children engaged and motivated.",
  },
];

export default function NewsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      {/* Decorations */}
      <FloatingStar className="top-12 left-[5%] animate-float" size={35} color="#f7941e" />
      <FloatingPencil className="bottom-16 left-[8%] animate-float-reverse" size={45} />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Blog Posts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-accent">📰 Latest News</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mt-3 mb-8 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              News about our{" "}
              <span className="text-tertiary">Education</span>
            </h2>

            <div className="space-y-5">
              {posts.map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-colors cursor-pointer"
                >
                  {/* Date badge */}
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-primary flex flex-col items-center justify-center text-white shadow-md">
                    <span className="text-xs font-bold">{post.date.day}</span>
                    <span className="text-[10px] opacity-80">{post.date.year}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base group-hover:text-tertiary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm mt-1 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              className="btn-primary inline-flex mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View More
            </motion.a>
          </motion.div>

          {/* Right — Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px] md:h-[450px]">
              <Image
                src="/images/classroom-learning.webp"
                alt="Children learning in classroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent/30 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
