"use client";

import { getMovieVideo } from "@/app/actions/movies";
import { EmbedYoutubeVideo } from "./embedYoutube";
import { useEffect, useState } from "react";

export function VideoCard({ movieId }: { movieId: number }) {
  async function getVideos(movieId: number) {
    return (await getMovieVideo(movieId)).results;
  }
  const [videoKey, setVideoKey] = useState<string>("");

  useEffect(() => {
    getVideos(movieId).then((res) => {
      setVideoKey(res[0].key);
    });
  }, [movieId]);

  return (
    <div>
      <EmbedYoutubeVideo source={videoKey} />
    </div>
  );
}
