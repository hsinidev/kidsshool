"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingStar, FloatingPlanet } from "./decorations/Decorations";

const facilities = [
  {
    title: "Class Room",
    desc: "Modern, well-equipped classrooms designed to inspire curiosity and foster interactive learning in a safe, engaging environment.",
    img: "/images/classroom-learning.webp",
    color: "#ed145b",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="8" y="12" width="32" height="24" rx="3" fill="#ed145b" opacity={0.15} />
        <rect x="12" y="16" width="24" height="16" rx="2" fill="#ed145b" opacity={0.3} />
        <path d="M18 36v4M30 36v4M14 40h20" stroke="#ed145b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="#ed145b" opacity={0.6} />
      </svg>
    ),
  },
  {
    title: "Transport",
    desc: "Safe, reliable door-to-door transport service with GPS tracking and trained drivers to ensure your child's secure commute.",
    img: "/images/transport-bus.webp",
    color: "#0a6375",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="6" y="16" width="36" height="18" rx="4" fill="#0a6375" opacity={0.15} />
        <rect x="10" y="12" width="28" height="18" rx="3" fill="#0a6375" opacity={0.3} />
        <circle cx="16" cy="34" r="3" fill="#0a6375" opacity={0.6} />
        <circle cx="32" cy="34" r="3" fill="#0a6375" opacity={0.6} />
        <rect x="14" y="16" width="8" height="8" rx="1" fill="#0a6375" opacity={0.4} />
        <rect x="26" y="16" width="8" height="8" rx="1" fill="#0a6375" opacity={0.4} />
      </svg>
    ),
  },
  {
    title: "Play Area",
    desc: "Spacious outdoor and indoor play areas with modern, safe equipment to encourage physical development and active fun.",
    img: "/images/outdoor-play.webp",
    color: "#1CBBB4",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path d="M24 8l4 8h-8l4-8z" fill="#1CBBB4" opacity={0.4} />
        <rect x="22" y="16" width="4" height="20" fill="#1CBBB4" opacity={0.3} />
        <path d="M12 24c4-4 8 0 12-4s8 0 12-4" stroke="#1CBBB4" strokeWidth="2.5" fill="none" opacity={0.5} />
        <circle cx="14" cy="36" r="3" fill="#1CBBB4" opacity={0.5} />
        <circle cx="34" cy="36" r="3" fill="#1CBBB4" opacity={0.5} />
        <rect x="10" y="36" width="28" height="3" rx="1.5" fill="#1CBBB4" opacity={0.2} />
      </svg>
    ),
  },
  {
    title: "Healthy Foods",
    desc: "Nutritious, balanced meals prepared fresh daily with organic ingredients, catering to all dietary needs and preferences.",
    img: "/images/healthy-meals.webp",
    color: "#f7941e",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <ellipse cx="24" cy="30" rx="16" ry="8" fill="#f7941e" opacity={0.15} />
        <ellipse cx="24" cy="28" rx="14" ry="6" fill="#f7941e" opacity={0.3} />
        <circle cx="18" cy="26" r="3" fill="#f7941e" opacity={0.5} />
        <circle cx="28" cy="24" r="4" fill="#f7941e" opacity={0.4} />
        <path d="M24 12c-2 4-6 6-6 10M24 12c2 4 6 6 6 10" stroke="#f7941e" strokeWidth="1.5" fill="none" opacity={0.4} />
        <circle cx="24" cy="10" r="2" fill="#7dc242" opacity={0.6} />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

export default function FacilitiesGrid() {
  return (
    <section id="facilities" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorations */}
      <FloatingStar className="top-16 left-[6%] animate-float" size={45} color="#f7941e" />
      <FloatingPlanet className="top-12 right-[5%] animate-float-slow" size={55} color="#8B4513" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">🏫 School Facilities</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Engaging & Spacious{" "}
            <span className="text-primary">School Campus</span>
          </h2>
          <p className="mt-4 text-text-primary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our campus is designed with your child&apos;s safety, comfort, and development in mind.
            Every corner is an opportunity to learn and grow.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-50"
              style={{ borderTop: `4px solid ${f.color}` }}
            >
              {/* Icon */}
              <div className="pt-6 px-6 flex justify-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: `${f.color}10` }}
                >
                  {f.icon}
                </div>
              </div>

              {/* Image */}
              <div className="px-4 pt-4">
                <div className="relative h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                {/* Wavy separator */}
                <svg className="w-full h-3 mb-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path
                    d="M0 6 Q25 0 50 6 T100 6 T150 6 T200 6"
                    stroke={f.color}
                    strokeWidth="2"
                    fill="none"
                    opacity={0.4}
                  />
                </svg>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: f.color }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-text-primary leading-relaxed mb-4">
                  {f.desc}
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold text-white transition-colors"
                  style={{ background: f.color }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
