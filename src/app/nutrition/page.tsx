import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Heart, CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

export const metadata = {
  title: "Organic Meals & Child Nutrition | Hsini KidsCool",
  description: "Learn about our chef-prepared organic meals, balanced nutrition plans, and allergy-safe dining facilities at Hsini KidsCool.",
};

const menuItems = [
  { meal: "Morning Breakfast", items: "Organic oatmeal with berries, whole grain toast, fresh orange juice, and warm milk." },
  { meal: "Mid-Morning Fruit Snack", items: "Fresh sliced apples, bananas, organic yogurt cups, and carrot sticks." },
  { meal: "Chef-Prepared Balanced Lunch", items: "Steamed chicken tenders or lentil patties, brown rice pilaf, roasted broccoli, and fruit smoothie." },
  { meal: "Afternoon Energy Snack", items: "Whole grain crackers, humous dip, cheese cubes, and natural fruit water." },
];

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4 text-emerald-500" /> Farm-to-Table Nutrition
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                Nurturing Healthy Bodies & <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy">Growing Minds</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                At Hsini KidsCool, food is fuel for learning. Our pediatric nutrition team prepares 100% organic, balanced, chef-crafted meals daily to ensure your child receives optimal energy and nutrition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/registration"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Enroll Your Child
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/healthy_dining_hall.png"
                alt="Organic dining at Hsini KidsCool"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
              <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Nut-Free & Allergy Safe</h3>
              <p className="text-slate-600 text-sm">We enforce strict nut-free guidelines and prepare customized meal alternatives for children with lactose, gluten, or specific dietary restrictions.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
              <Utensils className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">On-Site Executive Pediatric Chef</h3>
              <p className="text-slate-600 text-sm">All meals are cooked fresh daily in our certified stainless-steel commercial kitchen using locally sourced organic ingredients.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
              <Heart className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Family-Style Dining Etiquette</h3>
              <p className="text-slate-600 text-sm">Children dine together under teacher supervision, learning table manners, sharing habits, and healthy relationship with wholesome food.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Daily Menu */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black mb-3">Sample Daily Menu Plan</h2>
            <p className="text-slate-400 text-sm">Rotated weekly to introduce children to diverse textures, flavors, and international cuisines.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {menuItems.map((m, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/60 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{m.meal}</h4>
                  <p className="text-slate-300 text-sm">{m.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
