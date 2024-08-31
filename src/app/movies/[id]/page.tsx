import { Crew, getMovieById, getMovieCasts } from "@/app/actions/movies";
import { CircularProgressBar } from "../_components/circular-progress-bar";
import { CastCard } from "../_components/cast-card";
import { PlayTrailer } from "../_components/playTrailer";
import Image from "next/image";
import imageIcon from "../../../images/imageIcon.svg";

export default async function MovieDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movieId = id.split("-")[0];
  const movie = await getMovieById(movieId);
  const casts = await getMovieCasts(movieId);

  const backgroundImageUrl = `${process.env.NEXT_PUBLIC_IMAGEBASEURL}${movie.backdrop_path}`;
  let imageSrc: string;

  imageSrc = movie.poster_path
    ? `${process.env.NEXT_PUBLIC_IMAGEBASEURL}${movie.poster_path}`
    : imageIcon;

  const percentage = (movie.vote_average * 10).toFixed(0);

  const director = casts.crew.filter((cast: Crew) => cast.job === "Director");
  const characters = casts.cast.slice(0, 11);

  const movieGenres = movie.genres.map((genre: any) => genre.name).join(", ");

  return (
    <div className="min-h-[calc(100vh-80px)] overflow-x-hidden">
      <div
        className="min-h-[calc(100vh-80px)] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(36, 0, 7, 0.9), rgba(60, 2, 50, 0.9)), url(${backgroundImageUrl})`,
        }}
      >
        <div className="flex lg:space-x-10 xl:space-x-20 2xl:space-x-36 lg:space-y-0 space-y-20 md:space-y-32 h-full flex-col items-center lg:items-start lg:px-10 2xl:px-28 lg:flex-row w-screen">
          <div className="relative flex justify-center w-[20rem] h-[25rem] md:w-[30rem] md:h-[38rem] xl:w-[450px] xl:h-[600px] mt-16 lg:mt-10 xl:mt-20">
            <Image
              src={imageSrc}
              alt="title"
              priority
              fill
              className="rounded-md bg-gray-300 object-cover"
            />
          </div>
          <section className="text-white px-5 md:px-16 xl:px-5 lg:w-[40rem] xl:w-[60rem] lg:pt-10 xl:pt-20">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
              {movie.title} (
              <span className="font-normal">
                {movie.release_date.split("-")[0]}
              </span>
              )
            </h1>
            <div className="mt-2 flex text-white/80 text-[10px] md:text-base">
              <span className="after:content-['•'] after:ml-2">
                {movie.release_date}
              </span>
              <span className="ml-2 after:content-['•'] after:ml-2">
                {movieGenres}
              </span>
              <span className="ml-2">
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
              </span>
            </div>
            <div className="mt-10 flex items-center space-x-5 text-sm md:text-base">
              <CircularProgressBar percentage={+percentage} />
              <h3>User Score</h3>
              <PlayTrailer movieId={movieId} />
            </div>
            <p className="italic text-base md:text-lg text-white/60 mt-10 md:mt-5 lg:mt-10">
              {movie.tagline}
            </p>
            <h2 className="text-xl md:text-2xl my-10 md:my-5 lg:mt-10 font-semibold">
              Overview
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-12 md:mb-0">
              {movie.overview}
            </p>
            <CastCard director={director[0]} characters={characters} />
          </section>
        </div>
      </div>
    </div>
  );
}
