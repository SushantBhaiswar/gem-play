import CustomButton from "@/components/common/button";
import { TowerControl, Users, Gem } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-b from-[var(--background)] to-[var(--card-bg)] flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Gem className="w-10 h-10 text-[var(--highlight)] animate-pulse" />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)]">Welcome to GemPlay</h1>
      </div>
      <p className="text-lg sm:text-xl text-[var(--foreground)] max-w-xl mx-auto leading-relaxed mb-8">
        Experience thrilling casino-style games with a modern twist. Start with <span className="font-semibold text-[var(--highlight)]">10,000 FREE coins</span> and compete in global leaderboards!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/games">
          <span>
            <CustomButton icon={<TowerControl className="w-6 h-6" />} name="Play Now" />
          </span>
        </Link>
        <Link href="/auth">
          <span>
            <CustomButton icon={<Users className="w-6 h-6" />} name="Sign Up Free" />
          </span>
        </Link>
      </div>
    </section>
  );
} 