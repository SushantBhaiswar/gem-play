"use client";
import DashboardLeftLayout from "@/components/layout/DashboardLeftLayout";
import DashboardRightLayout from "@/components/layout/DashboardRightLayout";
import { useState, useEffect } from "react";

export default function MainLayout({ children }) {
  // On desktop, drawer is open. On mobile, it's closed.
  const [isDrawerOpen, setDrawer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = (e) => {
        setIsDesktop(e.matches);
        setDrawer(e.matches);
    };
    
    handleResize(mediaQuery); // Set initial state
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const openDrawer = () => {
    setDrawer(!isDrawerOpen);
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      {/* Backdrop for mobile overlay */}
      {isDrawerOpen && !isDesktop && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={openDrawer}
          aria-hidden="true"
        />
      )}

      <DashboardLeftLayout isDrawerOpen={isDrawerOpen} openDrawer={openDrawer} />

      <DashboardRightLayout openDrawer={openDrawer}>
        {children}
      </DashboardRightLayout>
    </div>
  );
}
