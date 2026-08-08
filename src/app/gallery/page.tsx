import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Camera, Sparkles } from "lucide-react";

export const metadata = {
  title: "Photo & Video Gallery | Hsini KidsCool",
  description: "Explore photos of campus life, classrooms, playgrounds, STEM experiments, art projects, and events at Hsini KidsCool.",
};

const galleryItems = [
  { src: "/images/hero_kids_school.png", title: "Modern School Campus Entrance", category: "Campus" },
  { src: "/images/classroom_interactive.png", title: "Interactive Smart Classroom", category: "Classrooms" },
  { src: "/images/science_stem_lab.png", title: "Young Scientists in STEM Lab", category: "STEM" },
  { src: "/images/arts_crafts_studio.png", title: "Creative Painting & Art Studio", category: "Arts" },
  { src: "/images/outdoor_playground.png", title: "Safe Eco Outdoor Playground", category: "Playground" },
  { src: "/images/montessori_learning.png", title: "Montessori Wooden Tactile Toys", category: "Classrooms" },
  { src: "/images/healthy_dining_hall.png", title: "Organic Chef-Prepared Dining Hall", category: "Dining" },
  { src: "/images/school_bus_transport.png", title: "Safe GPS Mini School Bus", category: "Campus" },
  { src: "/images/graduation_ceremony.png", title: "Kindergarten Graduation Ceremony", category: "Events" },
  { src: "/images/robotics_coding_kids.png", title: "LEGO Robotics & Block Coding", category: "STEM" },
  { src: "/images/art-class.webp", title: "Finger Painting Workshop", category: "Arts" },
  { src: "/images/baby-toddler-yoga.webp", title: "Toddler Yoga & Wellness", category: "Sports" },
  { src: "/images/gardening-club.webp", title: "Organic Garden Botanists", category: "Campus" },
  { src: "/images/music-class.webp", title: "Music & Rhythm Ensemble", category: "Arts" },
  { src: "/images/puppet-theater.webp", title: "Puppet Theater Performance", category: "Events" },
  { src: "/images/storytelling-circle.webp", title: "Cozy Storytelling Circle", category: "Classrooms" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-sky-500/10 via-teal-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-sky-500" /> Visual Life at KidsCool
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Moments of Wonder & <span className="text-sky-600 underline decoration-sky-300 decoration-wavy">Discovery</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our state-of-the-art facilities, joyful learning sessions, art studios, and outdoor adventure grounds.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-amber-400 font-extrabold text-[10px] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-base drop-shadow-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles className="w-10 h-10 text-sky-400 mx-auto mb-4" />
          <h2 className="text-3xl font-black mb-4">Experience Our Campus in Person</h2>
          <p className="text-slate-300 text-base mb-8">We invite prospective parents to schedule an in-person guided tour of our facilities with our admissions team.</p>
          <Link
            href="/ask-us"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-all"
          >
            Book a Personal Tour
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
