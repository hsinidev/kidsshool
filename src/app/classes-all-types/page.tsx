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

const classTypes = [
  {
    title: "Kids Zoom-Interactive Rooms",
    desc: "Synchronous live classroom sessions matching vocabulary sounds, sharing cute puppet stories.",
    schedule: "Daily live schedules",
    icon: "📹",
    img: "/images/classroom-learning.webp",
    color: "primary",
  },
  {
    title: "Messy Sandbox Physical Workshops",
    desc: "Messy hands-on watercolor hour, plant gardening steps, sandbox construction yards at campus.",
    schedule: "Every Saturday morning",
    icon: "🎨",
    img: "/images/art-class.webp",
    color: "tertiary",
  },
  {
    title: "Weekend Specialized Tuition Circles",
    desc: "Tiny 1-on-3 specialized circles for children catching up on phonics reading or early math sizes.",
    schedule: "Saturdays & Sundays",
    icon: "🧩",
    img: "/images/reading-nook.webp",
    color: "accent",
  },
];

export default function ClassesAllTypesPage() {
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
            <span className="section-label bg-primary/10 text-primary">🏫 Preschool Classes</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Preschool Class Tiers <br />
              <span className="text-tertiary">Workshops, Live-Rooms & Tuition</span>
            </h1>
          </div>
        </section>

        {/* ── GRID SECTION ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {classTypes.map((type, idx) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => playPopSound()}
                  className="bg-[#fafdfd] border border-gray-150 rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image src={type.img} alt={type.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-bold text-text-heading shadow-sm">
                      🕒 {type.schedule}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-4xl">{type.icon}</div>
                    <h3
                      className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors font-[var(--font-heading)]"
                    >
                      {type.title}
                    </h3>
                    <p className="text-text-primary text-xs leading-relaxed">{type.desc}</p>
                    <div className="pt-2">
                      <a href="/registration" className="text-xs font-bold text-primary hover:underline">
                        Apply for Class →
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
