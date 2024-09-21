"use client";

import { getNowPlayingMovies, Movie } from "@/app/actions/movies";
import { MovieCard } from "../_components/movie-card";
import Link from "next/link";
import { Error } from "../_components/error";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NowPlayingMoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getNowPlayingMovies().then((res) => {
      setMovies(res.results);
    });
  }, []);

  if (!movies) {
    return <Error />;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-5 lg:pt-10 w-screen overflow-x-hidden bg-white">
      <h2 className="text-black lg:text-3xl mt-2 lg:mt-10">
        Now Playing Movies
      </h2>
      <ul className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 lg:gap-10 text-black p-5 my-2 lg:my-10">
        {movies.map((movie: Movie, index: number) => {
          let movieTitle: string = "";

          if (movie.title.includes("&")) {
            movieTitle = movie.title.replace("&", "-");
          }

          if (movie.title.indexOf(" ") > 0) {
            movieTitle = movie.title.replace(/\s+/g, "-").toLowerCase();
          } else {
            movieTitle = movie.title.toLowerCase();
          }

          return (
            <motion.li
              key={movie.id}
              initial={{ opacity: 0, translateX: -20 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <Link href={`/movies/${movie.id}-${movieTitle}`}>
                <MovieCard movie={movie} />
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
