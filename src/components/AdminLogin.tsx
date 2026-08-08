"use client";

import React, { useState } from "react";
import { Zap, Lock, ShieldAlert, KeyRound, User, Eye, EyeOff, RefreshCw } from "lucide-react";
import { loginAdmin } from "@/app/actions/admin";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await loginAdmin({ username, password });
      if (res.success) {
        // Reloading the page will trigger the server-side cookie check, 
        // letting us enter the authenticated dashboard view.
        window.location.reload();
      } else {
        setError(res.error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login form error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans antialiased">
      {/* ── AMBIENT GLOW BACKDROP ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* ── CARD WRAPPER ── */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden p-8 relative">
        {/* Decorative Badge */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white p-2.5 rounded-full shadow-lg border-4 border-white">
          <Lock className="h-5 w-5" />
        </div>

        {/* Header */}
        <div className="text-center mt-4 mb-8">
          <div className="inline-flex items-center gap-1.5 justify-center mb-3">
            <Zap className="h-6 w-6 text-amber-500 fill-amber-500" />
            <strong className="text-xl font-extrabold text-slate-900 tracking-tight">KidsCool</strong>
          </div>
          <h2 className="text-2xl font-black text-slate-950 tracking-tight">Admin Console</h2>
          <p className="text-slate-400 text-xs mt-1 font-semibold uppercase tracking-wider">
            🔒 Secure Access Control Portal
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-700 text-xs font-semibold p-4 rounded-2xl border border-red-100 flex items-start gap-2.5 animate-shake">
              <ShieldAlert className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Authentication Failed</span>
                {error}
              </div>
            </div>
          )}

          {/* Username Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                required
                disabled={isLoading}
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all text-slate-800 font-medium"
              />
              <User className="absolute left-3.5 top-3 text-slate-400 h-4 w-4" />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                disabled={isLoading}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all text-slate-800 font-medium"
              />
              <KeyRound className="absolute left-3.5 top-3 text-slate-400 h-4 w-4" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-2xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" /> Verifying Credentials...
              </>
            ) : (
              "Sign In to Console"
            )}
          </button>
        </form>

        {/* Footer info */}
        <div className="text-center text-[10px] text-slate-400 font-semibold tracking-wide uppercase mt-8 border-t border-slate-100 pt-6">
          Nursery Portal Management Authority
        </div>
      </div>
    </div>
  );
}
