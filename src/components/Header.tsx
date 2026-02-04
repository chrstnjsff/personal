"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-gray-100 dark:border-[#2a2a2a]">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-semibold text-lg text-gray-900 dark:text-white">
            CJA
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
