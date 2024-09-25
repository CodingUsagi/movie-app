import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { search, SearchResult } from "../actions/movies";
import { SearchResults } from "./_components/search-results";
import { describe, expect, it } from "vitest";
import { server } from "../mocks/server";

server.listen();

describe("Search Results", () => {
  it("renders", async () => {
    const results = await search("jack");
    const movieResults = results.filter(
      (result: SearchResult) => result.media_type === "movie"
    );

    const personResults = results.filter(
      (result: SearchResult) => result.media_type === "person"
    );

    render(
      <SearchResults
        movieResults={movieResults}
        personResults={personResults}
      />
    );

    expect(movieResults).toHaveLength(7);
    expect(personResults).toHaveLength(8);

    const heading = screen.getAllByText(/jack/i);

    expect(heading[0]).toBeInTheDocument();
  });
});

// export default async function SearchResultsPage({
//   searchParams: { query },
// }: {
//   searchParams: { query: string };
// }) {
//   const results = (await search(query)).results;

//   const movieResults = results.filter(
//     (result: SearchResult) => result.media_type === "movie"
//   );

//   const personResults = results.filter(
//     (result: SearchResult) => result.media_type === "person"
//   );

//   return (
//     <div className="min-h-[calc(100vh-80px)] bg-white">
//       <SearchResults
//         movieResults={movieResults}
//         personResults={personResults}
//       />
//     </div>
//   );
// }
