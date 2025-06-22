"use client";

import React, { useState } from "react";
import { X, User } from "lucide-react";
import { SignInFeat } from "@/features/auth/signin/form";
import { SignUpFeat } from "@/features/auth/signin/SignUpForm";

const AuthModal = ({ open, onClose, defaultTab = "signin" }) => {
  const [tab, setTab] = useState(defaultTab);

  if (!open) return null;

  const handleLoginSuccess = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 backdrop-blur-xl z-40"
        onClick={onClose}
      />
      {/* Modal content */}
      <div
        className="z-50 relative flex flex-col items-center w-full max-w-sm p-6 sm:p-8 rounded-3xl border-2 border-[var(--highlight)] shadow-lg bg-gradient-to-br from-[#23234b]/90 to-[#1a1a2e]/80 backdrop-blur-2xl animate-authModalPop"
        style={{
          boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18), 0 0 8px 1px var(--highlight)",
        }}
      >
        {/* Animated border glow */}
        <div className="absolute -inset-1 rounded-3xl pointer-events-none animate-glow border-2 border-[var(--highlight)] opacity-60" style={{filter: 'blur(6px)'}} />
        {/* Close button */}
        <button
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-[var(--highlight)]/80 text-[var(--highlight)] hover:text-white shadow-lg border border-[var(--highlight)] transition-all"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={22} />
        </button>
        {/* Icon/logo */}
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[var(--highlight)] to-[var(--accent)] shadow-lg mb-6">
          <User size={36} className="text-white drop-shadow" />
        </div>
        {/* Tab buttons */}
        <div className="flex justify-center mb-6 gap-2 w-full">
          <button
            className={`px-4 py-2 text-sm sm:px-6 sm:text-base rounded-xl font-bold transition w-1/2 ${tab === "signin" ? "bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white shadow-md" : "bg-white/10 border border-[var(--highlight)] text-[var(--highlight)]"}`}
            onClick={() => setTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 text-sm sm:px-6 sm:text-base rounded-xl font-bold transition w-1/2 ${tab === "signup" ? "bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white shadow-md" : "bg-white/10 border border-[var(--highlight)] text-[var(--highlight)]"}`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-6 text-white drop-shadow-lg tracking-wide">
          {tab === "signin" ? "Welcome Back!" : "Create Your Account"}
        </h2>
        {/* Auth form */}
        <div className="w-full">
          {tab === "signin" ? <SignInFeat onLoginSuccess={handleLoginSuccess} /> : <SignUpFeat />}
        </div>
      </div>
      <style jsx global>{`
        @keyframes authModalPop {
          0% { opacity: 0; transform: scale(0.95) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 12px 1px var(--highlight), 0 8px 24px 0 rgba(31,38,135,0.37); }
          50% { box-shadow: 0 0 24px 4px var(--accent), 0 8px 24px 0 rgba(31,38,135,0.37); }
          100% { box-shadow: 0 0 12px 1px var(--highlight), 0 8px 24px 0 rgba(31,38,135,0.37); }
        }
        .animate-glow { animation: glow 2s infinite alternate; }
      `}</style>
    </div>
  );
};

export default AuthModal; 