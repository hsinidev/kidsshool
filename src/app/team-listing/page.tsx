"use client";

import React from "react";
import { motion } from "framer-motion";
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

const counselors = [
  { name: "Nurse Emily Thornton", role: "Nursery Director & Coordinator", img: "/images/teacher-portrait-1.webp", tags: "Registered RN • Infant Care Expert", border: "border-primary" },
  { name: "Miss Sarah Jenkins", role: "Montessori Early Math Instructor", img: "/images/teacher-portrait-2.webp", tags: "Ph.D. Education • Stacking Puzzles", border: "border-tertiary" },
  { name: "Mrs. Aria Montgomery", role: "watercolor Painting Director", img: "/images/teacher-portrait-3.webp", tags: "BFA Fine Arts • Washable Canvas Pro", border: "border-accent" },
];

export default function TeamListingPage() {
  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fffdfb]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#fff2e6] to-[#fffdfb] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#f7941e" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={90} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={45} color="#ed145b" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-accent/15 text-accent">👩‍🏫 Expert Staff</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Meet Our Compassionate, Certified <br />
              <span className="text-primary">Preschool Educators & Nurses</span>
            </h1>
          </div>
        </section>

        {/* ── TEAM GRID ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {counselors.map((c, idx) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => playPopSound()}
                  className="bg-[#fffdfb] border border-gray-150 rounded-[40px] p-8 text-center shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className={`w-36 h-36 rounded-full overflow-hidden mx-auto border-4 ${c.border} shadow-md relative mb-6`}>
                    <Image src={c.img} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-primary text-[10px] font-bold tracking-widest uppercase block">
                      {c.tags}
                    </span>
                    <h3
                      className="text-2xl font-bold text-text-heading group-hover:text-primary transition-colors font-[var(--font-heading)]"
                    >
                      {c.name}
                    </h3>
                    <p className="text-text-primary text-xs font-semibold">{c.role}</p>
                    <p className="text-text-primary text-xs leading-relaxed pt-3 border-t border-gray-100/50 mt-3">
                      Committed to infant emotional safety, certified in advanced pediatric health protocols, and holds over 8+ years experience.
                    </p>
                    <div className="pt-4">
                      <a href="/team-detail" className="text-xs font-bold text-primary hover:underline">
                        View Teacher Profile →
                      </a>
                    </div>
                  </div>
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
