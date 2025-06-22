"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authslice";

export const SignInFeat = ({ onLoginSuccess }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password, name: "Test User", balance: "$1,250.00" }));
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <input 
        className="border-2 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] bg-transparent text-white" 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        className="border-2 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] bg-transparent text-white" 
        type="password" 
        name="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] text-white font-bold hover:scale-105 transition shadow-lg">
        Sign In
      </button>
    </form>
  );
};
