
import LatestSermon from "../features/latestSermon";
import banner from "../assets/hgmi-banner.png"
import WelcomingSection from "../features/WelcomingSection";

export default function Home() {
  return (
    <>
      <img src={banner} alt="HGMI Banner" className="w-full h-auto min-h-[280px] max-h-[400px]" />
      < WelcomingSection/>
    <LatestSermon
              videoId="https%3A%2F%2Fwww.facebook.com%2Fhganairobiwest%2Fvideos%2F841948748931988%2F"
              title="Why Easter Matters"
              preacher="Pastor Laureen Rakiro"
              paragraph="The Resurrection That Conquered Sin, Temptation & Death (Isaiah 53) - part 2"
            />
    </>
  );
}
