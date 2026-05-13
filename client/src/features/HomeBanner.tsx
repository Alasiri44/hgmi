import { useEffect, useState } from "react";
import banner1 from "../assets/hgmi-banner.png";
// import banner2 from "../assets/kingdomcharge-banner.jpg";
// import banner3 from "../assets/womenofinfluence-banner.jpg";

export default function HomeBanner() {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 3 ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={banner1}
      alt={currentBanner.toString()}
      className="w-full h-auto min-h-[280px] max-h-[400px]"
    />
  );
}
