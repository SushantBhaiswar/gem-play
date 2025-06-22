"use client";
import Link from "next/link";
import { Gem, Menu, User, History, FileText, LogOut } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/authslice";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "@/components/common/AuthModal";
import ProfileMenu from "@/components/common/ProfileMenu";

export default function LandingHeader() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("signin");
  const [mobileMenu, setMobileMenu] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSignIn = () => {
    setModalTab("signin");
    setModalOpen(true);
  };
  const handleSignUp = () => {
    setModalTab("signup");
    setModalOpen(true);
  };
  const handleLogout = () => {
    dispatch(logout());
    setMobileMenu(false);
  };
  const handleNavigate = (path) => {
    router.push(`/profile?tab=${path}`);
    setMobileMenu(false);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-[var(--primary)]/90 backdrop-blur shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Gem className="w-8 h-8 text-[var(--highlight)] animate-pulse" />
          <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-transparent bg-clip-text select-none">GemPlay</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/" className="text-[var(--foreground)] font-semibold hover:text-[var(--highlight)] transition px-2">Home</Link>
          <Link href="/games" className="text-[var(--foreground)] font-semibold hover:text-[var(--highlight)] transition px-2">Games</Link>
          {auth.user ? (
            <>
              <div className="flex items-center gap-2 text-white font-semibold pr-2">
                <span>Balance:</span>
                <span className="font-bold text-[var(--highlight)]">{auth.user.balance || '$0.00'}</span>
              </div>
              <ProfileMenu user={auth.user} onLogout={handleLogout} onNavigate={handleNavigate} />
            </>
          ) : (
            <>
              <button onClick={handleSignIn} className="px-4 py-2 rounded-lg bg-[var(--highlight)] text-white font-bold hover:bg-[var(--accent)] transition">Sign In</button>
              <button onClick={handleSignUp} className="px-4 py-2 rounded-lg border-2 border-[var(--highlight)] text-[var(--highlight)] font-bold hover:bg-[var(--highlight)] hover:text-white transition">Sign Up</button>
            </>
          )}
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center gap-4">
            {auth.user && (
                <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="font-bold text-[var(--highlight)]">{auth.user.balance || '$0.00'}</span>
                </div>
            )}
            <button className="p-2" onClick={() => setMobileMenu(!mobileMenu)}>
                <Menu className="text-white" size={28} />
            </button>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {mobileMenu && (
          <div className="absolute top-16 right-4 w-56 bg-gradient-to-br from-[#23234b]/95 to-[#1a1a2e]/95 border border-[var(--highlight)] rounded-2xl shadow-2xl z-50 animate-fadeInUp p-2">
            {auth.user ? (
              <>
                <button onClick={() => handleNavigate('account')} className="w-full text-left flex items-center gap-2 px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">My Profile</button>
                <button onClick={() => handleNavigate('account-statement')} className="w-full text-left flex items-center gap-2 px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Account Statement</button>
                <button onClick={() => handleNavigate('bet-history')} className="w-full text-left flex items-center gap-2 px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Bet History</button>
                <hr className="border-gray-700 my-1"/>
                <button onClick={handleLogout} className="w-full text-left flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-500/20 rounded-xl transition font-semibold">Logout</button>
              </>
            ) : (
              <>
                <Link href="/" onClick={() => setMobileMenu(false)} className="block px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Home</Link>
                <Link href="/games" onClick={() => setMobileMenu(false)} className="block px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Games</Link>
                <hr className="border-gray-700 my-1"/>
                <button onClick={() => { setMobileMenu(false); handleSignIn(); }} className="w-full text-left block px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Sign In</button>
                <button onClick={() => { setMobileMenu(false); handleSignUp(); }} className="w-full text-left block px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Sign Up</button>
              </>
            )}
          </div>
        )}
      </nav>
      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} defaultTab={modalTab} />
    </header>
  );
} 