import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Sparkles, Trophy, Star, Music, Gift, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "School Events & Annual Calendar | Hsini KidsCool",
  description: "Discover upcoming festivals, graduation day, STEM competitions, art fairs, and seasonal celebrations at Hsini KidsCool.",
};

const events = [
  {
    title: "Annual STEM & Science Discovery Fair",
    date: "October 14, 2026",
    time: "10:00 AM - 02:00 PM",
    location: "Main Science Pavilion",
    category: "Academic & STEM",
    image: "/images/science_stem_lab.png",
    desc: "Kids demonstrate their hands-on mini science experiments, robotics displays, and organic garden discoveries.",
  },
  {
    title: "Grand Autumn Arts & Craft Showcase",
    date: "November 22, 2026",
    time: "09:30 AM - 01:00 PM",
    location: "Creative Arts Studio",
    category: "Arts & Culture",
    image: "/images/arts_crafts_studio.png",
    desc: "Exhibition of student easel paintings, clay sculptures, and collaborative canvas murals created by our young artists.",
  },
  {
    title: "Winter Wonderland Music & Drama Gala",
    date: "December 18, 2026",
    time: "04:00 PM - 07:00 PM",
    location: "KidsCool Auditorium",
    category: "Performing Arts",
    image: "/images/dramatics-dressup.webp",
    desc: "A magical puppet theater performance, choir music, and holiday dances presented by all age groups.",
  },
  {
    title: "Mini Olympics & Sports Day",
    date: "March 12, 2027",
    time: "09:00 AM - 12:30 PM",
    location: "Outdoor Playground Arena",
    category: "Sports & Fitness",
    image: "/images/outdoor_playground.png",
    desc: "Fun obstacle courses, relay races, sack races, and sportsmanship awards for all young athletes.",
  },
  {
    title: "Kindergarten Graduation & Moving Up Ceremony",
    date: "June 25, 2027",
    time: "10:00 AM - 01:00 PM",
    location: "Grand Celebration Hall",
    category: "Graduation",
    image: "/images/graduation_ceremony.png",
    desc: "Celebrating our kindergarten graduates as they receive their diplomas and move forward into primary school.",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-purple-500/10 via-pink-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-purple-500" /> School Life & Celebrations
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Joyful Events & <span className="text-purple-600 underline decoration-purple-300 decoration-wavy">Memorable Moments</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From seasonal art exhibitions and mini science fairs to our grand graduation ceremony, life at Hsini KidsCool is filled with celebration.
          </p>
        </div>
      </section>

      {/* Featured Event Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-5 relative min-h-[280px]">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full shadow">
                    {ev.category}
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 mb-3">
                      <span className="text-purple-600 bg-purple-50 px-3 py-1 rounded-lg border border-purple-100">📅 {ev.date}</span>
                      <span className="text-slate-600">⏰ {ev.time}</span>
                      <span className="text-slate-600">📍 {ev.location}</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{ev.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{ev.desc}</p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-slate-200/80 pt-4">
                    <Link
                      href="/ask-us"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all"
                    >
                      RSVP / Attend Event
                    </Link>
                    <span className="text-xs text-slate-400 font-semibold">Open to Parents & Visitors</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Highlights Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-black mb-4">Want to Host a Birthday Party or Private Event at KidsCool?</h2>
          <p className="text-slate-300 text-base mb-8">Our eco-playground and activity halls are available for private weekend birthday celebrations with custom catering and entertainment.</p>
          <Link
            href="/ask-us"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-all"
          >
            Inquire About Private Events
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
