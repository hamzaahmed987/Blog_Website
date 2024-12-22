'use client'

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()  // Get the current theme (light or dark)

  return (  
    <footer className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-[#d5d5d7]'} transition-colors`}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@jstemplate.net" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}>
                  info@jstemplate.net
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:880123456789" className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}>
                  880 123 456 789
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links and Categories - Updated Layout */}
          <div className="flex flex-wrap md:flex-nowrap gap-8">
            {/* Quick Links */}
            <div className="flex-1">
  <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
    Quick Links
  </h3>
  <nav className="space-y-2">
    <Link
      href="/"
      className={`block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
    >
      Home
    </Link>
    <Link
      href="/about"
      className={`block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
    >
      About
    </Link>
    <Link
      href="/blog"
      className={`block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
    >
      Blog
    </Link>
    <Link
      href="#"
      className={`block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
    >
      Archived
    </Link>
    <Link
      href="/author"
      className={`block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
    >
      Author
    </Link>
    <Link
      href="/contact"
      className={`block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
    >
      Contact
    </Link>
  </nav>
</div>


            {/* Category */}
            <div className="flex-1">
              <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Category</h3>
              <nav className="space-y-2">
                {["Lifestyle", "Technology", "Travel", "Business", "Economy", "Sports"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className={`block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Weekly Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Weekly Newsletter</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              Get blog articles and offers via email
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your Email"
                className={`w-full ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-900'}`}
              />
              <Button className={`w-full ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="dark:hidden">
                  <Image
                    src="/icon.png" // Light theme image path
                    alt="About Us - Light Theme"
                    width={40}
                    height={40}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                {/* Dark theme image */}
                <div className="hidden dark:block">
                  <Image
                    src="/darkIcon.png" // Dark theme image path
                    alt="About Us - Dark Theme"
                    width={40}
                    height={40}
                    className="rounded-lg shadow-lg dark:shadow-gray-800"
                  />
                </div>
              </div>
              <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>MetaBlog</span>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              © JS Template 2024. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900`}
                >
                  {item}
                </Link>
              ))}
            </div>
            {/* Social Media Icons */}
            <div className="flex p-1  gap-6">
              <Link
                href="https://www.linkedin.com/in/hamza-ahmed-9b38402b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800"
              >
                <Image src="/linkedin.png" alt="linkedin" width={24} height={24}/>     
              </Link>
              <Link
                href="https://www.instagram.com/hamzaa_ahmed098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
               <Image src="/instagram.png" alt="Instagram" width={24} height={24}/>              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
