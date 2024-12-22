"use client"

import { BlogCard } from "../components/blog-card";
import { useRouter } from "next/navigation";
import { useTheme } from 'next-themes'; 

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
  }, {
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
  }, {
    id: "7",
    slug: "property-ownership",
    title: "Finding Your Dream Home: A Guide to Property Ownership",
    category: "Technology",
    image: "/p6.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a1.png",
    },
    date: "August 20, 2022",
  },
  {
    id: "8",
    slug: "luxury-cars-2024",
    title: "Luxury Cars in 2024: What’s Hot and What’s Not",
    category: "Technology",
    image: "/p7.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a2.png",
    },
    date: "August 20, 2022",
  },
  {
    id: "9",
    slug: "luxury-tours-2024",
    title: `<h2 class="text-xl font-semibold dark:text-gray-200 text-gray-800 mb-4">Introduction: The Rise of Luxury Travel in 2024</h2>`,
    category: "Technology",
    image: "/p8.png",
    author: {
      name: "Brady Wilson",
      avatar: "/a3.png",
    },
    date: "August 20, 2022",
  },
  // Add more posts as needed
];

export default function LatestPosts() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleViewPost = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <section
      className={`py-12 px-4 mx-auto max-w-7xl ${
        theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'
      } transition-colors`}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => handleViewPost(post.slug)}
            className={`cursor-pointer rounded-lg shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } transition-colors`}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button
          className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
            theme === 'dark'
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => router.push(`/blog`)}
        >
          View All Posts
        </button>
      </div>
    </section>
  );
}