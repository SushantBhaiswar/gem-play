import { Gem, Trophy, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Gem className="w-8 h-8 text-[var(--highlight)]" />,
    title: "Start with 10k Coins",
    desc: "Begin your adventure with a generous starter package. No deposit required!",
  },
  {
    icon: <Trophy className="w-8 h-8 text-[var(--highlight)]" />,
    title: "Daily Tournaments",
    desc: "Compete in daily challenges and climb the global leaderboards.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--highlight)]" />,
    title: "Secure Play",
    desc: "Fair gameplay guaranteed with certified RNG systems.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--accent)] shadow-sm flex flex-col items-center text-center">
              <div className="p-3 bg-[var(--highlight)]/10 rounded-full mb-4 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--highlight)] mb-2">{f.title}</h3>
              <p className="text-[var(--foreground)] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 