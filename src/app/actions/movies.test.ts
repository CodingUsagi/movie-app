import { describe, test, expect } from "vitest";
import { server } from "../mocks/server";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTrendingMoviesThisWeek,
  getTrendingMoviesToday,
  getUpcomingMovies,
} from "./movies";
import { http, HttpResponse } from "msw";

server.listen();

describe("Test getTrendingMoviesToday API", () => {
  test("Should have length of 3", async () => {
    const movies = await getTrendingMoviesToday();
    expect(movies).toHaveLength(3);
  });

  test("should return empty array with an error", async () => {
    server.use(
      http.get(
        `${process.env.BASEURL}/trending/movie/day?api_key=${process.env.APIKEY}`,
        () => {
          return HttpResponse.json([], { status: 400 });
        }
      )
    );
    const movies = await getTrendingMoviesToday();
    expect(movies).toHaveLength(0);
  });
});

describe("Test getTrendingMoviesThisWeek API", () => {
  test("Should have length of 3", async () => {
    const movies = await getTrendingMoviesThisWeek();
    expect(movies).toHaveLength(3);
  });

  test("should return empty array with an error", async () => {
    server.use(
      http.get(
        `${process.env.BASEURL}/trending/movie/week?api_key=${process.env.APIKEY}`,
        () => {
          return HttpResponse.json([], { status: 400 });
        }
      )
    );
    const movies = await getTrendingMoviesThisWeek();
    expect(movies).toHaveLength(0);
  });
});

describe("Test getPopularMovies API", () => {
  test("Should have length of 3", async () => {
    const movies = await getPopularMovies();
    expect(movies).toHaveLength(3);
  });

  test("should return empty array with an error", async () => {
    server.use(
      http.get(
        `${process.env.BASEURL}/movie/popular?language=en-US&page=1&api_key=${process.env.APIKEY}`,
        () => {
          return HttpResponse.json([], { status: 400 });
        }
      )
    );
    const movies = await getPopularMovies();
    expect(movies).toHaveLength(0);
  });
});

describe("Test getNowPlayingMovies API", () => {
  test("Should have length of 3", async () => {
    const movies = await getNowPlayingMovies();
    expect(movies).toHaveLength(3);
  });

  test("should return empty array with an error", async () => {
    server.use(
      http.get(
        `${process.env.BASEURL}/movie/now_playing?language=en-US&page=1&api_key=${process.env.APIKEY}`,
        () => {
          return HttpResponse.json([], { status: 400 });
        }
      )
    );
    const movies = await getNowPlayingMovies();
    expect(movies).toHaveLength(0);
  });
});

describe("Test getUpcomingMovies API", () => {
  test("Should have length of 3", async () => {
    const movies = await getUpcomingMovies();
    expect(movies).toHaveLength(3);
  });

  test("should return empty array with an error", async () => {
    server.use(
      http.get(
        `${process.env.BASEURL}/movie/upcoming?language=en-US&page=1&api_key=${process.env.APIKEY}`,
        () => {
          return HttpResponse.json([], { status: 400 });
        }
      )
    );
    const movies = await getUpcomingMovies();
    expect(movies).toHaveLength(0);
  });
});
