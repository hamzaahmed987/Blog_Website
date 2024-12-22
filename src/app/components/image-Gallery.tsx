import Image from 'next/image';

const images = [
  { src: '/hero.png', width: 1200, height: 750 },
  { src: '/hero.png', width: 1134, height: 601 },
  { src: '/hero.png', width: 1042, height: 583 },
  { src: '/hero.png', width: 1010, height: 767 },
  { src: '/hero.png', width: 700, height: 389 },
  { src: '/hero.png', width: 1200, height: 750 },
  { src: '/hero.png', width: 1134, height: 601 },
  { src: '/hero.png', width: 1042, height: 583 },
  { src: '/hero.png', width: 1010, height: 767 },
  { src: '/hero.png', width: 700, height: 389 },
  { src: '/hero.png', width: 1116, height: 687 },
  { src: '/hero.png', width: 1136, height: 679 },
  { src: '/hero.png', width: 700, height: 595 },
  { src: '/hero.png', width: 700, height: 477 },
  { src: '/hero.png', width: 700, height: 604 },
  { src: '/hero.png', width: 11, height: 76 },
  { src: '/hero.png', width: 700, height: 428 },
  { src: '/hero.png', width: 1000, height: 1028 },
  { src: '/hero.png', width: 1152, height: 824 },
  { src: '/hero.png', width: 1064, height: 869 },
  { src: '/hero.png', width: 1044, height: 649 },
  { src: '/hero.png', width: 1218, height: 925 },
];

export default function ImageGallery() {
  return (
    <div className="grid gap-3 lg:gap-4 grid-cols-4 lg:grid-cols-5 items-end mt-20">
      <div className="col-span-1 grid-cols-1 gap-3 lg:gap-4 hidden lg:grid">
        {images.slice(0, 4).map((image, index) => (
          <ImageWrapper key={index} image={image} />
        ))}
      </div>
      {[0, 1, 2, 3].map((columnIndex) => (
        <div key={columnIndex} className="col-span-1 grid grid-cols-1 gap-3 lg:gap-4">
          {images.slice(4 + columnIndex * 3, 7 + columnIndex * 3).map((image, index) => (
            <ImageWrapper key={index} image={image} />
          ))}
        </div>
      ))}
    </div>
  );
}

function ImageWrapper({ image }: { image: { src: string; width: number; height: number } }) {
  return (
    <div className="relative w-full pb-[100%]">
      <Image
        src={image.src}
        alt=""
        fill
        sizes="(max-width: 800px) calc((100vw - 12vmin - 3rem) / 4), calc((100vw - 12vmin - 6rem) / 5)"
        className="object-cover rounded-lg"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${btoa(
          '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="#cccccc"/></svg>'
        )}`}
      />
    </div>
  );
}

