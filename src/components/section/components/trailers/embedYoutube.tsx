"use client";

import { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function EmbedYoutubeVideo({
  source,
  movieId,
}: {
  source: string;
  movieId: number;
}) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="w-[20rem] md:w-[36rem] aspect-video rounded-md">
      <LiteYouTubeEmbed id={source} title="Youtube Player" poster="hqdefault" />
    </div>
  );
}
