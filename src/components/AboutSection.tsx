"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingStar, FloatingRocket, ABCBlocks } from "./decorations/Decorations";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-bg-soft overflow-hidden">
      {/* Decorations */}
      <FloatingStar className="top-12 left-[5%] animate-float" size={40} color="#f7941e" />
      <FloatingRocket className="top-8 right-[8%] animate-float-reverse" size={70} />
      <ABCBlocks className="bottom-8 right-[3%] animate-float-slow" size={60} />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Image Grid ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-5 gap-4">
              {/* Main large image */}
              <div className="col-span-3 row-span-2">
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[350px] md:h-[420px]">
                  <Image
                    src="/images/teacher-interaction.webp"
                    alt="Teacher helping children"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              {/* Top right image */}
              <div className="col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px]">
                  <Image
                    src="/images/dramatics-dressup.webp"
                    alt="Dramatics dressup activities"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
              {/* Bottom right image */}
              <div className="col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px]">
                  <Image
                    src="/images/math-stacking.webp"
                    alt="Math stacking activities"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
            </div>

            {/* Decorative border accent */}
            <div className="absolute -bottom-4 -left-4 w-40 h-40 border-4 border-primary/20 rounded-3xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 border-4 border-accent/20 rounded-3xl -z-10" />
          </motion.div>

          {/* ── Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <span className="section-label">✨ About Us</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Educate Knowledge &{" "}
              <span className="text-primary">Essential Skills!</span>
            </h2>
            <p className="text-text-primary leading-relaxed text-base md:text-lg">
              At Hsini KidsCool, we believe every child is a unique learner. Our experienced educators
              create a warm, stimulating environment where children explore, discover, and grow at
              their own pace. From creative arts to early literacy, we nurture the whole child.
            </p>
            <p className="text-text-primary leading-relaxed text-base md:text-lg">
              Our curriculum blends Montessori principles with modern teaching methods, ensuring each
              child develops critical thinking, social skills, and a lifelong love of learning.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: "🎨", text: "Creative Arts" },
                { icon: "📚", text: "Early Literacy" },
                { icon: "🧩", text: "Problem Solving" },
                { icon: "🤝", text: "Social Skills" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm font-semibold text-text-heading">
                  <span className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-lg">
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>

            <motion.a
              href="#facilities"
              className="btn-primary inline-flex mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Read More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
