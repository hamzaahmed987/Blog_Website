// pages/about.tsx
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 lg:px-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl">About This Blog</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to our blog! Here, we share insightful articles, tips, and stories that inspire, inform, and entertain.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-8 flex justify-center">
          <div className="bg-black dark:bg-transparent rounded-lg shadow-lg dark:shadow-gray-800 p-2">
            <Image
              src="/darkIcon.png" // Using only darkIcon.png
              alt="About Us"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-12 max-w-3xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              We aim to provide quality content on various topics ranging from tech, personal development, to lifestyle. Our mission is to educate and inspire our readers by sharing our experiences and knowledge.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Meet the Team
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Our team consists of passionate individuals who are dedicated to producing thoughtful and engaging content. We believe in the power of sharing ideas and connecting with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
