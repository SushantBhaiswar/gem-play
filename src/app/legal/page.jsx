import LandingHeader from "@/components/landing/Header";
import LandingFooter from "@/components/landing/Footer";
import Link from "next/link";

export default function LegalIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <LandingHeader />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-[var(--highlight)]">Legal & Policies</h1>
        <p className="mb-8 text-base">Please review our legal policies to understand your rights and responsibilities as a player on GemPlay.</p>
        <ul className="space-y-4">
          <li>
            <Link href="/legal/terms" className="block p-4 rounded-lg border border-[var(--accent)] hover:bg-[var(--accent)]/10 transition">
              <span className="text-lg font-semibold text-[var(--highlight)]">Terms of Service</span>
              <p className="text-sm mt-1">Rules, eligibility, and user conduct for real money gaming on GemPlay.</p>
            </Link>
          </li>
          <li>
            <Link href="/legal/privacy" className="block p-4 rounded-lg border border-[var(--accent)] hover:bg-[var(--accent)]/10 transition">
              <span className="text-lg font-semibold text-[var(--highlight)]">Privacy Policy</span>
              <p className="text-sm mt-1">How we collect, use, and protect your personal information.</p>
            </Link>
          </li>
          <li>
            <Link href="/legal/responsible" className="block p-4 rounded-lg border border-[var(--accent)] hover:bg-[var(--accent)]/10 transition">
              <span className="text-lg font-semibold text-[var(--highlight)]">Responsible Gaming</span>
              <p className="text-sm mt-1">Guidelines and resources for safe, responsible play.</p>
            </Link>
          </li>
        </ul>
      </main>
      <LandingFooter />
    </div>
  );
} 