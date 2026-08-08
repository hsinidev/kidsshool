"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Rainbow } from "./decorations/Decorations";

const activities = [
  {
    title: "Physical Activities",
    desc: "Outdoor games, sports, and movement exercises that build strength, coordination, and teamwork.",
    img: "/images/outdoor-play.webp",
    color: "#ed145b",
  },
  {
    title: "Team Activities",
    desc: "Collaborative projects and group play that develop communication, empathy, and social awareness.",
    img: "/images/teacher-interaction.webp",
    color: "#1CBBB4",
  },
  {
    title: "Individual Activity",
    desc: "Focused solo tasks like puzzles, reading, and art that nurture independence and self-expression.",
    img: "/images/reading-nook.webp",
    color: "#f7941e",
  },
];

export default function ActivitiesGallery() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <Rainbow className="top-8 right-[6%] animate-float-slow hidden md:block" size={100} />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">🎯 Activity Programs</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Smart{" "}
            <span className="text-primary">Activities</span>
          </h2>
          <p className="mt-4 text-text-primary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A balanced mix of physical, collaborative, and individual activities to develop the whole child.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-full max-w-[300px]">
                {/* Tilted border decoration */}
                <div
                  className="absolute inset-0 rounded-3xl border-4 transform rotate-3 transition-transform duration-500 group-hover:rotate-6"
                  style={{ borderColor: a.color, opacity: 0.3 }}
                />
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[220px]">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="300px"
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ background: a.color }}
                  />
                </div>
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: a.color }}
              >
                {a.title}
              </h3>
              <p className="text-sm text-text-primary leading-relaxed max-w-xs mx-auto">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
