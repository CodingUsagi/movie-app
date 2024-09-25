import { describe, test, expect, vi } from "vitest";
import { server } from "./mocks/server";
import { Banner } from "@/components/hero/banner";
import {
  getPopularMovies,
  getTrendingMoviesThisWeek,
  getTrendingMoviesToday,
} from "./actions/movies";
import Trending from "@/components/section/components/trending/trending";
import LatestTrailers from "@/components/section/components/trailers/latest-trailers";

server.listen();

describe("test Movie DB API", () => {
  test("testing getTrendingMovies API", async () => {
    const movies = await getTrendingMoviesToday();
    console.log(movies);
    expect(movies).toHaveLength(3);
  });
});
