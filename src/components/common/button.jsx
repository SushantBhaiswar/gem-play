import * as React from "react";

export default function Button({ icon, children, ...props }) {
  return (
    <button
      {...props}
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold text-lg bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] active:scale-95"
    >
      {icon}
      {children}
    </button>
  );
}
