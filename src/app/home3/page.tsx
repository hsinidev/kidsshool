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
  Rainbow,
  WaveDivider
} from "@/components/decorations/Decorations";

const daycareServices = [
  {
    title: "Infant Care & Cozy Sleep",
    desc: "A warm, nurturing nursery space for babies aged 3 to 12 months with personalized nap scheduling.",
    icon: "🍼",
    color: "primary",
  },
  {
    title: "Sensory & Water Play",
    desc: "Tactile play spaces filled with soft molds, floating shapes, and textures that stimulate motor neural paths.",
    icon: "💦",
    color: "tertiary",
  },
  {
    title: "Toddler Learning Labs",
    desc: "Basic words, coloring exercises, and nursery rhyme circles to encourage language skills early.",
    icon: "🧸",
    color: "accent",
  },
  {
    title: "Daily Nutrition Tracking",
    desc: "Organic baby meals, precise feeding timers, and direct updates sent to the parents' app.",
    icon: "🍎",
    color: "primary",
  },
];

const careSchedule = [
  { time: "08:00 AM", title: "Warm Welcome & Health Check", desc: "Gentle temperature scan, greeting smiles, and comfort hand-off." },
  { time: "09:30 AM", title: "Morning Nutrition & Milk", desc: "Formula or breastmilk feedings paired with soft organic fruit mashes." },
  { time: "10:30 AM", title: "Nap Time Interval 1", desc: "Cozy dim rooms with soft white noise machines and continuous monitoring." },
  { time: "12:30 PM", title: "Sensory Play & Music", desc: "Soft blocks stacking, finger puppet theater, and active baby crawling zones." },
  { time: "03:00 PM", title: "Outdoor Stroller Fresh Air", desc: "Safe group walk in secure courtyard to catch sweet afternoon breeze." },
];

export default function Home3() {
  const [activeTab, setActiveTab] = useState("sleep");

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fffdf9]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 md:py-32 bg-gradient-to-b from-[#fff0f3] to-[#fffdf9] overflow-hidden">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#ed145b" />
          <FloatingCloud className="top-8 right-[12%] animate-float-slow" size={90} />
          <Rainbow className="bottom-8 left-[4%] animate-float-slow" size={110} />
          <FloatingPlanet className="bottom-12 right-[10%] animate-float" size={50} color="#ffd700" />

          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6 text-center lg:text-left"
              >
                <span className="section-label bg-primary/10 text-primary">🧸 Warm & Safe Infant Care</span>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-text-heading"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Pure Love, Gentle Care <br />
                  <span className="text-tertiary">For Your Precious One</span>
                </h1>
                <p className="text-text-primary text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                  Hsini KidsCool Daycare provides a secure, loving home away from home. Our licensed pediatric nurse 
                  educators follow customized sleep, organic meal, and sensory play charts for every individual baby.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <motion.a
                    href="/registration"
                    className="btn-primary py-3.5 px-8 bg-tertiary hover:bg-tertiary/90 border-tertiary shadow-tertiary/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => playPopSound()}
                  >
                    Apply for Daycare
                  </motion.a>
                  <motion.a
                    href="/individual-care"
                    className="btn-secondary py-3.5 px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => playPopSound()}
                  >
                    Care Philosophy
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative flex justify-center"
              >
                <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl w-[90%] max-w-[500px] h-[350px] md:h-[450px] bg-white">
                  <Image
                    src="/images/sensory-play.webp"
                    alt="Baby Daycare Sensory Play"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative Pillows */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                  <span className="text-3xl">🍼</span>
                  <div className="text-left">
                    <span className="text-xs text-text-primary block">Next Feed In</span>
                    <span className="font-bold text-sm text-text-heading">15 Mins</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CORE SERVICES ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label bg-accent/10 text-accent">🤱 Daycare Highlights</span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Nurturing Services We Offer
              </h2>
              <p className="text-text-primary mt-3">
                Cozy cribs, sterile play equipment, and continuous visual tracking maps for the ultimate parental peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {daycareServices.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => playPopSound()}
                  className={`cursor-pointer p-8 rounded-[30px] border-2 bg-white hover:shadow-xl transition-all duration-300 ${
                    service.color === "primary" ? "border-primary/20 hover:border-primary" :
                    service.color === "tertiary" ? "border-tertiary/20 hover:border-tertiary" : "border-accent/20 hover:border-accent"
                  }`}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3
                    className="text-xl font-bold text-text-heading mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-text-primary text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DAYCARE VALUES ── */}
        <section className="py-20 bg-[#fff5f6] relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column Text */}
              <div className="space-y-6">
                <span className="section-label bg-primary/10 text-primary">💖 Why Choose KidsCool Daycare?</span>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-text-heading"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Gold-Standard Safety & Daycare Values
                </h2>
                <p className="text-text-primary text-sm leading-relaxed">
                  We believe infant care requires a rigorous blend of medical professionalism and maternal warmth. 
                  Every environment factor is customized for baby health and soft developmental feedback loops.
                </p>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  {["sleep", "nutrition", "security"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        playPopSound();
                      }}
                      className={`py-3 px-6 text-sm font-bold border-b-4 transition-all uppercase ${
                        activeTab === tab ? "border-primary text-primary" : "border-transparent text-text-primary hover:text-text-heading"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="min-h-[120px] py-4">
                  <AnimatePresence mode="wait">
                    {activeTab === "sleep" && (
                      <motion.div
                        key="sleep"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-2"
                      >
                        <h4 className="font-bold text-text-heading text-lg">💤 Coordinated Nap Rhythms</h4>
                        <p className="text-text-primary text-xs leading-relaxed">
                          Dimmed star ceiling projections, certified breathing crib sensors, individual cotton organic sheets, 
                          and a strict sanitization protocol between nap intervals.
                        </p>
                      </motion.div>
                    )}
                    {activeTab === "nutrition" && (
                      <motion.div
                        key="nutrition"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-2"
                      >
                        <h4 className="font-bold text-text-heading text-lg">🥑 Non-GMO Organic Toddler Kitchen</h4>
                        <p className="text-text-primary text-xs leading-relaxed">
                          Pureed carrots, sweet potatoes, organic milk, and allergen-free recipes tailored specifically by 
                          our pediatric dietitian for early digestions.
                        </p>
                      </motion.div>
                    )}
                    {activeTab === "security" && (
                      <motion.div
                        key="security"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-2"
                      >
                        <h4 className="font-bold text-text-heading text-lg">🔒 24/7 CCTV & Secure Door-Lock Access</h4>
                        <p className="text-text-primary text-xs leading-relaxed">
                          Encrypted live-streams accessible by parent login, background-checked caregivers, and standard 
                          face-scanning check-in triggers.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column Layout */}
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative h-[380px] md:h-[420px]">
                  <Image
                    src="/images/healthy-meals.webp"
                    alt="Hsini organic toddler lunch"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DAILY TIMELINE ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="section-label">⏰ Daily Schedule</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Daycare Routine Rhythm
              </h2>
            </div>

            <div className="relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-150">
              {careSchedule.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row mb-12 last:mb-0 ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[15px] top-1 w-7.5 h-7.5 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center z-10" />

                  {/* Spacer / Content box wrapper */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={`p-6 bg-[#fffbf0] rounded-3xl border border-[#ffeebf] hover:shadow-lg transition-shadow text-left ${
                      idx % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded-full mb-3">
                        {item.time}
                      </span>
                      <h4 className="font-bold text-text-heading text-lg leading-tight mb-2">
                        {item.title}
                      </h4>
                      <p className="text-text-primary text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STAFF GRID ── */}
        <section className="py-20 bg-[#fffbf9] relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label bg-tertiary/10 text-tertiary">👩‍🍼 Certified Caregivers</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-heading mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Meet Our Pediatric Care Experts
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Nurse Emily Thornton", role: "Nursery Supervisor (RN)", img: "/images/teacher-portrait-1.webp", color: "border-primary" },
                { name: "Sarah Jenkins", role: "Infant Sleep Consultant", img: "/images/teacher-portrait-2.webp", color: "border-tertiary" },
                { name: "Aria Montgomery", role: "Sensory Play Coordinator", img: "/images/teacher-portrait-3.webp", color: "border-accent" },
              ].map((staff) => (
                <div key={staff.name} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all text-center">
                  <div className={`w-32 h-32 rounded-full overflow-hidden mx-auto border-4 ${staff.color} shadow-md relative mb-4`}>
                    <Image src={staff.img} alt={staff.name} fill className="object-cover" />
                  </div>
                  <h4 className="text-lg font-bold text-text-heading font-[var(--font-heading)]">{staff.name}</h4>
                  <p className="text-xs text-text-primary">{staff.role}</p>
                  <p className="text-xs text-text-primary mt-3 border-t border-gray-50 pt-3">
                    Over 8+ years experience holding valid infant CPR, first aid and pediatric nursing licenses.
                  </p>
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
