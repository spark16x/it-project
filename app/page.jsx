"use client";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#0A192F] text-[#E6E6E6]"
          : "bg-[#F9FAFB] text-[#1E1E1E]"
      }`}
    >
      <div className="text-center p-6 max-w-xl">
        <img
          src="/icons/icon-192x192.png"
          alt="Arcfuse Logo"
          className="w-24 h-24 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4 text-[#007BFF]">
          Welcome to Arcfuse
        </h1>
        <p className="text-lg mb-8">
          Unify all your social platforms in one powerful space.
        </p>

        <button
          onClick={toggleTheme}
          className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
            theme === "dark"
              ? "bg-[#007BFF] hover:bg-[#00D1FF] text-white"
              : "bg-[#007BFF] hover:bg-[#005FCC] text-white"
          }`}
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      <footer
        className={`mt-16 py-4 text-sm ${
          theme === "dark" ? "text-[#A0AEC0]" : "text-[#6B7280]"
        }`}
      >
        © {new Date().getFullYear()} Arcfuse. All rights reserved.
      </footer>
    </main>
  );
}