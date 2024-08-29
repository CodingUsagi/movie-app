import { Movie } from "@/app/actions/movies";
import { TrailerCarousel } from "./trailer-carousel";
import { Error } from "./error";

export default function LatestTrailers({
  popularMovies,
}: {
  popularMovies: Movie[];
}) {
  if (!popularMovies) {
    return <Error />;
  }

  return (
    <section className="mt-10 pb-10 overflow-x-hidden">
      <div className="flex items-center space-x-5">
        <h6 className="text-xl md:text-2xl tracking-wider text-black font-semibold animate-pulse">
          Latest Trailers
        </h6>
      </div>

      <ul className="flex flex-row space-x-5 text-black pr-10 my-10 relative animate-carousel-move">
        {popularMovies.map((movie: Movie) => {
          return (
            <li key={movie.id}>
              <TrailerCarousel movieId={movie.id} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
