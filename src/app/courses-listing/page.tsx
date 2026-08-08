"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BubbleTrailCursor, MagicDoodlePad, playPopSound } from "@/components/MagicSpells";
import {
  FloatingStar,
  FloatingPlanet,
  FloatingCloud,
  ABCBlocks,
  WaveDivider
} from "@/components/decorations/Decorations";

const catalogCourses = [
  { title: "Preschool English Phonics", desc: "Intro to vowels, sound recognition, visual cards matching.", age: "3-4", subject: "language", level: "beginner", img: "/images/reading-nook.webp", price: "$49" },
  { title: "Montessori Practical Math", desc: "Draggable grouping counts, size comparison grids.", age: "4-5", subject: "math", level: "intermediate", img: "/images/classroom-learning.webp", price: "$59" },
  { title: "Vibrant Watercolor Canvas", desc: "Washable watercolor painting lessons covering color scopes.", age: "3-4", subject: "art", level: "beginner", img: "/images/art-class.webp", price: "$39" },
  { title: "Astronomy Kids Laboratory", desc: "Solar constellations modeling, orbits widgets guides.", age: "5-6", subject: "science", level: "advanced", img: "/images/sensory-play.webp", price: "$45" },
  { title: "First Spelling Words", desc: "Build standard sentences and spell basic cartoon labels.", age: "4-5", subject: "language", level: "beginner", img: "/images/teacher-interaction.webp", price: "$35" },
];

export default function CoursesListingPage() {
  const [ageFilter, setAgeFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");

  const filtered = catalogCourses.filter((c) => {
    const matchAge = ageFilter === "all" || c.age === ageFilter;
    const matchSub = subFilter === "all" || c.subject === subFilter;
    return matchAge && matchSub;
  });

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fafdfb]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#eaf6ec] to-[#fafdfb] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#1CBBB4" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={95} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={45} color="#ed145b" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-primary/10 text-primary">📚 Catalog Filter</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Interactive Course Directory <br />
              <span className="text-tertiary">Select the Best Pathway</span>
            </h1>
          </div>
        </section>

        {/* ── CATALOG LAYOUT ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Left Column Sidebar Filters */}
              <div className="space-y-6 bg-bg-soft border border-gray-150 rounded-[35px] p-6 shrink-0 h-fit">
                <h4 className="font-bold text-text-heading text-lg font-[var(--font-heading)] border-b pb-3">Filters Catalog 🔍</h4>

                {/* Age Filter */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-text-heading block uppercase tracking-wider">Select Age Tier</span>
                  <div className="flex flex-col gap-2">
                    {["all", "3-4", "4-5", "5-6"].map((age) => (
                      <button
                        key={age}
                        onClick={() => {
                          setAgeFilter(age);
                          playPopSound();
                        }}
                        className={`text-left px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                          ageFilter === age ? "bg-primary text-white" : "bg-white text-text-primary border border-gray-100 hover:bg-gray-50"
                        }`}
                      >
                        {age === "all" ? "All Ages" : `${age} Years`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject Filter */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-text-heading block uppercase tracking-wider">Select Subject</span>
                  <div className="flex flex-col gap-2">
                    {["all", "language", "math", "art", "science"].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => {
                          setSubFilter(sub);
                          playPopSound();
                        }}
                        className={`text-left px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                          subFilter === sub ? "bg-primary text-white" : "bg-white text-text-primary border border-gray-100 hover:bg-gray-50"
                        }`}
                      >
                        {sub.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column Courses */}
              <div className="lg:col-span-3">
                <motion.div layout className="grid md:grid-cols-2 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((item) => (
                      <motion.div
                        layout
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white border border-gray-100 rounded-[30px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col justify-between"
                      >
                        <div className="relative h-[180px] w-full overflow-hidden shrink-0">
                          <Image src={item.img} alt={item.title} fill className="object-cover" />
                        </div>

                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-[10px] font-bold rounded-full">
                              {item.age} Years • {item.level.toUpperCase()}
                            </span>
                            <h3
                              className="text-lg font-bold text-text-heading group-hover:text-primary transition-colors line-clamp-1"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              {item.title}
                            </h3>
                            <p className="text-text-primary text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                          </div>

                          <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-4 text-xs font-bold">
                            <span className="text-base text-text-heading">{item.price}</span>
                            <a href="/registration" onClick={() => playPopSound()} className="text-primary hover:underline">
                              Enroll Now →
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {filtered.length === 0 && (
                  <div className="text-center py-16 bg-[#fafbfa] rounded-[35px] border border-dashed border-gray-200">
                    <span className="text-4xl block mb-2">🤷‍♂️</span>
                    <strong className="text-text-heading text-sm block">No Courses Found Matching Filters</strong>
                    <span className="text-xs text-text-primary block mt-1">Try resetting selected age or subject filters.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
