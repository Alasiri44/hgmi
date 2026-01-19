
import LatestSermon from "../features/latestSermon";
import banner from "../assets/hgmi-banner.jpg"

export default function Home() {
  return (
    <>
      <img src={banner} alt="HGMI Banner" className="w-full h-100" />
    <LatestSermon
              videoId="bw4Ik7qqusM"
              title="Dreams and Interpretations"
              preacher="Pastor Dolapo Lawal"
            />
    </>
  );
}
