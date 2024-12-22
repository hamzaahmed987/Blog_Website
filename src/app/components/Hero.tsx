'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Hero = () => {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-10 max-w-[1918px] mx-auto transition-colors">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 mt-10 lg:mt-0">
        <h1
          className={`text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] font-bold leading-tight tracking-tight 
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'} transition-colors`}
        >
          <span className="block">Independent technology</span>
          <span className="block">
            <span className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} transition-colors`}>
              for modern publishing
            </span>
          </span>
        </h1>
        <p className="text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-lg mt-4 text-gray-500 dark:text-gray-400">
          Empowering creators with cutting-edge tools and technology to share their stories.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 max-w-[1216px]">
      <Image
  src={'/hero.png'}
  alt="hero"
  width={900}
  height={600}
  className="object-cover rounded-lg shadow-lg mx-auto"
  layout="responsive" 
  // priority={true} // Optimized loading for the hero image
/>
      </div>
    </div>
  )
}

export default Hero
