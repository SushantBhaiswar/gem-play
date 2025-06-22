import CustomButton from "@/components/common/button";
import Link from "next/link";

const games = [
  {
    name: "Color Challenge",
    image: "/globe.svg",
    description: "Test your reflexes and color-matching skills!",
    link: "/games/color-challenge",
  },
  {
    name: "Tic Tac Toe",
    image: "/window.svg",
    description: "Classic 3x3 grid game. Play against a friend!",
    link: "/games/tic-tac-toe",
  },
  {
    name: "Memory Game",
    image: "/next.svg",
    description: "Test your memory with this fun card game.",
    link: "/games/memory",
  },
];

export default function FeaturedGames() {
  return (
    <section className="w-full py-12 bg-[var(--card-bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[var(--highlight)]">Featured Games</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto mb-8">
          {games.map((game, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105 bg-[var(--background)] border-2 border-[var(--accent)] flex flex-col items-center p-6"
            >
              <img src={game.image} alt={game.name} className="w-20 h-20 mb-4 rounded-lg shadow-md object-contain bg-white" />
              <span className="text-xl font-bold mb-2 text-[var(--highlight)]">{game.name}</span>
              <span className="text-[var(--foreground)] text-base mb-4 opacity-80 text-center">{game.description}</span>
              <Link href={game.link}>
                <CustomButton name="Play Now" />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/games">
            <CustomButton name="See All Games" />
          </Link>
        </div>
      </div>
    </section>
  );
} 