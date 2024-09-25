import { Banner } from "@/components/hero/banner";
import {
  getPopularMovies,
  getTrendingMoviesThisWeek,
  getTrendingMoviesToday,
} from "./actions/movies";
import Trending from "@/components/section/components/trending/trending";
import LatestTrailers from "@/components/section/components/trailers/latest-trailers";
import { Error } from "./movies/_components/error";

export default async function Home() {
  const trendingMoviesToday = (await getTrendingMoviesToday()).results;
  const trendingMoviesThisWeek = (await getTrendingMoviesThisWeek()).results;
  const popularMovies = (await getPopularMovies()).results;

  if (!trendingMoviesToday || !trendingMoviesThisWeek || !popularMovies) {
    return <Error />;
  }

  return (
    <main className="2xl:px-20 3xl:px-32 px-10 bg-white w-screen">
      <Banner popularMovies={popularMovies} />
      <Trending
        trendingMoviesToday={trendingMoviesToday}
        trendingMoviesThisWeek={trendingMoviesThisWeek}
      />
      <LatestTrailers popularMovies={popularMovies} />
    </main>
  );
}
