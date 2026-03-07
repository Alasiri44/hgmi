
import LatestSermon from "../features/latestSermon";
import banner from "../assets/hgmi-banner.png"
import WelcomingSection from "../features/WelcomingSection";

export default function Home() {
  return (
    <>
      <img src={banner} alt="HGMI Banner" className="w-full h-100" />
      < WelcomingSection/>
    <LatestSermon
              videoId="https%3A%2F%2Fwww.facebook.com%2Fhganairobiwest%2Fvideos%2F1435675764603901%2F"
              title="Annointing Service"
              preacher="Pastor Laureen Rakiro"
            />
    </>
  );
}
