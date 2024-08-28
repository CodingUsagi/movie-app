import {
  getTrendingMoviesThisWeek,
  getTrendingMoviesToday,
  Movie,
} from "@/app/actions/movies";
import { Card } from "./card";
import { Blur } from "./blur";

export function TrendingMovies({ movies }: { movies: Movie[] }) {
  return (
    <div className="relative -z-0">
      <ul className="flex flex-row space-x-5 text-black pr-10 py-5 overflow-x-scroll">
        {movies.map((movie: Movie) => (
          <li key={movie.title}>
            <Card movie={movie} />
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 w-16 h-full">
        <Blur />
      </div>
    </div>
  );
}
