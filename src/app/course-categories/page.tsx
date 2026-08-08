"use client";

import React from "react";
import { motion } from "framer-motion";
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

const categories = [
  { title: "English Phonics", desc: "Vowels, word matching drills, story readalouds.", icon: "📚", count: "12 Courses", color: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white" },
  { title: "Montessori Logic", desc: "Stacking shapes, grouping counts, number puzzles.", icon: "🧩", count: "8 Courses", color: "bg-tertiary/10 text-tertiary border-tertiary/20 hover:bg-tertiary hover:text-white" },
  { title: "Watercolor Arts", desc: "Washable canvas projects, organic textures mixing.", icon: "🎨", count: "14 Courses", color: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white" },
  { title: "Astronomy Labs", desc: "Planet spheres models, constellation maps orbits.", icon: "🚀", count: "6 Courses", color: "bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white" },
  { title: "Nature & Biology", desc: "Seed gardening steps, insect classification puzzles.", icon: "🌱", count: "9 Courses", color: "bg-tertiary/10 text-tertiary border-tertiary/20 hover:bg-tertiary hover:text-white" },
  { title: "Nursery Rhythm Beats", desc: "Clapping patterns, drums, singing circles.", icon: "🥁", count: "11 Courses", color: "bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white" },
];

export default function CourseCategoriesPage() {
  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#FAFDFD]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#eaf6ec] to-[#FAFDFD] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#1CBBB4" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={90} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={45} color="#ed145b" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-[#7dc242]/15 text-[#5ba830] font-bold">📂 Spheres</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Interactive LMS Learning Spheres <br />
              <span className="text-primary">Curated for Developing Minds</span>
            </h1>
            <p className="text-text-primary text-base">
              Explore our circular graphic subjects. Each category combines visual video pathways with printable 
              puzzle worksheets and sticker milestones.
            </p>
          </div>
        </section>

        {/* ── CATEGORIES GRID ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => playPopSound()}
                  className={`p-8 rounded-[40px] border-2 border-solid cursor-pointer text-center space-y-4 transition-all duration-300 ${cat.color}`}
                >
                  <div className="text-6xl mb-2">{cat.icon}</div>
                  <h3
                    className="text-2xl font-bold font-[var(--font-heading)]"
                  >
                    {cat.title}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-90 max-w-xs mx-auto">{cat.desc}</p>
                  <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold shadow-sm">
                    {cat.count}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
