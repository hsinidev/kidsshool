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

const securityStandards = [
  {
    title: "Encrypted CCTV Feeds",
    desc: "Every registered parent gains private login keys to stream high-resolution cameras inside nap rooms, playgrounds, and learning yards.",
    icon: "📹",
    img: "/images/classroom-learning.webp",
    badge: { icon: "📹", title: "CCTV Active", text: "24/7 Encrypted Stream" }
  },
  {
    title: "Double Face-Scan Check-In",
    desc: "We enforce face scanners paired with matching parent badges at entrance gates. Only authorized guardians can trigger exit passes.",
    icon: "🔒",
    img: "/images/parent-teacher-meeting.webp",
    badge: { icon: "🔒", title: "Face ID Match", text: "Authorized Entrance Only" }
  },
  {
    title: "Pediatric First Aid Licences",
    desc: "100% of our educational and caregiving team maintains active infant CPR, pediatric first aid, and first-responder certifications.",
    icon: "🏥",
    img: "/images/pediatric-checkup.webp",
    badge: { icon: "🏥", title: "Medical Staff", text: "Pediatric CPR Licensed" }
  },
  {
    title: "Emergency Preparedness & Clean Air",
    desc: "Active evacuation drills run monthly. Medical-grade HEPA filters circulate fresh air continuously, reducing microbes entirely.",
    icon: "🚨",
    img: "/images/safety-drill.webp",
    badge: { icon: "🚨", title: "Drill Standards", text: "Active Monthly Drills" }
  },
];

export default function ChildSafetyPage() {
  const [activeIdx, setActiveIdx] = useState(0);

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
            <span className="section-label bg-primary/10 text-primary">🔒 Safety Commitment</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Child's Physical Safety <br />
              <span className="text-tertiary">Our Absolute Priority</span>
            </h1>
            <p className="text-text-primary text-base">
              We understand that choosing a preschool demands rigorous safety standards. We combine state-of-the-art 
              CCTV streams, secure gate scanners, and medical first-aid certifications to ensure absolute protection.
            </p>
          </div>
        </section>

        {/* ── SECURITY GRID ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column Standards */}
              <div className="space-y-6">
                {securityStandards.map((std, idx) => (
                  <motion.div
                    key={std.title}
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
                    className={`flex gap-5 p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                      activeIdx === idx
                        ? "bg-[#fafdf9] border-primary/20 shadow-md translate-x-2"
                        : "bg-[#fffbf7] border-[#ffe9d2] hover:bg-bg-soft"
                    }`}
                  >
                    <div className={`text-4xl shrink-0 mt-1 transition-transform duration-300 ${
                      activeIdx === idx ? "scale-110" : ""
                    }`}>{std.icon}</div>
                    <div className="space-y-1">
                      <h3
                        className={`text-lg font-bold transition-colors duration-300 ${
                          activeIdx === idx ? "text-primary" : "text-text-heading"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {std.title}
                      </h3>
                      <p className="text-text-primary text-xs leading-relaxed">{std.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column Image Mockup */}
              <div className="relative flex justify-center">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative h-[380px] md:h-[450px] w-full max-w-[500px] bg-gray-50 border border-gray-100">
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
                        src={securityStandards[activeIdx].img}
                        alt={securityStandards[activeIdx].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Floating badge */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-3xl shadow-lg border border-gray-100 flex items-center gap-3 z-10"
                    >
                      <span className="text-2xl">{securityStandards[activeIdx].badge.icon}</span>
                      <div className="text-left text-[10px]">
                        <span className="font-bold text-text-heading block">{securityStandards[activeIdx].badge.title}</span>
                        <span className="text-text-primary block">{securityStandards[activeIdx].badge.text}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
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
