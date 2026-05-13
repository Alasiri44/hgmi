import LatestSermon from "../features/latestSermon";
import WelcomingSection from "../features/WelcomingSection";
import HomeBanner from "../features/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <WelcomingSection />
      <LatestSermon />
    </>
  );
}
