
import LatestSermon from "../features/latestSermon";
import banner from "../assets/hgmi-banner.jpg"

export default function Home() {
  return (
    <>
      <img src={banner} alt="HGMI Banner" className="w-full h-100" />
    <LatestSermon
              videoId="56oZSNGd93o"
              title="Dreams and Interpretations"
              preacher="Pastor Dolapo Lawal"
            />
    </>
  );
}
