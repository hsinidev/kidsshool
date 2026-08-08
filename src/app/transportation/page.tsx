import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Bus, ShieldCheck, MapPin, PhoneCall, Clock } from "lucide-react";

export const metadata = {
  title: "Safe Transport & School Bus Services | Hsini KidsCool",
  description: "Learn about our GPS-tracked school bus fleet, certified drivers, door-to-door pick up, and safety nannies at Hsini KidsCool.",
};

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-yellow-500/10 via-amber-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-800 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Bus className="w-4 h-4 text-yellow-600" /> Door-to-Door Safety Fleet
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                Safe & Reliable <span className="text-yellow-600 underline decoration-yellow-300 decoration-wavy">School Transport</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We provide premium door-to-door transportation for students with real-time GPS tracking, speed governors, seatbelts on all seats, and dedicated bus nannies on every route.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/ask-us"
                  className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all"
                >
                  Check Route Availability
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/school_bus_transport.png"
                alt="Hsini KidsCool Mini School Bus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <MapPin className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Live GPS App Tracking</h3>
              <p className="text-slate-600 text-xs">Parents monitor bus location and get arrival alerts via mobile app.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Certified Bus Nanny</h3>
              <p className="text-slate-600 text-xs">A trained caregiver accompanies every bus route to assist kids.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <Clock className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Punctual Schedules</h3>
              <p className="text-slate-600 text-xs">Strict arrival and pick-up timing guarantees smooth routines.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <PhoneCall className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Direct Bus Hotline</h3>
              <p className="text-slate-600 text-xs">Instant communication hotline for route adjustments.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
