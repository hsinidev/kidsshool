"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  MessageSquare, 
  Lock, 
  AlertCircle, 
  Send, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Map 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BubbleTrailCursor, MagicDoodlePad, playPopSound } from "@/components/MagicSpells";
import {
  FloatingStar,
  FloatingPlanet,
  FloatingCloud,
  FloatingPencil,
  ABCBlocks,
  WaveDivider
} from "@/components/decorations/Decorations";
import { submitContactForm } from "@/app/actions/contact";

// Schema matching Server Action validation
const contactFormSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  childAge: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function AskUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ parentName: string; email: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      childAge: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    playPopSound();

    const response = await submitContactForm({
      parentName: data.parentName,
      email: data.email,
      phone: data.phone || null,
      childAge: data.childAge || null,
      message: data.message,
    });

    if (response.success) {
      setSuccessData({ parentName: data.parentName, email: data.email });
      setSubmitted(true);
      reset();
    } else {
      setServerError(response.error || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fafbfe]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#eaf0fe] to-[#fafbfe] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#ed145b" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={90} />
          <FloatingPlanet className="bottom-8 left-[6%] animate-float" size={45} color="#ffd700" />
          <FloatingPencil className="bottom-12 right-[8%] animate-float-slow" size={50} />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-[#0a6375]/10 text-[#0a6375] font-bold flex items-center justify-center gap-1.5 w-fit mx-auto">
              <MessageSquare className="h-3.5 w-3.5" /> Support Center
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Have a Question? <br />
              <span className="text-primary">We Are Here to Guide You!</span>
            </h1>
            <p className="text-text-primary text-base">
              Got queries regarding campus admissions, organic diaper scheduling, live CCTV feeds, or our pricing plans? 
              Shoot us a message, and our nursery coordinator will get back to you within 2 hours.
            </p>
          </div>
        </section>

        {/* ── CONTACT GRID ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Form */}
              <div className="bg-bg-soft border border-gray-100 rounded-[40px] p-8 md:p-12 shadow-sm">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3
                          className="text-2xl font-bold text-text-heading flex items-center gap-2"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Ask a Question
                        </h3>
                        <a
                          href="/admin5467"
                          className="text-xs font-bold text-[#0a6375] hover:underline flex items-center gap-1"
                        >
                          Dashboard <Lock className="h-3 w-3" />
                        </a>
                      </div>

                      {serverError && (
                        <div className="bg-red-50 text-red-700 text-xs font-bold px-4 py-3 rounded-2xl border border-red-100 flex items-center gap-1.5">
                          <AlertCircle className="h-4 w-4 flex-shrink-0" /> {serverError}
                        </div>
                      )}

                      {/* Parent Name & Email Address */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-text-heading">Parent's Name</label>
                          <input
                            type="text"
                            placeholder="e.g. Jessica Doe"
                            disabled={isSubmitting}
                            className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                              errors.parentName ? "border-red-400 focus:border-red-500" : "border-gray-200"
                            }`}
                            {...register("parentName")}
                          />
                          {errors.parentName && (
                            <span className="text-[11px] font-bold text-red-500 block">
                              {errors.parentName.message}
                            </span>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-text-heading">Email Address</label>
                          <input
                            type="email"
                            placeholder="e.g. parent@email.com"
                            disabled={isSubmitting}
                            className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                              errors.email ? "border-red-400 focus:border-red-500" : "border-gray-200"
                            }`}
                            {...register("email")}
                          />
                          {errors.email && (
                            <span className="text-[11px] font-bold text-red-500 block">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Contact Phone & Child Age */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-text-heading">Contact Phone (Optional)</label>
                          <input
                            type="tel"
                            placeholder="e.g. +1 (555) 123-4567"
                            disabled={isSubmitting}
                            className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                              errors.phone ? "border-red-400 focus:border-red-500" : "border-gray-200"
                            }`}
                            {...register("phone")}
                          />
                          {errors.phone && (
                            <span className="text-[11px] font-bold text-red-500 block">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-text-heading">Child's Age (Optional)</label>
                          <input
                            type="text"
                            placeholder="e.g. 2 years / 18 months"
                            disabled={isSubmitting}
                            className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                              errors.childAge ? "border-red-400 focus:border-red-500" : "border-gray-200"
                            }`}
                            {...register("childAge")}
                          />
                          {errors.childAge && (
                            <span className="text-[11px] font-bold text-red-500 block">
                              {errors.childAge.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Message / Question */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-text-heading">Your Question</label>
                        <textarea
                          rows={4}
                          placeholder="Ask us anything about diapers, safety, nap schedules, or tours..."
                          disabled={isSubmitting}
                          className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                            errors.message ? "border-red-400 focus:border-red-500" : "border-gray-200"
                          }`}
                          {...register("message")}
                        />
                        {errors.message && (
                          <span className="text-[11px] font-bold text-red-500 block">
                            {errors.message.message}
                          </span>
                        )}
                      </div>

                      {/* Submit Button with Spinner */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full py-4 rounded-2xl text-center relative flex items-center justify-center gap-2 cursor-pointer disabled:opacity-85 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 border-2 border-white/35 border-t-white rounded-full animate-spin"></span>
                            <span>Sending Ticket...</span>
                          </>
                        ) : (
                          <span className="flex items-center gap-2">Send Question Now <Send size={16} /></span>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <CheckCircle className="h-16 w-16 text-primary mx-auto animate-bounce" />
                      <h3
                        className="text-3xl font-bold text-text-heading"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Question Received!
                      </h3>
                      <p className="text-text-primary text-sm max-w-md mx-auto">
                        Thank you, <strong className="text-primary">{successData?.parentName}</strong>. 
                        We've queued your ticket. A counselor will respond to your email at <strong className="text-primary">{successData?.email}</strong> shortly.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setSuccessData(null);
                          playPopSound();
                        }}
                        className="px-6 py-2.5 bg-gray-150 text-text-primary font-bold text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        Ask Another Question
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column - Info Cards */}
              <div className="space-y-8">
                <div>
                  <span className="section-label bg-tertiary/10 text-tertiary">📍 Visit Our Nursery</span>
                  <h3
                    className="text-2xl font-bold text-text-heading mt-2 mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Campus Address & Info
                  </h3>
                  <p className="text-text-primary text-sm leading-relaxed mb-6">
                    Drop by anytime during visiting hours for a guided tour of our cozy nap sleeping areas, 
                    sensory sandboxes, and modern preschool rooms.
                  </p>

                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-text-heading block">Main Campus Location</strong>
                        <span className="text-text-primary">123 Learning Lane, Creative Valley, CA 90210</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-text-heading block">Call/WhatsApp Us</strong>
                        <span className="text-text-primary">+1 (555) 123-4567</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-text-heading block">Admissions Hours</strong>
                        <span className="text-text-primary">Monday — Friday (08:00 AM — 06:00 PM)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inline Map Placeholder Illustration */}
                <div className="relative rounded-[30px] overflow-hidden h-[180px] border border-gray-150 shadow-inner bg-bg-soft flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <Map className="h-8 w-8 text-primary mx-auto mb-1 animate-pulse" />
                    <strong className="text-xs text-text-heading block">Interactive Location Map</strong>
                    <span className="text-[10px] text-text-primary block">Clicking navigation routes will open native Apple/Google Maps.</span>
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

