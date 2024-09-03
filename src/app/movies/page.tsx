import Link from "next/link";
import { getPopularMovies, Movie } from "../actions/movies";
import { MovieCard } from "./_components/movie-card";
import { Error } from "./_components/error";

export default async function PopularMoviesPage() {
  const movies = (await getPopularMovies()).results;

  if (!movies) {
    return <Error />;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-5 lg:pt-10 w-screen overflow-x-hidden bg-white">
      <h2 className="text-black lg:text-3xl mt-2 lg:mt-10">Popular Movies</h2>
      <ul className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 lg:gap-10 text-black p-5 my-2 lg:my-10">
        {movies.map((movie: Movie) => {
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
            <li key={movie.title}>
              <Link href={`/movies/${movie.id}-${movieTitle}`}>
                <MovieCard movie={movie} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
