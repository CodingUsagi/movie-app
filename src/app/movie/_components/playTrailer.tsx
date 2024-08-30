"use client";

import { useRouter } from "next/navigation";

export function PlayTrailer({ movieId }: { movieId: string }) {
  const router = useRouter();

  return (
    <div
      className="flex items-center w-40 cursor-pointer hover:text-white/60"
      onClick={() => {
        router.push(`/movie/${movieId}/video?query=${movieId}`);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 fill-white mr-2 hover:fill-white/60"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
      <span>Play Trailer</span>
    </div>
  );
}
