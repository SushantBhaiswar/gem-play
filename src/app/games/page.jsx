import LandingHeader from "@/components/landing/Header";
import CustomButton from "@/components/common/button";
import { Gem, Dice5, Grid, ActivitySquare, BrainCircuit, HandMetal } from "lucide-react";
import Link from "next/link";
import GameSearch from "@/components/games/GameSearch";

const games = [
  {
    name: "Color Challenge",
    icon: <Gem className="w-8 h-8 text-[var(--highlight)]" />,
    gradient: "from-blue-500 to-purple-500",
    description: "Test your reflexes and color-matching skills!",
    link: "/games/color-challenge",
  },
  {
    name: "Lucky Numbers",
    icon: <Dice5 className="w-8 h-8 text-[var(--highlight)]" />,
    gradient: "from-green-500 to-emerald-500",
    description: "Try your luck and win big with numbers!",
    link: "/games/lucky-numbers",
  },
  {
    name: "Tic Tac Toe",
    icon: <Grid className="w-8 h-8 text-[var(--highlight)]" />,
    gradient: "from-pink-500 to-yellow-500",
    description: "Classic 3x3 grid game. Play against a friend!",
    link: "/games/tic-tac-toe",
  },
  {
    name: "Snake",
    icon: <ActivitySquare className="w-8 h-8 text-[var(--highlight)]" />,
    gradient: "from-indigo-500 to-blue-400",
    description: "Eat, grow, and avoid hitting the wall!",
    link: "/games/snake",
  },
  {
    name: "Memory Game",
    icon: <BrainCircuit className="w-8 h-8 text-[var(--highlight)]" />,
    gradient: "from-fuchsia-500 to-pink-400",
    description: "Test your memory with this fun card game.",
    link: "/games/memory",
  },
  {
    name: "Rock Paper Scissors",
    icon: <HandMetal className="w-8 h-8 text-[var(--highlight)]" />,
    gradient: "from-yellow-500 to-orange-500",
    description: "Challenge the computer in this classic game.",
    link: "/games/rock-paper-scissors",
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <LandingHeader />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)]">All Games</h1>
        <p className="text-lg text-center text-gray-400 mb-8">
          Find your next favorite game from our collection.
        </p>
        <GameSearch />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {games.map((game, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105 bg-gradient-to-r ${game.gradient}`}
            >
              <div className="h-56 flex flex-col items-center justify-center p-6">
                {game.icon}
                <span className="text-white text-2xl font-bold mb-2 mt-2">{game.name}</span>
                <span className="text-white text-base mb-4 opacity-80 text-center">{game.description}</span>
                <Link href={game.link}>
                  <CustomButton name="Play Now" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 