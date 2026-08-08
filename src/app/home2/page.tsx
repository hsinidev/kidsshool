"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BubbleTrailCursor, MagicDoodlePad } from "@/components/MagicSpells";
import {
  FloatingStar,
  FloatingPlanet,
  FloatingCloud,
  FloatingPencil,
  ABCBlocks,
  WaveDivider
} from "@/components/decorations/Decorations";

const classItems = [
  {
    title: "Preschool Early Literacy",
    desc: "A fun-filled introduction to speech sounds, vocabulary building, and basic sentence construction.",
    age: "3-4 Years",
    time: "9:00 AM - 11:30 AM",
    price: "$290/mo",
    category: "language",
    img: "/images/classroom-learning.webp",
    color: "primary",
  },
  {
    title: "Sensory Watercolor Art",
    desc: "Nurturing creative expression and finger-paint textures, encouraging spatial discovery and freedom.",
    age: "2-3 Years",
    time: "1:00 PM - 3:00 PM",
    price: "$240/mo",
    category: "art",
    img: "/images/art-class.webp",
    color: "tertiary",
  },
  {
    title: "Montessori Practical Math",
    desc: "Hands-on puzzle systems detailing sizes, basic grouping counts, and tactile measurements.",
    age: "4-5 Years",
    time: "10:00 AM - 12:30 PM",
    price: "$320/mo",
    category: "montessori",
    img: "/images/sensory-play.webp",
    color: "accent",
  },
  {
    title: "Fun Activity Workshop",
    desc: "Combining outdoor kinetic games with indoor role-playing that boosts speech and motor controls.",
    age: "5-6 Years",
    time: "2:30 PM - 5:00 PM",
    price: "$280/mo",
    category: "montessori",
    img: "/images/outdoor-play.webp",
    color: "primary",
  },
];

export default function Home2() {
  const [filter, setFilter] = useState("all");

  const filteredClasses =
    filter === "all" ? classItems : classItems.filter((c) => c.category === filter);

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-bg-soft">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-12 pb-24 md:py-32 bg-gradient-to-b from-[#e3fafc] to-bg-soft overflow-hidden">
          {/* Floaties */}
          <FloatingStar className="top-10 left-[6%] animate-float" size={50} color="#ed145b" />
          <FloatingPencil className="top-24 right-[10%] animate-float-slow" size={60} />
          <ABCBlocks className="bottom-16 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-10 right-[8%] animate-float" size={50} color="#ffd700" />

          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6 text-center lg:text-left"
              >
                <span className="section-label bg-accent/10 text-accent">🌈 Hsini Play Academy</span>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-text-heading"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  We Learn, Play & <br />
                  <span className="text-primary">Grow Together!</span>
                </h1>
                <p className="text-text-primary text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                  Welcome to our interactive Kids Academy! Through structural play, Montessori techniques, 
                  and modern e-learning blocks, we empower children to discover their creative sparks.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <motion.a
                    href="/registration"
                    className="btn-primary py-3.5 px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Enroll Your Kid
                  </motion.a>
                  <motion.a
                    href="#classes"
                    className="btn-secondary py-3.5 px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Our Classes
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl w-[90%] max-w-[500px] h-[350px] md:h-[450px]">
                  <Image
                    src="/images/hero-nursery.webp"
                    alt="Academics at nursery school"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-tertiary/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-36 h-36 bg-accent/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── QUICK ADVANTAGES ── */}
        <section className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Active Literacy",
                  desc: "Phonics and storytelling classes that spark visual communication and grammar concepts early.",
                  bg: "bg-primary/5",
                  border: "border-primary",
                  icon: "📚",
                },
                {
                  title: "Expert Mentorship",
                  desc: "Our highly trained early educators offer compassionate guidance, keeping children safe and curious.",
                  bg: "bg-tertiary/5",
                  border: "border-tertiary",
                  icon: "👩‍🏫",
                },
                {
                  title: "Tactile Learning",
                  desc: "Draggable widgets, puzzle layouts, and gardening setups that teach natural sciences directly.",
                  bg: "bg-accent/5",
                  border: "border-accent",
                  icon: "🎨",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-8 rounded-3xl border-2 ${card.border} ${card.bg} hover:shadow-lg transition-shadow duration-300 relative overflow-hidden`}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3
                    className="text-xl font-bold text-text-heading mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-text-primary text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILTERABLE CLASSES ── */}
        <section id="classes" className="py-20 bg-bg-soft relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">📚 Curriculum Core</span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Featured Academy Programs
              </h2>
              <p className="text-text-primary mt-3">
                Choose the perfect educational tier designed for your child's cognitive milestone.
              </p>

              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {["all", "montessori", "language", "art"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      filter === cat
                        ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                        : "bg-white text-text-primary border border-gray-150 hover:bg-gray-50"
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Class Cards Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredClasses.map((item, index) => (
                  <motion.div
                    layout
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row group"
                  >
                    {/* Image */}
                    <div className="relative w-full md:w-[45%] h-[200px] md:h-auto shrink-0 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Text */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          item.color === "primary" ? "bg-primary/10 text-primary" :
                          item.color === "tertiary" ? "bg-tertiary/10 text-tertiary" : "bg-accent/10 text-accent"
                        }`}>
                          {item.age}
                        </span>
                        <h4
                          className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-text-primary text-xs leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-4">
                        <span className="text-lg font-bold text-text-heading">{item.price}</span>
                        <a href="/registration" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                          Enroll Now →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ── STATS / TIMELINE ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label bg-tertiary/10 text-tertiary">🎓 Growth Path</span>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-text-heading mt-2 mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Developmental Milestones
                </h2>
                <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                  {[
                    { title: "Stage 1: Adaptive Play (Ages 1-3)", desc: "Sensory discovery labs, motor controls, basic word correlation." },
                    { title: "Stage 2: Structured Academics (Ages 3-5)", desc: "Phonics, counting circles, physical coordination, and teamwork." },
                    { title: "Stage 3: Creative Leadership (Ages 5-6)", desc: "Interactive watercolor, early mathematics, musical instruments, and speech." },
                  ].map((step, idx) => (
                    <div key={idx} className="relative pl-10 flex gap-4">
                      <div className="absolute left-0 top-1.5 w-7.5 h-7.5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-text-heading text-base leading-tight">{step.title}</h4>
                        <p className="text-text-primary text-xs mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlapping grid */}
              <div className="relative grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden shadow-lg h-[240px] relative">
                  <Image src="/images/classroom-learning.webp" alt="Children learning" fill className="object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-[200px] mt-8 relative">
                  <Image src="/images/art-class.webp" alt="Children painting" fill className="object-cover" />
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
