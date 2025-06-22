"use client";
import { useState, useRef, useEffect } from "react";
import { User, LogOut, FileText, History, ChevronDown } from "lucide-react";

export default function ProfileMenu({ user, onLogout, onNavigate }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-br from-[var(--highlight)] to-[var(--accent)] text-white font-bold shadow hover:scale-105 transition"
        onClick={() => setOpen((v) => !v)}
        aria-label="Profile menu"
      >
        <User className="w-6 h-6" />
        <span className="hidden md:inline font-semibold text-base">{user?.name || user?.email || "Profile"}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-gradient-to-br from-[#23234b]/95 to-[#1a1a2e]/95 border border-[var(--highlight)] rounded-2xl shadow-2xl z-50 animate-fadeInUp p-2">
          <div className="px-4 py-3 border-b border-gray-700 text-white font-bold flex items-center gap-2">
            <User className="w-5 h-5 text-[var(--highlight)]" />
            <span>{user?.name || user?.email}</span>
          </div>
          <button onClick={() => { setOpen(false); onNavigate('account'); }} className="flex items-center gap-2 w-full px-4 py-3 text-left text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">
            <FileText className="w-5 h-5" /> Account
          </button>
          <button onClick={() => { setOpen(false); onNavigate('bet-history'); }} className="flex items-center gap-2 w-full px-4 py-3 text-left text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">
            <History className="w-5 h-5" /> Bet History
          </button>
          <button onClick={() => { setOpen(false); onNavigate('account-statement'); }} className="flex items-center gap-2 w-full px-4 py-3 text-left text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">
            <FileText className="w-5 h-5" /> Account Statement
          </button>
          <button onClick={() => { setOpen(false); onLogout(); }} className="flex items-center gap-2 w-full px-4 py-3 text-left text-red-500 hover:bg-red-500/20 rounded-xl transition">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      )}
    </div>
  );
} 