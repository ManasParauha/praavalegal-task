"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("praava-theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (systemPrefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("praava-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle dark mode"
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      className="fixed top-5 right-6 z-50 flex items-center justify-center p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 absolute transition-all duration-500 transform ${
            theme === "dark"
              ? "opacity-0 rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100 text-amber-500"
          }`}
        />
        <Moon
          className={`w-5 h-5 absolute transition-all duration-500 transform ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100 text-indigo-400"
              : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
