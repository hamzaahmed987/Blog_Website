"use client";

import React, { useState } from "react";
// import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Define types for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center">Get in Touch</h2>
        <p className="mt-2 text-center text-lg text-gray-600 dark:text-gray-300">
          We’d love to hear from you. Reach out with any questions or feedback!
        </p>
        <div className="mt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-4 flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/hamza-ahmed-9b38402b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
            >
              <Image src="/linkedin.png" alt="Linkedin" width={24} height={24} />
            </Link>
            <Link
              href="https://www.instagram.com/hamzaa_ahmed098/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-500"
            >
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
