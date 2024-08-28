import { SearchPersonResult } from "../actions/movies";
import { getPopularPeople } from "../actions/people";
import { PeopleCard } from "./_components/people-card";

export default async function NowPlayingMoviesPage() {
  const people = (await getPopularPeople()).results;
  console.log(people);
  return (
    <div className="flex flex-col justify-center items-center pt-5 lg:pt-10 lg:px-5 2xl:px-28 w-screen overflow-x-hidden bg-white">
      <h2 className="text-black lg:text-3xl mt-2 lg:mt-5">Popular People</h2>
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5 lg:gap-10 text-black p-5 my-2 lg:my-10">
        {people.map((person: SearchPersonResult) => {
          const knowForTitles = person.known_for
            .map((known) => known.title || known.original_name)
            .join(", ");

          return (
            <li key={person.id}>
              <PeopleCard person={person} knowForTitles={knowForTitles} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
