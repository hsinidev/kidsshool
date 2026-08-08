import React from "react";
import { db } from "@/lib/db";
import AdminTable from "@/components/AdminTable";
import AdminHeader from "@/components/AdminHeader";
import AdminLogin from "@/components/AdminLogin";
import { FolderOpen, Sparkles, Baby } from "lucide-react";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  // Check session cookie
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("admin_session")?.value === "authenticated";

  if (!isAuth) {
    return <AdminLogin />;
  }

  // Fetch all leads from the database sorted by newest first
  const leads = await db.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Calculate some simple metrics
  const totalLeads = leads.length;
  
  const leadsToday = leads.filter((lead) => {
    const today = new Date();
    const leadDate = new Date(lead.createdAt);
    return (
      leadDate.getDate() === today.getDate() &&
      leadDate.getMonth() === today.getMonth() &&
      leadDate.getFullYear() === today.getFullYear()
    );
  }).length;

  const leadsWithChildAge = leads.filter(l => l.childAge).length;

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans antialiased">
      {/* ── TOP NAV BAR ── */}
      <AdminHeader />

      {/* ── MAIN CONTAINER ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* ── HEADER SECTION ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-950 tracking-tight">
              Lead Generation Hub
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Review and manage incoming inquiries captured from the KidsCool contact page.
            </p>
          </div>
          <div className="text-xs text-slate-400 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-sm self-start">
            <span className="font-bold text-slate-500 block mb-0.5">Database Integration Status</span>
            <span className="text-emerald-500 font-semibold flex items-center gap-1">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              {process.env.NODE_ENV === "production" ? "Prisma Connected (Cloudflare D1)" : "Prisma Connected (dev.db SQLite)"}
            </span>
          </div>
        </div>

        {/* ── METRICS SECTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Total Leads */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Total Submissions
                </span>
                <span className="text-4xl font-black text-slate-950 tracking-tight block mt-2">
                  {totalLeads}
                </span>
              </div>
              <span className="bg-slate-50 p-2.5 rounded-2xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <FolderOpen className="h-6 w-6 text-slate-500" />
              </span>
            </div>
            <div className="mt-4 text-xs text-slate-500 flex items-center gap-1">
              <span className="font-semibold text-slate-700">All-time</span> lead capture database entries.
            </div>
          </div>

          {/* Card 2: Leads Today */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Captured Today
                </span>
                <span className="text-4xl font-black text-slate-950 tracking-tight block mt-2">
                  {leadsToday}
                </span>
              </div>
              <span className="bg-slate-50 p-2.5 rounded-2xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-amber-500 fill-amber-500/20" />
              </span>
            </div>
            <div className="mt-4 text-xs text-slate-500">
              {leadsToday > 0 ? (
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  🟢 {leadsToday} new inquiry received today
                </span>
              ) : (
                <span className="text-slate-400 font-semibold">No submissions yet today</span>
              )}
            </div>
          </div>

          {/* Card 3: Metrics Detail */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Child Age Retention
                </span>
                <span className="text-4xl font-black text-slate-950 tracking-tight block mt-2">
                  {totalLeads > 0 ? Math.round((leadsWithChildAge / totalLeads) * 100) : 0}%
                </span>
              </div>
              <span className="bg-slate-50 p-2.5 rounded-2xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <Baby className="h-6 w-6 text-emerald-500" />
              </span>
            </div>
            <div className="mt-4 text-xs text-slate-500 flex items-center gap-1">
              <span className="font-bold text-slate-700">{leadsWithChildAge}</span> entries contain child age details.
            </div>
          </div>
          
        </div>

        {/* ── INTERACTIVE TABLE CONTAINER ── */}
        <AdminTable initialLeads={leads.map(lead => ({
          ...lead,
          createdAt: lead.createdAt.toISOString()
        }))} />
        
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-400 font-semibold uppercase tracking-wider mt-12">
        KidsCool Nursery Platform • Secret Security Admin Console
      </footer>
    </div>
  );
}
