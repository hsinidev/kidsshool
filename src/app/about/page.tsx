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
  FloatingPencil,
  ABCBlocks,
  Rainbow,
  WaveDivider
} from "@/components/decorations/Decorations";

const timelineEvents = [
  { year: "2018", title: "Nursery Founded", desc: "Started as a warm local infant care center with exactly 2 dedicated nurses and 8 nursery beds." },
  { year: "2020", title: "Montessori Expansion", desc: "Added custom structured classroom environments, preschool phonics layers, and tactile arts rooms." },
  { year: "2022", title: "E-Learning & LMS Launch", desc: "Pioneered interactive puzzle dashboards, custom kids quiz cards, and digital check-ins." },
  { year: "2024", title: "Gold Standard Certification", desc: "Ranked as the region's top early learning school with state-of-the-art 24/7 CCTV and dietitian kitchens." },
];

export default function AboutPage() {
  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fffdfb]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 md:py-32 bg-gradient-to-b from-[#fff2e6] to-[#fffdfb] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[6%] animate-float" size={40} color="#f7941e" />
          <FloatingCloud className="top-12 right-[12%] animate-float-slow" size={95} />
          <ABCBlocks className="bottom-10 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={50} color="#1CBBB4" />

          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-accent/15 text-accent">🌈 Our Story & Dream</span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Growing Hearts, Shaping <br />
              <span className="text-primary">Beautiful Minds Together</span>
            </h1>
            <p className="text-text-primary text-base md:text-lg max-w-2xl mx-auto">
              At Hsini KidsCool, we believe every child is a natural scientist, artist, and leader. 
              Our mission is to nourish their early potential in a beautiful, safe, and modern environment.
            </p>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Images */}
              <div className="relative grid grid-cols-2 gap-4">
                <div className="rounded-[30px] overflow-hidden shadow-lg h-[280px] relative">
                  <Image src="/images/graduation-preschool.webp" alt="Preschool graduation milestones" fill className="object-cover" />
                </div>
                <div className="rounded-[30px] overflow-hidden shadow-lg h-[240px] mt-8 relative">
                  <Image src="/images/baby-toddler-yoga.webp" alt="Baby toddler yoga and wellness" fill className="object-cover" />
                </div>
              </div>

              {/* Right text */}
              <div className="space-y-6">
                <span className="section-label bg-primary/10 text-primary">🎯 Mission Core</span>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-text-heading"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Core Pillars of Early Care
                </h2>
                <p className="text-text-primary text-sm leading-relaxed">
                  We base our specialized teaching programs on three core values: loving care, interactive playing, 
                  and systematic educational milestones. Your children discover their boundaries, respect peers, 
                  and build strong language and logical tools.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "🌈 Loving Compassion First", desc: "Every nursery caregiver is trained in pediatric care, child behavior, and emotional safety." },
                    { title: "🧩 Learning Through Doing", desc: "We replace absolute memorization with puzzles, sandbox sciences, watercoloring, and tactile toys." },
                    { title: "🔒 Rigorous Safety Frameworks", desc: "Continuous double check-ins, medical-grade clean rooms, and parent tracking apps." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-2xl bg-bg-soft border border-gray-100">
                      <span className="text-2xl mt-1">✨</span>
                      <div>
                        <h4 className="font-bold text-text-heading text-sm">{item.title}</h4>
                        <p className="text-text-primary text-xs mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-20 bg-[#fffcf5] relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label bg-tertiary/10 text-tertiary">📅 The Journey</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Historical Milestones
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-150 relative hover:shadow-lg transition-shadow"
                >
                  <span className="text-4xl font-bold text-primary font-[var(--font-heading)] block mb-3">
                    {event.year}
                  </span>
                  <h4 className="font-bold text-text-heading text-base leading-tight mb-2">
                    {event.title}
                  </h4>
                  <p className="text-text-primary text-xs leading-relaxed">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES CAROUSEL ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto mb-16">
              <span className="section-label bg-accent/10 text-accent">🌈 Our Promise</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Voted Best Preschool Learning Center
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Active Playground", desc: "5000+ sqft of cushioned outdoor lawns containing slides, climbing walls, and cute animal sandpits.", icon: "🛹" },
                { title: "Organic Meals Only", desc: "Non-GMO fresh ingredients, seasonal vegetable mashes, and customized pediatric meal charts.", icon: "🥦" },
                { title: "Digital Daily Log", desc: "Direct notifications covering nap times, diaper changes, and eating intervals sent to your phone.", icon: "📲" },
              ].map((val) => (
                <div key={val.title} className="p-8 rounded-[35px] border-2 border-dashed border-gray-200 hover:border-primary transition-colors bg-white">
                  <div className="text-5xl mb-4">{val.icon}</div>
                  <h4 className="text-lg font-bold text-text-heading mb-2 font-[var(--font-heading)]">{val.title}</h4>
                  <p className="text-text-primary text-xs leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
