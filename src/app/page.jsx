"use client";
// "use-cient"
// import { redirect } from "next/navigation";
// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";

// const Page = () => {
//   const auth = useSelector(state => state.auth)
//   const router = useRouter()
//   if (!auth.user) {
//     router.push('/signIn')
//   }
//   return <>div</>;
// };

// export default Page;

import CustomButton from "@/components/common/button";
import { TowerControl, Users, Gem, Trophy, ShieldCheck, Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import LandingHeader from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturedGames from "@/components/landing/FeaturedGames";
import FeaturesSection from "@/components/landing/FeaturesSection";
import LandingFooter from "@/components/landing/Footer";

const games = [
  {
    name: "Tic Tac Toe",
    description: "Classic 3x3 grid game. Play against a friend!",
    image: "/public/window.svg",
    link: "#",
  },
  {
    name: "Snake",
    description: "Eat, grow, and avoid hitting the wall!",
    image: "/public/globe.svg",
    link: "#",
  },
  {
    name: "Memory Game",
    description: "Test your memory with this fun card game.",
    image: "/public/next.svg",
    link: "#",
  },
  {
    name: "Rock Paper Scissors",
    description: "Challenge the computer in this classic game.",
    image: "/public/vercel.svg",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <LandingHeader />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <FeaturedGames />
        <FeaturesSection />
      </main>
      <LandingFooter />
    </div>
  );
}
