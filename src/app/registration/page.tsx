"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    programChoice: "daycare",
  });

  const nextStep = () => {
    playPopSound();
    setStep(step + 1);
  };

  const prevStep = () => {
    playPopSound();
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playPopSound();
    setStep(4);
  };

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fafdfa]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#eaf6ec] to-[#fafdfa] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#1CBBB4" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={90} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={45} color="#ed145b" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-[#7dc242]/15 text-[#5ba830] font-bold">🎈 Enrollment</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Enroll Your Precious Child <br />
              <span className="text-primary">In Hsini KidsCool Academy</span>
            </h1>
          </div>
        </section>

        {/* ── REGISTRATION FORM ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-xl mx-auto px-4">
            {/* Step Indicators */}
            <div className="flex justify-between items-center mb-10 relative before:absolute before:left-0 before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-gray-100 -z-0">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-10 h-10 rounded-full border-4 font-bold flex items-center justify-center relative z-10 transition-all ${
                    step >= num
                      ? "bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20"
                      : "bg-white border-gray-200 text-text-primary"
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>

            <div className="bg-bg-soft border border-gray-100 rounded-[40px] p-8 md:p-12 shadow-sm">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-text-heading font-[var(--font-heading)]">Child details 🧸</h3>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-heading">Child's Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Doe"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-heading">Child's Age (Years)</label>
                      <input
                        type="number"
                        min={1}
                        max={6}
                        required
                        placeholder="e.g. 3"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      />
                    </div>
                    <button
                      onClick={nextStep}
                      disabled={!formData.childName || !formData.childAge}
                      className="btn-primary w-full py-4 text-center disabled:opacity-50"
                    >
                      Next: Parents Details →
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-text-heading font-[var(--font-heading)]">Parents Details 🤱</h3>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-heading">Parent's Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Doe"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-heading">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. parent@email.com"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-heading">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +1 (555) 123-4567"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      />
                    </div>
                    <div className="flex gap-4">
                      <button onClick={prevStep} className="btn-secondary w-1/2 py-4">
                        ← Back
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!formData.parentName || !formData.parentEmail || !formData.parentPhone}
                        className="btn-primary w-1/2 py-4 disabled:opacity-50"
                      >
                        Next: Program Choices →
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-text-heading font-[var(--font-heading)]">Choose Program 💎</h3>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-heading">Educational Tier</label>
                      <select
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.programChoice}
                        onChange={(e) => setFormData({ ...formData, programChoice: e.target.value })}
                      >
                        <option value="daycare">Baby Daycare & Infant Care</option>
                        <option value="playacademy">Play Academy & Kids School</option>
                        <option value="lms">Online LMS & E-Learning Portal</option>
                      </select>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={prevStep} className="btn-secondary w-1/2 py-4">
                        ← Back
                      </button>
                      <button onClick={handleSubmit} className="btn-primary w-1/2 py-4">
                        Submit Enrollment 🚀
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <span className="text-7xl block animate-bounce">🎉🎈🌟</span>
                    <h3 className="text-3xl font-bold text-text-heading font-[var(--font-heading)]">
                      Enrollment Submitted!
                    </h3>
                    <p className="text-text-primary text-sm leading-relaxed max-w-md mx-auto">
                      Congratulations! Your child <strong className="text-primary">{formData.childName}</strong> is registered. 
                      A coordinator will email you at <strong className="text-primary">{formData.parentEmail}</strong> within 
                      24 hours to schedule your campus tour.
                    </p>
                    <button
                      onClick={() => {
                        setStep(1);
                        setFormData({ childName: "", childAge: "", parentName: "", parentEmail: "", parentPhone: "", programChoice: "daycare" });
                        playPopSound();
                      }}
                      className="px-6 py-2.5 bg-gray-150 text-text-primary font-bold text-xs rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Enroll Another Child
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
