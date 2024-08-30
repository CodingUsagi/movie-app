import { SearchMovieResult } from "@/app/actions/movies";
import Image from "next/image";
import imageIcon from "@/images/imageIcon.svg";
import Link from "next/link";

export function MovieSearchCard({ result }: { result: SearchMovieResult }) {
  let imageSrc: string;

  imageSrc = result.poster_path
    ? `${process.env.NEXT_PUBLIC_IMAGEBASEURL}${result.poster_path}`
    : imageIcon;

  return (
    <div className="border border-gray-200 shadow-lg flex items-center space-x-5 rounded-lg h-40 w-full">
      <Link href={`movie/${result.id}-${result.title}`}>
        <div className="relative w-28 h-40">
          <Image
            src={imageSrc}
            alt={result.title}
            fill
            className="w-full py-[1px] rounded-l-md object-cover bg-gray-300"
          />
        </div>
      </Link>

      <div className="w-full">
        <h5 className="text-lg font-semibold">{result.title}</h5>
        <span className="text-gray-400">{result.release_date}</span>
        <p className="mt-3 line-clamp-2 pr-7 font-light">{result.overview}</p>
      </div>
    </div>
  );
}
