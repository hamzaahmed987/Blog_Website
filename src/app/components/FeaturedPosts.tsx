'use client'

import Link from "next/link"
import Image from "next/image"
import { useTheme } from 'next-themes'  // Import useTheme hook for theme management

interface FeaturedPost {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const featuredPosts: FeaturedPost[] = [
  {
    title: "Understanding Artificial Intelligence",
    description:
      "A deep dive into the concepts and advancements in Artificial Intelligence, and how it's shaping the future.",
    imageSrc: "/ai.avif", 
    link: "#",
  },
  {
    title: "Web Development Trends in 2024",
    description:
      "Stay ahead of the curve with the latest trends in web development, from new frameworks to cutting-edge tools.",
    imageSrc: "/web.avif", 
    link: "#",
  },
  {
    title: "Sustainable Living Tips",
    description:
      "Practical advice on how to reduce your carbon footprint and live more sustainably in the modern world.",
    imageSrc: "/nat.avif", 
    link: "#",
  },
]

export default function FeaturedPosts() {
  const { theme } = useTheme();  // Get the current theme (light or dark)

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-center`}>
          Featured Articles
        </h2>
        <p className={`mt-2 text-xl text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Check out our latest and most popular posts.
        </p>

        {/* Featured Posts Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div
              key={post.title}
              className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative w-full h-56">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className={`p-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{post.description}</p>
                <Link
                  href={post.link}
                  className={`mt-4 inline-block ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-700 font-semibold`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            href="#"
            className={`inline-block py-3 px-6 text-lg font-semibold ${theme === 'dark' ? 'text-white bg-blue-600' : 'text-white bg-blue-600'} hover:bg-blue-700 rounded-md`}
          >
            Explore More Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
