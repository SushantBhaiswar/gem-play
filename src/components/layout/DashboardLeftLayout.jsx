"use client";
import { Gamepad2, Home, List, User, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/authslice";

const DashboardLeftLayout = ({ isDrawerOpen, openDrawer }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  const navItems = [
    { name: "Home", icon: <Home />, href: "/" },
    { name: "All Games", icon: <List />, href: "/games" },
    { name: "My Profile", icon: <User />, href: "/profile" },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full 
        bg-gradient-to-b from-[var(--primary)] to-[#1a1a2e] text-white 
        transition-transform transform duration-300 ease-in-out z-50
        md:relative md:translate-x-0
        ${isDrawerOpen ? "translate-x-0 w-64" : "-translate-x-full w-64 md:w-20"}
      `}
    >
      <div
        className={`flex items-center gap-2 p-4 cursor-pointer h-16 border-b border-gray-700 ${isDrawerOpen ? "justify-between" : "justify-center"}`}
        onClick={openDrawer}
      >
        <div className={`flex items-center gap-2`}>
          <Gamepad2 className="text-[var(--highlight)]" size={32} />
          {isDrawerOpen && <span className="text-xl font-bold">GemPlay</span>}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--highlight)]/20 transition ${!isDrawerOpen ? "justify-center" : ""}`}
          >
            {item.icon}
            {isDrawerOpen && <span>{item.name}</span>}
          </Link>
        ))}
        {auth.user ? (
          <button
            onClick={handleLogout}
            className={`flex items-center gap-4 p-3 rounded-lg hover:bg-red-500/20 text-red-500 transition ${!isDrawerOpen ? "justify-center" : ""}`}
          >
            <LogOut />
            {isDrawerOpen && <span>Logout</span>}
          </button>
        ) : (
          <Link
            href="/signin"
            className={`flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--highlight)]/20 transition ${!isDrawerOpen ? "justify-center" : ""}`}
          >
            <LogIn />
            {isDrawerOpen && <span>Login</span>}
          </Link>
        )}
      </div>
    </aside>
  );
};

export default DashboardLeftLayout;
