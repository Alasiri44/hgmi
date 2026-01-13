import { useEffect, useState } from "react";
// import SermonPlayer from "../components/sermon";
import axios from "axios";
import SermonPlayer from "../components/sermon";

type Video = {
  title: string;
  videoId: string;
}

export default function SermonsList() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UU2n_8iVpdCHDjZdFz_W8uEQ&key=AIzaSyCY8J6kCWANQkCk26tVfIkV8ENgp8Oma7I`
      )
      .then((res) => {
        setVideos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log(videos)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {videos.map((video) => (
        < SermonPlayer videoId={video.videoId} title="Understanding Dreams" preacher="Pastor Dolapo Lawal"/>
      ))}
    </ul>
  );
}
