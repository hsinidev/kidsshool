"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FloatingCloud,
  FloatingStar,
  FloatingRocket,
  FloatingPlanet,
} from "./decorations/Decorations";

const slides = [
  {
    bg: "linear-gradient(135deg, #e0f4fb 0%, #c9e8f7 50%, #b3dcf3 100%)",
    label: "Welcome to KidsCool",
    title: "Learning\nWith Fun",
    subtitle:
      "A vibrant, nurturing environment where young minds blossom through play-based learning and creative exploration.",
    cta: "Know More",
    ctaLink: "#about",
    img: "/images/hero-nursery.webp",
  },
  {
    bg: "linear-gradient(135deg, #fef6f0 0%, #fde8d4 50%, #fcdcc4 100%)",
    label: "Special Offer",
    title: "20% Flat Off\nOn Registration",
    subtitle:
      "Enroll your child today and enjoy exclusive early-bird discounts on our premium childcare programs.",
    cta: "Register Now",
    ctaLink: "#newsletter",
    img: "/images/classroom-learning.webp",
  },
  {
    bg: "linear-gradient(135deg, #f0faf9 0%, #d5f0ee 50%, #bfe8e5 100%)",
    label: "Harmonious",
    title: "Creative Learning\nOpportunity",
    subtitle:
      "Our expert educators guide each child through personalized learning journeys, fostering curiosity and confidence.",
    cta: "Explore More",
    ctaLink: "#facilities",
    img: "/images/teacher-interaction.webp",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden" style={{ background: slide.bg }}>
      {/* ── Floating Decorations ── */}
      <FloatingCloud className="top-6 left-[5%] animate-drift-right opacity-60" size={140} />
      <FloatingCloud className="top-16 right-[10%] animate-drift-right opacity-40" size={100} />
      <FloatingStar className="top-[15%] right-[15%] animate-float" size={45} color="#f7941e" />
      <FloatingStar className="bottom-[25%] left-[8%] animate-float-reverse" size={30} color="#ed145b" />
      <FloatingPlanet className="bottom-[15%] right-[5%] animate-float-slow" size={55} />
      <FloatingRocket className="top-[10%] left-[3%] animate-float" size={65} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] md:min-h-[480px]"
          >
            {/* Text Side */}
            <div className="space-y-6 relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="section-label text-lg"
              >
                ✨ {slide.label}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-pre-line"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base md:text-lg text-text-primary max-w-lg leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <a href={slide.ctaLink} className="btn-primary text-base py-3.5 px-8">
                  {slide.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px]">
                {/* Decorative blob behind image */}
                <div className="absolute inset-0 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] bg-gradient-to-br from-primary/20 to-tertiary/20 animate-pulse-soft" />
                <Image
                  src={slide.img}
                  alt={slide.title.replace("\n", " ")}
                  fill
                  className="object-cover rounded-3xl shadow-2xl relative z-10"
                  priority
                  sizes="(max-width: 768px) 320px, 480px"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── Dots Navigation ── */}
        <div className="flex justify-center gap-3 mt-8 relative z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-10 h-3.5 bg-primary"
                  : "w-3.5 h-3.5 bg-gray-300 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
