import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2.5 rounded-full border border-white/20 bg-black/40 text-white hover:border-white transition-all duration-300 backdrop-blur-md flex items-center justify-center"
      title={`Current: ${theme.toUpperCase()} mode. Click to toggle.`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-neutral-300 hover:text-white transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-300 hover:text-white transition-colors" />
      )}
    </button>
  );
}
