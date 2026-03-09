import { useEffect, useState } from "react";
// import SermonPlayer from "../components/sermon";
import axios from "axios";
import SermonPlayer from "../components/sermon";

type Video = {
  title: string;
  videoId: string;
};

export default function SermonsList() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const parseDuration = (duration: string) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    const hours = parseInt(match?.[1] || "0");
    const minutes = parseInt(match?.[2] || "0");
    const seconds = parseInt(match?.[3] || "0");

    return hours * 3600 + minutes * 60 + seconds;
  };

  useEffect(() => {
    const YOUTUBE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const fetchSermons = async () => {
      try {
        const listRes = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet,contentDetails",
              maxResults: 50,
              playlistId: "UU2n_8iVpdCHDjZdFz_W8uEQ",
              key: YOUTUBE_API_KEY,
            },
          },
        );

        const videoIds = listRes.data.items
          .map((item: any) => item.contentDetails.videoId)
          .join(",");

        const detailsRes = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "contentDetails,snippet",
              id: videoIds,
              key: YOUTUBE_API_KEY,
            },
          },
        );

        const sermons = detailsRes.data.items
          .filter((video: any) => {
            const duration = parseDuration(video.contentDetails.duration);
            return duration >= 1800; // 30 minutes
          })
          .map((video: any) => ({
            title: video.snippet.title,
            videoId: video.id,
          }));

        setVideos(sermons);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSermons();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {videos.map((video) => (
          <SermonPlayer
            key={video.videoId}
            videoId={video.videoId}
            title={video.title}
            preacher="Pastor Dolapo Lawal"
          />
        ))}
      </div>
    </div>
  );
}
