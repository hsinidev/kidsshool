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

const skills = [
  { name: "Pediatric Nursing & CPR", value: 100 },
  { name: "Montessori Play Instruction", value: 95 },
  { name: "Early Speech & Sound Matching", value: 90 },
  { name: "Sensory Sandbox Guidance", value: 95 },
];

export default function TeamDetailPage() {
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
            <span className="section-label bg-accent/15 text-accent">👩‍🏫 Teacher Profile</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Nurse Emily Thornton <br />
              <span className="text-primary">Nursery Director (RN)</span>
            </h1>
          </div>
        </section>

        {/* ── BIO SECTION ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column Portrait */}
              <div className="relative flex justify-center">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative h-[400px] w-full max-w-[450px] border-8 border-white bg-white">
                  <Image
                    src="/images/teacher-portrait-1.webp"
                    alt="Nurse Emily Thornton"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column Bio Details */}
              <div className="space-y-8">
                <div>
                  <h3
                    className="text-3xl font-bold text-text-heading mb-4 font-[var(--font-heading)]"
                  >
                    Biography & Experience
                  </h3>
                  <p className="text-text-primary text-sm leading-relaxed mb-4">
                    Emily Thornton has over 12+ years of professional experience as a licensed pediatric nurse (RN). 
                    She specializes in infant sleeping rhythms, organic formula nutrition schedules, and sensory discoverings.
                  </p>
                  <p className="text-text-primary text-sm leading-relaxed">
                    She graduated from the California School of Pediatric Nursing and acts as our head campus safety auditor, 
                    overseeing standard sanitation and double-checked gate check-in protocols.
                  </p>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-4">
                  <h4 className="font-bold text-text-heading text-lg font-[var(--font-heading)]">Professional Skills 🌟</h4>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-text-heading">
                          <span>{skill.name}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="py-20 bg-[#fffcf8] border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
            <span className="text-5xl block">💬</span>
            <blockquote className="text-xl md:text-2xl font-bold text-text-heading leading-relaxed font-[var(--font-heading)]">
              "Nurse Emily has been an absolute angel for our baby Liam. Her digital log feeds keep us updated 
              on sleep intervals, food, and diapers in real-time. We are so incredibly happy with KidsCool!"
            </blockquote>
            <div>
              <strong className="text-text-heading block text-base">Sarah & David Liam's Parents</strong>
              <span className="text-xs text-text-primary">Daycare Members since 2024</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
