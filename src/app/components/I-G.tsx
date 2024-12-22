import React from 'react'
import Image from 'next/image';

const Images = () => {
  return (
    <div className='max-w-[1918px] maxh-h-[100px] mx-auto grid gap-3 lg:gap-4 grid-cols-4 lg:grid-cols-5 items-end mt-20 col-span-1'>

<div className="col-span-1 grid grid-cols-1 gap-3 lg:gap-4  lg:grid">
      <Image
        src="/hero.png"
        alt="Image 1"
        width={1200}
        height={750}
        sizes="(max-width: 800px) calc((100vw - 12vmin - 3rem) / 4), calc((100vw - 12vmin - 6rem) / 5)"
        className="w-full h-auto"
        priority
      />
      <Image
        src="/hero.png"
        alt="Image 2"
        width={1134}
        height={601}
        sizes="(max-width: 800px) calc((100vw - 12vmin - 3rem) / 4), calc((100vw - 12vmin - 6rem) / 5)"
        className="w-full h-auto"
        loading="lazy"
      />
      <Image
        src="/hero.png"
        alt="Image 3"
        width={1042}
        height={583}
        sizes="(max-width: 800px) calc((100vw - 12vmin - 3rem) / 4), calc((100vw - 12vmin - 6rem) / 5)"
        className="w-full h-auto"
        loading="lazy"
      />
      <Image
        src="/hero.png"
        alt="Image 4"
        width={1010}
        height={767}
        sizes="(max-width: 800px) calc((100vw - 12vmin - 3rem) / 4), calc((100vw - 12vmin - 6rem) / 5)"
        className="w-full h-auto"
        loading="lazy"
      />
    </div>

    <div className="col-span-1 grid grid-cols-1 gap-3 lg:gap-4">
      <Image
        src="/hero.png" // Add your image source here
        alt=""
        width={700}
        height={477}
        className="w-full h-auto"
        priority={false}
      />
      <Image
        src="/hero.png" // Add your image source here
        alt=""
        width={700}
        height={604}
        className="w-full h-auto"
        priority={false}
      />
      <Image
        src="/hero.png" // Add your image source here
        alt=""
        width={1134}
        height={726}
        className="w-full h-auto"
        priority={false}
      />
    </div>

      
    </div>
  )
}

export default Images;
