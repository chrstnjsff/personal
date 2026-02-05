"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-gray-200 dark:bg-[#333]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
        isDark ? "bg-[#333]" : "bg-gray-200"
      }`}
      aria-label="Toggle theme"
    >
      {/* Switch knob */}
      <div
        className={`absolute top-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDark
            ? "left-8 bg-gray-800"
            : "left-1 bg-white shadow-md"
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-blue-400" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
