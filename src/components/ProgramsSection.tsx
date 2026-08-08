"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingPencil, FloatingStar } from "./decorations/Decorations";

const programs = [
  {
    title: "Online Class",
    desc: "Interactive virtual classrooms with engaging multimedia content tailored for young learners.",
    img: "/images/classroom-learning.webp",
    color: "#ed145b",
  },
  {
    title: "Formal Tuition",
    desc: "Structured curriculum-based teaching with experienced educators for strong academic foundations.",
    img: "/images/reading-nook.webp",
    color: "#0a6375",
  },
  {
    title: "Special Tuition",
    desc: "Personalized attention programs for children who need extra support or advanced challenges.",
    img: "/images/sensory-play.webp",
    color: "#1CBBB4",
  },
  {
    title: "Preschool",
    desc: "Age-appropriate programs focusing on social skills, motor development, and creative expression.",
    img: "/images/art-class.webp",
    color: "#f7941e",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative py-20 md:py-28 bg-bg-soft overflow-hidden">
      {/* Decorations */}
      <FloatingPencil className="top-16 right-[6%] animate-float" size={50} />
      <FloatingStar className="bottom-20 left-[4%] animate-float-reverse" size={35} color="#1CBBB4" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">📚 Educational Programs</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Step By Step{" "}
            <span className="text-primary">Systematic Education</span>
          </h2>
          <p className="mt-4 text-text-primary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our comprehensive programs are designed to meet every child&apos;s unique learning needs,
            from virtual to in-person settings.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex gap-4 items-start"
            >
              {/* Image */}
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                <Image
                  src={prog.img}
                  alt={prog.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-lg font-bold mb-1.5"
                  style={{ fontFamily: "var(--font-heading)", color: prog.color }}
                >
                  {prog.title}
                </h3>
                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  {prog.desc}
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                  style={{ color: prog.color }}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
