"use client";
import { Search, Gamepad2, Menu } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/authslice";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import AuthModal from "@/components/common/AuthModal";
import ProfileMenu from "@/components/common/ProfileMenu";

const Header = ({ openDrawer }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("signin");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
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

  const showSearch = !pathname.includes('/profile');

  return (
    <div className="h-16 flex items-center bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] shadow-lg px-4 md:px-6 relative z-10">
      <div className="flex items-center cursor-pointer mr-4 md:mr-6" onClick={openDrawer}>
        <Gamepad2 className="text-[var(--highlight)]" size={32} />
      </div>
      <div
        className="text-xl md:text-2xl font-extrabold tracking-widest bg-gradient-to-r from-[var(--highlight)] to-[var(--foreground)] text-transparent bg-clip-text select-none cursor-pointer"
        // onClick={() => router.push('/')}
      >
        GemPlay
      </div>
      {showSearch && (
        <div className="hidden md:flex flex-grow px-8 relative max-w-lg w-full">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full rounded-lg px-4 py-2 bg-[var(--card-bg)] text-[var(--foreground)] placeholder-gray-400 focus:outline-none"
          />
          <Search className="absolute right-3 top-2.5 text-[var(--highlight)]" size={20} />
        </div>
      )}
      <div className="flex items-center gap-2 md:gap-4 ml-auto">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {auth.user && (
            <div className="flex items-center gap-3 text-white font-semibold">
              <span>Balance:</span>
              <span className="font-bold text-[var(--highlight)]">{auth.user.balance || '$0.00'}</span>
            </div>
          )}
          {auth.user ? (
            <ProfileMenu user={auth.user} onLogout={handleLogout} onNavigate={handleNavigate} />
          ) : (
            <div className="flex items-center gap-3">
              <button onClick={handleSignIn} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--highlight)] text-white font-bold hover:bg-[var(--accent)] transition">Sign In</button>
              <button onClick={handleSignUp} className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[var(--highlight)] text-[var(--highlight)] font-bold hover:bg-[var(--highlight)] hover:text-white transition">Sign Up</button>
            </div>
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

      </div>
      {/* Mobile menu */}
      {mobileMenu && (
        <div className="absolute top-16 right-4 w-56 bg-gradient-to-br from-[#23234b]/95 to-[#1a1a2e]/95 border border-[var(--highlight)] rounded-2xl shadow-2xl z-50 animate-fadeInUp p-2">
          {auth.user ? (
            <>
              <button onClick={() => handleNavigate('account')} className="w-full text-left flex items-center gap-2 px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">My Profile</button>
              <button onClick={() => handleNavigate('account-statement')} className="w-full text-left flex items-center gap-2 px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Account Statement</button>
              <button onClick={() => handleNavigate('bet-history')} className="w-full text-left flex items-center gap-2 px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Bet History</button>
              <hr className="border-gray-700 my-1" />
              <button onClick={handleLogout} className="w-full text-left flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-500/20 rounded-xl transition font-semibold">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => { setMobileMenu(false); handleSignIn(); }} className="w-full text-left block px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Sign In</button>
              <button onClick={() => { setMobileMenu(false); handleSignUp(); }} className="w-full text-left block px-4 py-3 text-[var(--highlight)] hover:bg-[var(--highlight)]/20 rounded-xl transition">Sign Up</button>
            </>
          )}
        </div>
      )}
      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} defaultTab={modalTab} />
    </div>
  );
};

export default Header;
