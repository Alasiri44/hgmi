import { useEffect, useState } from "react";
import banner1 from "../assets/hgmi-banner.png";

import { client } from "../lib/sanity";

const banner3 = await client.fetch(`
  *[_type == "ministry" && title == "Women of Influence"][0]{
    "image": image.asset->url
  }
`);

const banner2 = await client.fetch(`
  *[_type == "ministry" && title == "Kingdom Charge"][0]{
    "image": image.asset->url
  }
`);


export default function HomeBanner() {
  const banners = [
    {
      src: banner1,
      alt: "HGMI Banner",
      className: "object-top w-full h-auto min-h-[280px] max-h-[400px]",
      containerClassName: "h-[300px] lg:h-[400px]",
    },
    {
    src: banner2.image,
    alt: "Kingdom Charge Banner",
    className: "object-cover object-top w-full min-h-[280px] max-h-[400px]",   // adjust object-position below
    containerClassName: "h-[300px]",
  },
  {
    src: banner3.image,
    alt: "Women of Influence Banner",
    className: "object-cover object-top w-full min-h-[280px] max-h-[400px]", // adjust object-position below
    containerClassName: "h-[300px]",
  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  
  useEffect(() => {
    if (!isMobile) return; 

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [isMobile, banners.length]);

  if (!isMobile) {
    return (
      <>
        <img
          src={banner1}
          alt="HGMI Banner"
          className="w-full h-auto min-h-[280px] max-h-[400px]"
        />
      </>
    );
  }

  return (
    <div className="relative w-full h-[300px] max-h-[900px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 w-full
            transition-opacity duration-1000 ease-in-out
            ${banner.containerClassName}
            ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <img
            src={banner.src}
            alt={banner.alt}
            className={`
              absolute top-15 inset-0 w-full h-full
              transition-opacity duration-1000 ease-in-out
              ${banner.className}
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          />
        </div>
      ))}
    </div>
  );
}