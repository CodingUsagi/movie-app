"use server";

import { redirect } from "next/navigation";

export const getTrendingMoviesToday = async (timeWindow: string = "day") => {
  const response = await fetch(
    `${process.env.BASEURL}/trending/movie/${timeWindow}?api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const getTrendingMoviesThisWeek = async (
  timeWindow: string = "week"
) => {
  const response = await fetch(
    `${process.env.BASEURL}/trending/movie/${timeWindow}?api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const getPopularMovies = async (timeWindow: string = "week") => {
  const response = await fetch(
    `${process.env.BASEURL}/movie/popular?language=en-US&page=1&api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const getMovieVideo = async (id: number) => {
  const response = await fetch(
    `${process.env.BASEURL}/movie/${id}/videos?language=en-US&api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const getMovieById = async (id: string) => {
  const response = await fetch(
    `${process.env.BASEURL}/movie/${id}?api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const getMovieCasts = async (id: string) => {
  const response = await fetch(
    `${process.env.BASEURL}/movie/${id}/credits?language=en-US'&api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const search = async (keyword: string) => {
  const response = await fetch(
    `${process.env.BASEURL}/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1&api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const searchFormAction = async (prevState: any, formData: FormData) => {
  const searchText = formData.get("search") as string;
  if (!searchText) {
    return {
      error: "no text entered",
    };
  }
  const searchKeyword = searchText.split(" ").join("+");

  redirect(`/search?query=${searchKeyword}`);
};

export const getNowPlayingMovies = async () => {
  const response = await fetch(
    `${process.env.BASEURL}/movie/now_playing?language=en-US&page=1&api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${process.env.BASEURL}/movie/upcoming?language=en-US&page=1&api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export const getTopRatedMovies = async () => {
  const response = await fetch(
    `${process.env.BASEURL}/movie/top_rated?language=en-US&page=1&api_key=${process.env.APIKEY}`
  );
  return response.json();
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

export type SearchMovieResult = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchPersonResult = {
  adult: false;
  gender: number;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  media_type: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
};

type KnownFor = {
  original_name: string;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
};

export type SearchResult = SearchMovieResult | SearchPersonResult;
