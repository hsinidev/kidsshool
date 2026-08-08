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

const careTimeline = [
  { time: "09:00 AM", title: "Morning Health & Temperature Check", desc: "Our on-campus RN scans temperatures and performs checks for any physical rashes or dental discomforts." },
  { time: "11:30 AM", title: "Custom Pureed Feedings", desc: "Dietitian recipes are fresh steamed and served under strict parent logs (e.g. no gluten, formula amounts)." },
  { time: "01:00 PM", title: "Quiet Sleeptime Monitoring", desc: "Infants are rocked in silent nurseries with soft white noise machines and breathing sensor pads." },
  { time: "03:30 PM", title: "Interactive Sensory Crawl", desc: "Soft blocks building, textures touching, and visual flashcard drills under 1-on-1 counselor guidance." },
];

const activeImg = [
  "/images/pediatric-checkup.webp",
  "/images/baking-class.webp",
  "/images/naptime-cozy.webp",
  "/images/math-stacking.webp"
];

export default function IndividualCarePage() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fffdf9]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#fff0f4] to-[#fffdf9] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#ed145b" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={90} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={45} color="#ffd700" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-primary/10 text-primary">🧸 Warm Care Philosophy</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Custom Diaper, Sleep & Feed <br />
              <span className="text-tertiary">Tracked Digitally in Real-Time</span>
            </h1>
            <p className="text-text-primary text-base">
              Every child has a unique natural cycle. We replace rigid preschool schedules with customized baby nap 
              intervals, organic puree kitchens, and instant parent application notifications.
            </p>
          </div>
        </section>

        {/* ── DETAILS SECTION ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column Timeline */}
              <div className="space-y-6 relative before:absolute before:left-[26px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-150">
                {careTimeline.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onMouseEnter={() => {
                      if (activeIdx !== idx) {
                        setActiveIdx(idx);
                        playPopSound();
                      }
                    }}
                    onClick={() => {
                      setActiveIdx(idx);
                      playPopSound();
                    }}
                    className={`relative pl-14 pr-4 py-4 rounded-3xl flex gap-4 transition-all duration-300 cursor-pointer ${
                      activeIdx === idx
                        ? "bg-[#fafdf9] border border-primary/20 shadow-md translate-x-2"
                        : "border border-transparent hover:bg-bg-soft"
                    }`}
                  >
                    <div className={`absolute left-[10px] top-5 w-8 h-8 rounded-full border-4 border-white shadow flex items-center justify-center font-bold text-white text-xs transition-all duration-350 ${
                      activeIdx === idx ? "bg-primary scale-110 shadow-primary/20" : "bg-gray-300"
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 font-bold text-[10px] rounded-full mb-1 transition-colors duration-300 ${
                        activeIdx === idx ? "bg-primary/20 text-primary" : "bg-accent/10 text-accent"
                      }`}>
                        {step.time}
                      </span>
                      <h4 className={`font-bold text-text-heading text-base leading-tight transition-colors duration-300 ${
                        activeIdx === idx ? "text-primary" : ""
                      }`}>{step.title}</h4>
                      <p className="text-text-primary text-xs mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column Image */}
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative h-[400px] w-full bg-gray-50 border border-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={activeImg[activeIdx]}
                        alt={careTimeline[activeIdx].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Overlay bubble */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-lg border border-gray-100 flex items-center gap-3 z-10">
                    <span className="text-3xl">🧸</span>
                    <div className="text-left text-[10px]">
                      <span className="font-bold text-text-heading block">Nurse Assigned</span>
                      <span className="text-text-primary">1-on-1 Active Supervision</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
