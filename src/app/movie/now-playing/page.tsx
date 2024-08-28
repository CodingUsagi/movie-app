import { getNowPlayingMovies, Movie } from "@/app/actions/movies";
import { Card } from "../_components/card";
import Link from "next/link";

export default async function NowPlayingMoviesPage() {
  const movies = (await getNowPlayingMovies()).results;

  return (
    <div className="flex flex-col justify-center items-center pt-5 lg:pt-10 w-screen overflow-x-hidden bg-white">
      <h2 className="text-black lg:text-3xl mt-2 lg:mt-10">
        Now Playing Movies
      </h2>
      <ul className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 lg:gap-10 text-black p-5 my-2 lg:my-10">
        {movies.map((movie: Movie) => {
          let movieTitle: string = "";

          if (movie.title.includes("&")) {
            movieTitle = movie.title.replace("&", "-");
          }

          if (movie.title.indexOf(" ") > 0) {
            movieTitle = movie.title.replace(/\s+/g, "-").toLowerCase();
          }

          return (
            <Link href={`/movie/${movie.id}-${movieTitle}`}>
              <li key={movie.title}>
                <Card movie={movie} />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
