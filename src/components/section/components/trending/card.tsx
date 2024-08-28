import Link from "next/link";
import Image from "next/image";
import { CircularProgressBar } from "./circular-progress-bar";
import { Movie } from "@/app/actions/movies";

export function Card({ movie }: { movie: Movie }) {
  const percentage = (movie.vote_average * 10).toFixed(0);

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
    <Link href={`movie/${movie.id}-${movieTitle}`}>
      <div className="tracking-wider w-36 2xl:w-44 shadow-lg h-full py-2 rounded-lg">
        <div className="relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGEBASEURL}${movie.poster_path}`}
            alt="title"
            width={300}
            height={300}
            className="rounded-md object-cover hover:scale-105 hover:transition hover:duration-500 hover:ease-in-out"
          />
          <div className="absolute left-5 -bottom-7">
            <CircularProgressBar percentage={+percentage} />
          </div>
        </div>
        <div className="my-2 text-sm md:text-base">
          <p className="px-2 font-semibold mt-10 h-full">{movie.title}</p>
          <p className="px-2 text-gray-400 mt-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
}
