import { Movie } from "@/app/actions/movies";
import { Error } from "./error";
import { TrailerCarousel } from "./trailer-carousel";

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

      <TrailerCarousel movies={popularMovies} />
    </section>
  );
}
