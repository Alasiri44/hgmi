import { useEffect, useState } from "react";
import banner1 from "../assets/hgmi-banner.jpeg";
import banner2 from "../assets/kingdomchargebanner.jpeg";
import banner3 from "../assets/womenofinfluencebanner.jpeg";

export default function HomeBanner() {
  const banners = [
    { src: banner1, alt: "HGMI Banner" },
    { src: banner2, alt: "Kingdom Charge Banner" },
    { src: banner3, alt: "Women of Influence Banner" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full overflow-hidden mt-17 lg:mt-17">
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner.src}
          alt={banner.alt}
          className={`
            w-full h-[180px] lg:h-auto
            transition-opacity duration-1000 ease-in-out
            ${
              index === currentIndex
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0"
            }
          `}
        />
      ))}
    </div>
  );
}