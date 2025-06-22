"use client";
import Link from "next/link";
import CustomButton from "@/components/common/button";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";

export default function LandingFooter() {
  const pathname = usePathname();
  const isLegalPage = [
    "/legal/terms",
    "/legal/privacy",
    "/legal/responsible"
  ].includes(pathname);

  if (isLegalPage) {
    return (
      <footer className="border-t border-[var(--accent)] bg-[var(--background)] mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] bg-opacity-90 rounded-xl px-6 py-4 shadow-lg max-w-2xl w-full text-center mx-auto mb-4">
            <span className="text-white font-semibold text-sm sm:text-base">
              GemPlay is strictly for users 18 years and above. Real money gaming involves financial risk and may be addictive. Please play responsibly.<br className="hidden sm:block" />
              Residents of Andhra Pradesh, Assam, Odisha, Telangana, Sikkim, and Nagaland are not permitted to play for prizes.
            </span>
          </div>
          <div className="border-t border-[var(--accent)] pt-4 text-center">
            <p className="text-xs text-[var(--foreground)]">© 2024 GemPlay. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[var(--accent)] bg-[var(--background)] mt-8">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--highlight)]">GemPlay</h3>
            <p className="text-sm text-[var(--foreground)]">
              GemPlay is your destination for skill-based real money games. Play responsibly and win real cash prizes!
            </p>
            <p className="text-xs text-[var(--foreground)] opacity-70">support@gemplay.com</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[var(--highlight)]">Games</h4>
            <ul className="space-y-2">
              <li><Link href="/games/tic-tac-toe" className="text-sm text-[var(--foreground)] hover:text-[var(--highlight)]">Tic Tac Toe</Link></li>
              <li><Link href="/games/memory" className="text-sm text-[var(--foreground)] hover:text-[var(--highlight)]">Memory Game</Link></li>
              <li><Link href="/games/snake" className="text-sm text-[var(--foreground)] hover:text-[var(--highlight)]">Snake</Link></li>
              <li><Link href="/games" className="text-sm text-[var(--highlight)] font-semibold">See All Games</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[var(--highlight)]">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="text-sm text-[var(--foreground)] hover:text-[var(--highlight)]">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="text-sm text-[var(--foreground)] hover:text-[var(--highlight)]">Privacy Policy</Link></li>
              <li><Link href="/legal/responsible" className="text-sm text-[var(--foreground)] hover:text-[var(--highlight)]">Responsible Gaming</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[var(--highlight)]">Connect</h4>
            <div className="flex gap-3">
              <CustomButton icon={<Twitter className="w-4 h-4" />} name="" />
              <CustomButton icon={<Facebook className="w-4 h-4" />} name="" />
              <CustomButton icon={<Instagram className="w-4 h-4" />} name="" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] bg-opacity-90 rounded-xl px-6 py-4 shadow-lg max-w-2xl w-full text-center">
            <span className="text-white font-semibold text-sm sm:text-base">
              GemPlay is strictly for users 18 years and above. Real money gaming involves financial risk and may be addictive. Please play responsibly. <br className="hidden sm:block" />
              Residents of Andhra Pradesh, Assam, Odisha, Telangana, Sikkim, and Nagaland are not permitted to play for prizes. <br className="hidden sm:block" />
              For more information, see our <Link href="/legal/terms" className="underline hover:text-yellow-200">Terms of Service</Link>, <Link href="/legal/privacy" className="underline hover:text-yellow-200">Privacy Policy</Link>, and <Link href="/legal/responsible" className="underline hover:text-yellow-200">Responsible Gaming Policy</Link>.
            </span>
          </div>
        </div>
        <div className="border-t border-[var(--accent)] mt-6 pt-6 text-center">
          <p className="text-xs text-[var(--foreground)]">© 2024 GemPlay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 