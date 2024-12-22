"use client";

import Image from "next/image";
import Link from "next/link";
// import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Author() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Author Section */}
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* Author Image */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/Profile-Picture.jpg"
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
          {/* Author Info */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Hamza Ahmed
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Web Developer | Content Creator
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-400 leading-relaxed">
              Hamza is a passionate web developer with a love for crafting
              beautiful and functional web experiences. He is always eager to
              learn new technologies and share his knowledge with the community.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-6">
              <Link
                href="https://www.linkedin.com/in/hamza-ahmed-9b38402b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
              >
                <Image src="/linkedin.png" alt="Linkedin" width={28} height={28} />
              </Link>
              <Link
                href="https://www.instagram.com/hamzaa_ahmed0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-500"
              >
                <Image src="/instagram.png" alt="Instagram" width={28} height={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* Author's Articles Section */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center md:text-left">
            Recent Articles
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "How to Build a Portfolio Website",
              "Mastering React",
              "Introduction to Next.js",
            ].map((article) => (
              <div
                key={article}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {article}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A brief description of the article content. It could discuss
                  web development trends, technologies, or tutorials.
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 mt-4 inline-block"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
