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
  FloatingPencil,
  ABCBlocks,
  FloatingUFO,
  WaveDivider
} from "@/components/decorations/Decorations";

const lmsCourses = [
  {
    title: "Phonics & Sound Matching",
    desc: "Interactive listening drills, matching matching visual cards with sounds.",
    category: "Languages",
    rating: 5,
    progress: 75,
    price: "$49",
    img: "/images/reading-nook.webp",
    color: "primary",
  },
  {
    title: "Early Algebra Math Puzzles",
    desc: "Engaging matching grids containing numbers, sizes, and shape structures.",
    category: "Mathematics",
    rating: 5,
    progress: 90,
    price: "$59",
    img: "/images/classroom-learning.webp",
    color: "tertiary",
  },
  {
    title: "Vibrant Watercolor Canvas",
    desc: "Recorded visual painting tutorials covering color mixing and basic landscapes.",
    category: "Art",
    rating: 4,
    progress: 45,
    price: "$39",
    img: "/images/art-class.webp",
    color: "accent",
  },
  {
    title: "Astronomy for Toddlers",
    desc: "Journey through the solar system with bright planet widgets and cartoon orbits.",
    category: "Science",
    rating: 5,
    progress: 60,
    price: "$45",
    img: "/images/sensory-play.webp",
    color: "primary",
  },
];

const lmsSteps = [
  { step: "1", title: "Select a Category", desc: "Choose languages, math, logic, art, or science based on your child's age." },
  { step: "2", title: "Book a Virtual Seat", desc: "Join our high-quality recorded sessions or physical weekend meetups." },
  { step: "3", title: "Complete Action Quizzes", desc: "Unlock micro-interactive puzzles to complete progress checks." },
  { step: "4", title: "Graduation Award!", desc: "Print customizable vector achievements and cute sticker badges." },
];

export default function Home4() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fafdfa]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-12 pb-24 md:py-32 bg-gradient-to-b from-[#e8f7ec] to-[#fafdfa] overflow-hidden">
          <FloatingStar className="top-12 left-[5%] animate-float" size={45} color="#1CBBB4" />
          <FloatingPencil className="top-24 right-[8%] animate-float-slow" size={50} />
          <FloatingCloud className="top-10 left-[40%] animate-float-slow" size={100} />
          <FloatingUFO className="bottom-12 left-[8%] animate-float-slow" size={60} />
          <FloatingPlanet className="bottom-16 right-[10%] animate-float" size={55} color="#ed145b" />

          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6 text-center lg:text-left"
              >
                <span className="section-label bg-[#7dc242]/15 text-[#5ba830] font-bold">💻 Interactive Kids LMS</span>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-text-heading"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Interactive Online <br />
                  <span className="text-primary">E-Learning for Kids!</span>
                </h1>
                <p className="text-text-primary text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                  Combine cute cartoon designs with rigorous early-childhood curriculums. From puzzle worksheets to 
                  interactive audio flashcards, make child education bouncier, fun, and highly trackable.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <motion.a
                    href="/registration"
                    className="btn-primary py-3.5 px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => playPopSound()}
                  >
                    Start Free Trial
                  </motion.a>
                  <motion.a
                    href="/course-categories"
                    className="btn-secondary py-3.5 px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => playPopSound()}
                  >
                    Explore Courses
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Column Custom Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative flex justify-center"
              >
                <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl w-[90%] max-w-[500px] h-[350px] md:h-[450px] bg-white p-6">
                  {/* Laptop Mockup layout */}
                  <div className="w-full h-full bg-[#fdfefd] rounded-3xl border border-gray-150 p-4 relative overflow-hidden flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[10px] text-text-primary bg-gray-100 px-3 py-0.5 rounded-full">hsini.kids.lms</span>
                    </div>

                    <div className="my-auto space-y-4">
                      <div className="relative rounded-2xl overflow-hidden h-[180px] border border-gray-100">
                        <Image src="/images/classroom-learning.webp" alt="E-learning preview" fill className="object-cover" />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <motion.button
                            whileHover={{ scale: 1.15 }}
                            onClick={() => playPopSound()}
                            className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg text-lg border-2 border-white"
                          >
                            ▶
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-text-heading block">Chapter 3: Star Matching</span>
                          <span className="text-[10px] text-text-primary">Progress: 85% completed</span>
                        </div>
                        <span className="text-primary font-bold">🌟 Excellent!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE COURSE DIRECTORY ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label">📚 Curriculum List</span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Vibrant LMS Interactive Courses
              </h2>
              <p className="text-text-primary mt-3">
                Unlock high-fidelity educational levels. Each course includes quizzes, printable PDFs, and digital milestone rewards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {lmsCourses.map((c, index) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-[180px] w-full overflow-hidden shrink-0">
                    <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-text-heading shadow-sm">
                      {c.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-2">
                      <h4
                        className="text-lg font-bold text-text-heading group-hover:text-primary transition-colors line-clamp-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {c.title}
                      </h4>
                      <p className="text-text-primary text-xs leading-relaxed line-clamp-2">{c.desc}</p>
                    </div>

                    <div className="space-y-3 mt-4 pt-4 border-t border-gray-50">
                      {/* Progress bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-text-primary font-bold">
                          <span>Progress</span>
                          <span>{c.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${c.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-full rounded-full ${
                              c.color === "primary" ? "bg-primary" :
                              c.color === "tertiary" ? "bg-tertiary" : "bg-accent"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs pt-1">
                        <span className="text-base font-bold text-text-heading">{c.price}</span>
                        <a href="/registration" onClick={() => playPopSound()} className="text-xs font-bold text-primary hover:underline">
                          Enroll Now →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 bg-[#fafcfc] relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label bg-tertiary/10 text-tertiary">🗺️ Quick Roadmap</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                How It Works Step-By-Step
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {lmsSteps.map((step, idx) => (
                <div key={step.step} className="relative p-6 text-center space-y-4">
                  {/* Circle number */}
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-primary text-primary font-[var(--font-heading)] text-2xl font-bold flex items-center justify-center mx-auto shadow-md relative z-10">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-text-heading text-lg leading-tight">{step.title}</h4>
                  <p className="text-text-primary text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING PLANS ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label bg-accent/10 text-accent">💎 Premium Value</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Affordable Interactive Plans
              </h2>

              {/* Billing toggle */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <span className={`text-sm font-bold ${billingCycle === "monthly" ? "text-primary" : "text-text-primary"}`}>Monthly</span>
                <button
                  onClick={() => {
                    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
                    playPopSound();
                  }}
                  className="w-12 h-6 rounded-full bg-primary/20 p-1 relative flex items-center cursor-pointer"
                >
                  <motion.div
                    layout
                    className="w-4 h-4 rounded-full bg-primary"
                    style={billingCycle === "yearly" ? { alignSelf: "flex-end", marginLeft: "auto" } : {}}
                  />
                </button>
                <span className={`text-sm font-bold ${billingCycle === "yearly" ? "text-primary" : "text-text-primary"}`}>Yearly (Save 20%)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "LMS Basic Explorer", price: billingCycle === "monthly" ? "$29" : "$23", desc: "Perfect for casual e-learning with access to cartoon matching blocks.", features: ["Access to 5 Core Courses", "2 Active Puzzle Worksheets", "Printable Vector Badge", "Weekly Progress Email"] },
                { name: "Curiosity Superstar", price: billingCycle === "monthly" ? "$59" : "$47", desc: "Best for comprehensive learning pathways with live teacher groups.", features: ["Access to All LMS Courses", "Unlimited Quizzes & Worksheets", "All Custom sticker Badges", "Weekend Interactive Meetups", "Daily App Notifications"], popular: true },
                { name: "Total VIP Scholar", price: billingCycle === "monthly" ? "$99" : "$79", desc: "Maximum immersion combining online courses with physical campus days.", features: ["All Superstar Features", "1-on-1 Nurse Checkups", "Nursery Feeding Schedules", "CCTV Parent Live Stream", "Priority Campus admissions"] },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`p-8 rounded-[35px] border-2 bg-white relative transition-all flex flex-col justify-between ${
                    plan.popular ? "border-primary shadow-xl scale-105" : "border-gray-100 hover:border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                      Most Popular 🌟
                    </span>
                  )}

                  <div className="space-y-4">
                    <h4 className="font-bold text-text-heading text-xl font-[var(--font-heading)]">{plan.name}</h4>
                    <p className="text-text-primary text-xs leading-relaxed">{plan.desc}</p>
                    <div className="flex items-baseline gap-1 pt-2">
                      <span className="text-4xl font-bold text-text-heading font-[var(--font-heading)]">{plan.price}</span>
                      <span className="text-text-primary text-xs">/month</span>
                    </div>

                    <ul className="space-y-2.5 pt-6 border-t border-gray-100 text-xs">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-text-primary">
                          <span className="text-green-500 font-bold">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <motion.a
                      href="/registration"
                      onClick={() => playPopSound()}
                      className={`btn-primary block text-center py-3 w-full ${
                        plan.popular ? "bg-primary border-primary" : "bg-text-heading border-text-heading"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started Now
                    </motion.a>
                  </div>
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
