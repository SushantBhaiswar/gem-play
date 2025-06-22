"use client";
import { Search } from "lucide-react";

export default function GameSearch() {
  return (
    <div className="mb-8 max-w-lg mx-auto">
      <form className="relative">
        <input
          type="text"
          placeholder="Search for games..."
          className="w-full pl-4 pr-12 py-3 rounded-full bg-white/10 dark:bg-gray-800 border-2 border-[var(--highlight)] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--highlight)] hover:bg-[var(--accent)] transition">
          <Search className="w-6 h-6 text-white" />
        </button>
      </form>
    </div>
  );
} 