export function ResultsCategory({
  resultCategory,
  setResultCategory,
  movieNumber,
  peopleNumber,
}: {
  resultCategory: string;
  setResultCategory: (result: string) => void;
  movieNumber: number;
  peopleNumber: number;
}) {
  return (
    <div className="w-80 md:w-60 lg:w-80 h-48 border-2 border-gray-100 rounded-lg">
      <header className="bg-indigo-400 rounded-t-lg h-20 flex justify-start items-center w-full">
        <h3 className="text-white text-center text-lg md:text-xl pl-10">
          Search Results
        </h3>
      </header>
      <ul className="flex flex-col justify-center items-start gap-2 py-2">
        <li
          key="movies"
          className={`${
            resultCategory === "movie" && "bg-gray-200 font-semibold"
          } h-10 w-full px-10 flex items-center justify-between text-black cursor-pointer`}
          onClick={() => setResultCategory("movie")}
        >
          <h5>Movies</h5>
          <span
            className={`${
              resultCategory === "movie" ? "bg-white" : "bg-gray-200"
            } font-extralight text-sm w-12 rounded-lg text-center`}
          >
            {movieNumber}
          </span>
        </li>
        <li
          key="person"
          className={`${
            resultCategory === "person" && "bg-gray-200 font-semibold"
          } h-10 w-full px-10 flex items-center justify-between text-black cursor-pointer`}
          onClick={() => setResultCategory("person")}
        >
          <h5>People</h5>
          <span
            className={`${
              resultCategory === "person" ? "bg-white" : "bg-gray-200"
            } font-extralight text-sm w-12 rounded-lg text-center`}
          >
            {peopleNumber}
          </span>
        </li>
      </ul>
    </div>
  );
}
