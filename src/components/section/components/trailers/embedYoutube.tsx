"use client";

import { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function EmbedYoutubeVideo({ source }: { source: string }) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="w-[20rem] lg:w-[25rem] aspect-video p-2 relative">
      <LiteYouTubeEmbed id={source} title="Youtube Player" poster="hqdefault" />
    </div>
  );
}
