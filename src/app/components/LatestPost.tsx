'use client'

import { useState } from "react";
import Link from "next/link";
import { useTheme } from 'next-themes';  // Import useTheme hook for theme management

const BLOG_POSTS = [
  {
    id: "1",
    slug: "PS5-Review",
    title: "From Stunning Graphics to Lightning-Fast Load Times: Why PS5 Stands Out",
    category: "Technology",
    image: "/p1.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a1.png",
    },
    date: "August 20, 2022",
    content: "This is the detailed content for the first blog post.",
  },
  {
    id: "2",
    slug: "Island-Life",
    title: "The Allure of Island Life: Sun, Sand, and Serenity",
    category: "Technology",
    image: "/p2.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a2.png",
    },
    date: "August 20, 2022",
    content: "This is the detailed content for the second blog post.",
  },
  {
    id: "3",
    slug: "guide-to-smartphones",
    title: "Your Ultimate Guide to the Best Smartphones of 2024",
    category: "Technology",
    image: "/p3.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a3.png",
    },
    date: "August 20, 2022",
    content: "This is the detailed content for the third blog post.",
  },
  {
    id: "4",
    slug: "Car-Maintenance",
    title: "How to Maintain Your Car and Extend Its Lifespan",
    category: "Technology",
    image: "/p4.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a1.png",
    },
    date: "August 20, 2022",
  },
  {
    id: "5",
    slug: "nature-healing",
    title: "The Healing Power of Nature: Benefits for Mind, Body, and Soul",
    category: "Technology",
    image: "/p5.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a2.png",
    },
    date: "August 20, 2022",
  },
  {
    id: "6",
    slug: "beach-activities",
    title: "Beach Activities: Fun Things to Do at the Shore",
    category: "Technology",
    image: "/p9.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a3.png",
    },
    date: "August 20, 2022",
  },
  // More posts...
];

export default function LatestPosts() {
  const [expandedPost, setExpandedPost] = useState(null);
  const { theme } = useTheme();  // Get the current theme (light or dark)

  const togglePost = (id: any) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section className={`py-12 px-4 mx-auto max-w-7xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors`}>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className={`rounded-lg shadow p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors`}
          >
            <Link href={`/blog/${post.slug}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm">{post.date}</p>
                <div className="flex items-center mt-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="ml-3 text-sm font-medium">{post.author.name}</p>
                </div>
                <button
                  className={`mt-2 text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} hover:underline`}
                  onClick={() => togglePost(post.id)}
                >
                  {expandedPost === post.id ? "Hide Content" : "Show Content"}
                </button>
                {expandedPost === post.id && (
                  <p className="mt-2">{post.content}</p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
