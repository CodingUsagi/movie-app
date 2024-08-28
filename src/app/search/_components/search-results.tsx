"use client";

import { SearchMovieResult, SearchPersonResult } from "@/app/actions/movies";
import { MovieSearchCard } from "./movie-search-card";
import { ResultsCategory } from "./results-category";
import { useState } from "react";
import { PeopleSearchCard } from "./people-search-card";

export function SearchResults({
  movieResults,
  personResults,
}: {
  movieResults: SearchMovieResult[];
  personResults: SearchPersonResult[];
}) {
  const [resultCategory, setResultCategory] = useState<string>("movie");

  return (
    <section className="flex flex-col md:flex-row items-start md:space-x-10 lg:space-x-16 py-10 px-5 md:px-10 lg:px-20 2xl:px-32 min-w-4/5">
      <ResultsCategory
        resultCategory={resultCategory}
        setResultCategory={setResultCategory}
        movieNumber={movieResults.length}
        peopleNumber={personResults.length}
      />
      <div className="w-full md:w-4/5 lg:w-3/5 mt-10 md:mt-0">
        {resultCategory === "movie" && (
          <ul className="text-black flex flex-col gap-5">
            {movieResults.length === 0 ? (
              <p className="text-black">
                There are no movies that matched your query.
              </p>
            ) : (
              movieResults.map((result: SearchMovieResult) => {
                let movieTitle: string = "";

                if (result.title.includes("&")) {
                  movieTitle = result.title.replace("&", "-");
                }

                if (result.title.indexOf(" ") > 0) {
                  movieTitle = result.title.replace(/\s+/g, "-").toLowerCase();
                }

                return (
                  <li key={result.id}>
                    <MovieSearchCard result={result} />
                  </li>
                );
              })
            )}
          </ul>
        )}

        {resultCategory === "person" && (
          <ul className="text-black flex flex-col gap-5">
            {personResults.length === 0 ? (
              <p className="text-black">
                There are no people that matched your query.
              </p>
            ) : (
              personResults.map((result: SearchPersonResult) => {
                const knowForTitles = result.known_for
                  .map((known) => known.title || known.original_name)
                  .join(", ");
                return (
                  <li key={result.id}>
                    <PeopleSearchCard
                      result={result}
                      knowForTitles={knowForTitles}
                    />
                  </li>
                );
              })
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
