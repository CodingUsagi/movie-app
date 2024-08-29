import Image from "next/image";
import type { Movie } from "@/app/actions/movies";
import { CircularProgressBar } from "@/components/section/components/trending/circular-progress-bar";

export function MovieCard({ movie }: { movie: Movie }) {
  const percentage = (movie.vote_average * 10).toFixed(0);

  return (
    <div className="tracking-wider w-40 lg:w-48 2xl:w-56 shadow-lg h-full py-2 rounded-lg">
      <div className="relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGEBASEURL}${movie.poster_path}`}
          alt="title"
          width={300}
          height={300}
          priority
          className="rounded-md object-cover"
        />
        <div className="absolute left-5 -bottom-7">
          <CircularProgressBar percentage={+percentage} />
        </div>
      </div>
      <div className="py-2 h-32">
        <h5 className="px-2 font-semibold pt-10 text-sm md:text-base">
          {movie.title}
        </h5>
        <span className="px-2 text-gray-400 mt-1 text-sm md:text-base">
          {movie.release_date}
        </span>
      </div>
    </div>
  );
}
