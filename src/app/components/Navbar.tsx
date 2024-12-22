'use client'

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "./search-bar"
import ThemeToggle from "./theme-btn"
import { useTheme } from 'next-themes'  // Import useTheme to manage theme state

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()  // Get the current theme (light or dark)

  return (
    <div className="max-w-[1918px] maxh-h-[100px] mx-auto bg-slate-50  dark:bg-slate-900 ">
      <div className="max-w-[1218px] maxh-h-[36px] mx-4 sm:mx-2 md:mx-8 flex items-center justify-between py-[20px] transition-colors">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex-shrink-0">
            {/* Logo for large screens */}
            <div className="hidden md:block w-[120px] h-[30px]">
              <Image
                alt="logo"
                src={theme === 'dark' ? "/darkLogo.png" : "/logo.png"}
                width={120}
                height={30}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Logo for small screens (conditional dark/light theme images) */}
            <div className="block md:hidden w-[80px] h-[20px]">
              <Image
                alt="logo-small"
                src={theme === 'dark' ? "/darkIcon.png" : "/icon.png"}
                width={80}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Menu (hidden on smaller screens) */}
        <div className="hidden lg:flex items-center max-w-[942px] text-gray-900 dark:text-gray-100 justify-center flex-1">
          <div className="flex items-center gap-x-[40px]">
            <Link
              href={"/blog"}
              className="font-semibold duration-300 hover:font-bold hover:scale-105 transition-transform"
            >
              Blog
            </Link>
            <Link
              href={"/about"}
              className="font-semibold duration-300 hover:font-bold hover:scale-105 transition-transform"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="font-semibold duration-300 hover:font-bold hover:scale-105 transition-transform"
            >
              Contact
            </Link>
            <Link
              href={"/author"}
              className="font-semibold duration-300 hover:font-bold hover:scale-105 transition-transform"
            >
              Author
            </Link>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center">
          <SearchBar />
        </div>

        {/* Theme toggle */}
        <div className="flex items-center px-2">
          <ThemeToggle />
        </div>

        {/* Hamburger menu (visible on smaller screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg py-2 w-48 z-10">
              <Link
                href={"/blog"}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Blog
              </Link>
              <Link
                href={"/about"}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact
              </Link>
              <Link
                href={"/author"}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Author
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto w-[90%] h-1 rounded-full 
     bg-gradient-to-r 
     from-gray-300 to-gray-500 
     dark:from-blue-500 dark:to-purple-500">
</div>
    </div>
  )
}

export default Navbar
