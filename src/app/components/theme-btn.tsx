'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Ensure the component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent rendering until the component is mounted to avoid issues with server-side rendering
  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-yellow-500 transition-colors" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-900 transition-colors" />
      )}
    </button>
  )
}

export default ThemeToggle
