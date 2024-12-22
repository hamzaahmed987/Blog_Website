"use client"

import * as React from "react"
import { Search, Sun, Moon } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function SearchBar() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className=" dark:bg-gray-900 ">
      <div className="max-w-3xl mx-auto flex items-center gap-4">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search"
            className={cn(
              "max-w-[166px] max-h-[36px] py-2 pl-4 pr-10 rounded-lg",
              "bg-white dark:bg-gray-800",
              "text-gray-900 dark:text-gray-100",
              "border border-gray-200 dark:border-gray-700",
              "focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400",
              "placeholder:text-gray-500 dark:placeholder:text-gray-400"
            )}
          />
          <button
            type="submit"
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2",
              "text-gray-500 dark:text-gray-400",
              "hover:text-gray-700 dark:hover:text-gray-200",
              "focus:outline-none rounded"
            )}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </button>
        </div>
        
      </div>
    </div>
  )
}

