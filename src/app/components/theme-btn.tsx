"use client"

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Ensure the component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Set default theme to "light" on mount
  useEffect(() => {
    if (mounted && !theme) {
      setTheme('light');
    }
  }, [mounted, theme, setTheme]);

  // Prevent rendering until the component is mounted
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out shadow-md hover:scale-105"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={resolvedTheme === 'dark'}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-yellow-500 transition-colors duration-300 ease-in-out" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-900 transition-colors duration-300 ease-in-out" />
      )}
    </button>
  );
}

export default ThemeToggle;
