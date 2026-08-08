import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Sparkles, Brain, Compass, Cpu, Palette, Heart } from "lucide-react";

export const metadata = {
  title: "Early Childhood Curriculum & Learning Framework | Hsini KidsCool",
  description: "Explore our Reggio Emilia & Montessori integrated early childhood curriculum at Hsini KidsCool. Fostering cognitive development, STEM skills, and emotional growth.",
};

const pillars = [
  {
    icon: Brain,
    color: "from-amber-400 to-orange-500",
    title: "Cognitive & Logic Development",
    desc: "Interactive problem-solving, early math concepts, pattern recognition, and sensory sorting activities.",
  },
  {
    icon: Compass,
    color: "from-sky-400 to-blue-600",
    title: "Language & Multilingual Literacy",
    desc: "Storytelling circles, phonics, vocabulary building, and immersive bilingual English & French exposure.",
  },
  {
    icon: Cpu,
    color: "from-emerald-400 to-teal-600",
    title: "Early STEM & Robotics",
    desc: "Hands-on LEGO mechanics, safe block coding, nature observation, and mini science lab experiments.",
  },
  {
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    title: "Creative Arts & Expression",
    desc: "Free painting, clay sculpting, musical rhythm instruments, and theatrical puppet storytelling.",
  },
  {
    icon: Heart,
    color: "from-rose-400 to-red-500",
    title: "Social & Emotional Growth",
    desc: "Peer collaboration, empathy exercises, mindfulness breathing, and daily gratitude circles.",
  },
  {
    icon: Sparkles,
    color: "from-indigo-400 to-violet-600",
    title: "Physical Agility & Motor Skills",
    desc: "Outdoor eco-playground exploration, indoor mini-gymnastics, fine motor puzzle building.",
  },
];

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-amber-500/10 via-sky-500/5 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-amber-500" /> Inspired Learning Framework
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                Unlocking Every Child&apos;s <span className="text-amber-500 underline decoration-amber-300 decoration-wavy">Innate Potential</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our holistic curriculum fuses the finest elements of <strong>Montessori tactile learning</strong> and <strong>Reggio Emilia inquiry-based discovery</strong> to ignite curiosity, resilience, and lifelong academic confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/registration"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
                >
                  Enroll Your Child
                </Link>
                <Link
                  href="/ask-us"
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-2xl shadow-sm transition-all"
                >
                  Schedule Curriculum Tour
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/montessori_learning.png"
                alt="Montessori learning at Hsini KidsCool"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Curriculum Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Six Pillars of Our Educational Model
            </h2>
            <p className="text-slate-600 text-base">
              Carefully crafted learning spheres designed to develop well-rounded, creative, and confident young thinkers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Curriculum Schedule Showcase */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">A Day in the Life</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">Balanced Routine for Joyful Growth</h2>
              <div className="space-y-4 text-sm text-slate-300">
                {[
                  { time: "08:00 AM - 09:00 AM", title: "Warm Arrival & Morning Circle", desc: "Sensory games, weather check, and community sharing." },
                  { time: "09:00 AM - 10:30 AM", title: "Montessori Discovery & STEM Lab", desc: "Small group problem solving, tactile math, and hands-on experiments." },
                  { time: "10:30 AM - 11:30 AM", title: "Outdoor Eco-Play & Garden Exploration", desc: "Fresh air, climbing, nature exploration, and gross motor play." },
                  { time: "11:30 AM - 12:30 PM", title: "Organic Chef-Prepared Dining", desc: "Healthy balanced meal served family-style to encourage dining etiquette." },
                  { time: "12:30 PM - 02:00 PM", title: "Cozy Naptime & Quiet Storytelling", desc: "Soft ambient music, comfortable padded cots, and gentle relaxation." },
                  { time: "02:00 PM - 04:00 PM", title: "Creative Arts, Music & Robotics", desc: "Painting, instrument practice, and introductory block coding." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                    <span className="text-amber-400 font-bold font-mono text-xs whitespace-nowrap shrink-0">{s.time}</span>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{s.title}</h4>
                      <p className="text-slate-400 text-xs">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
              <Image
                src="/images/classroom_interactive.png"
                alt="Interactive Classroom Routine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Give Your Child the Gift of World-Class Learning</h2>
          <p className="text-white/90 text-base mb-8">Contact our admissions director today to receive a personalized curriculum guide and visit our campus.</p>
          <Link
            href="/registration"
            className="inline-block bg-white text-amber-600 font-black px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            Apply for Admission Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
