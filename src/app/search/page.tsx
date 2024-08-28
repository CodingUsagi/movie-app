import { search, SearchResult } from "../actions/movies";
import { SearchResults } from "./_components/search-results";

export default async function SearchResultsPage({
  searchParams: { query },
}: {
  searchParams: { query: string };
}) {
  const results = (await search(query)).results;

  const movieResults = results.filter(
    (result: SearchResult) => result.media_type === "movie"
  );

  const personResults = results.filter(
    (result: SearchResult) => result.media_type === "person"
  );

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white">
      <SearchResults
        movieResults={movieResults}
        personResults={personResults}
      />
    </div>
  );
}
