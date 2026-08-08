"use client";

import React, { useState } from "react";
import { Zap, LogOut, Settings, X, Eye, EyeOff, ShieldCheck, RefreshCw } from "lucide-react";
import { logoutAdmin, updateAdminCredentials } from "@/app/actions/admin";

export default function AdminHeader() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Settings Form State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Handle logout
  const handleLogout = async () => {
    try {
      const res = await logoutAdmin();
      if (res.success) {
        window.location.reload(); // Refresh the page to trigger server-side auth redirect/view swap
      } else {
        alert("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Handle credentials update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const res = await updateAdminCredentials({ username, password });
      if (res.success) {
        setSuccess(true);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        // Close modal after brief delay to show success state
        setTimeout(() => {
          setIsSettingsOpen(false);
          setSuccess(false);
          // Reload page to reflect changed session state
          window.location.reload();
        }, 1500);
      } else {
        setError(res.error || "Failed to update credentials");
      }
    } catch (err) {
      console.error("Update credentials error:", err);
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ── TOP NAV BAR ── */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo area */}
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-amber-500 fill-amber-500 animate-pulse" />
              <div>
                <strong className="text-base font-bold text-slate-950 tracking-tight block">KidsCool Portal</strong>
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider block -mt-0.5">
                  ● Secure Admin Dashboard
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="text-xs font-bold text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Settings className="h-3.5 w-3.5 text-slate-500" />
                Parameters
              </button>
              
              <button
                onClick={handleLogout}
                className="text-xs font-bold text-red-600 hover:text-red-700 px-3.5 py-2 rounded-xl border border-red-200 hover:bg-red-50 transition-all flex items-center gap-1.5 shadow-sm active:scale-95 bg-red-50/20"
              >
                <LogOut className="h-3.5 w-3.5" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SETTINGS / PARAMETERS MODAL ── */}
      {isSettingsOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => {
            if (!isLoading) {
              setIsSettingsOpen(false);
              setError(null);
              setSuccess(false);
            }
          }}
        >
          <div 
            className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-95 md:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <div>
                  <h4 className="text-base font-bold text-slate-900">Security Parameters</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                    Update username & password
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsSettingsOpen(false);
                  setError(null);
                  setSuccess(false);
                }}
                disabled={isLoading}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 text-red-700 text-xs font-semibold p-3.5 rounded-xl border border-red-100 flex items-center gap-2 animate-shake">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-emerald-50 text-emerald-700 text-xs font-bold p-3.5 rounded-xl border border-emerald-100 flex items-center gap-2 animate-bounce">
                  <span>✨</span> Credentials updated successfully! Reloading...
                </div>
              )}

              <div className="space-y-4">
                {/* Username Input */}
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1.5">
                    New Username
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., admin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isLoading}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all text-slate-800 font-medium"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1.5">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="At least 4 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all text-slate-800 font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1.5">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Repeat password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isLoading}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all text-slate-800 font-medium"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 flex justify-end gap-2 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsSettingsOpen(false);
                    setError(null);
                    setSuccess(false);
                  }}
                  disabled={isLoading}
                  className="px-4 py-2.5 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading || success}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" /> Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
