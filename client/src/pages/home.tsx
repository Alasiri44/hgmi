import LatestSermon from "../features/latestSermon";
import banner from "../assets/hgmi-banner.png";
import WelcomingSection from "../features/WelcomingSection";

export default function Home() {
  return (
    <>
      <img
        src={banner}
        alt="HGMI Banner"
        className="w-full h-auto min-h-[280px] max-h-[400px]"
      />
      <WelcomingSection />
      <LatestSermon />
    </>
  );
}
