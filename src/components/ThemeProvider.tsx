"use client";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme} className="p-2 text-white bg-gray-800 dark:bg-gray-200 dark:text-black rounded">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      {children}
    </div>
  );
}
