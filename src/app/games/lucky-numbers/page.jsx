import LandingHeader from "@/components/landing/Header";

export default function LuckyNumbersPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <LandingHeader />
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)]">Lucky Numbers</h1>
        {/* Game component will go here */}
        <div className="w-full max-w-xs bg-[var(--card-bg)] rounded-xl shadow-lg p-6 flex flex-col items-center">
          <span className="text-[var(--foreground)] opacity-70">Game coming soon...</span>
        </div>
      </main>
    </div>
  );
} 