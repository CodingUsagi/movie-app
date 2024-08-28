"use client";

import { TrendingToggle } from "./trending-toggle";
import { TrendingMovies } from "./trending-movie";
import { useState } from "react";
import { Movie } from "@/app/actions/movies";

export default function Trending({
  trendingMoviesToday,
  trendingMoviesThisWeek,
}: {
  trendingMoviesToday: Movie[];
  trendingMoviesThisWeek: Movie[];
}) {
  const [toggle, setToggle] = useState(true);

  let movies = toggle ? trendingMoviesToday : trendingMoviesThisWeek;

  return (
    <section className="mt-10 mb-20 overflow-x-hidden">
      <div className="flex items-center space-x-5">
        <h6 className="text-xl md:text-2xl tracking-wider text-black font-semibold">
          Trending
        </h6>
        <TrendingToggle toggle={toggle} setToggle={setToggle} />
      </div>

      <TrendingMovies movies={movies} />
    </section>
  );
}
