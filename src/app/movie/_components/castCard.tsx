import { Cast, Crew } from "@/app/actions/movies";
import { dir } from "console";

export function CastCard({
  director,
  characters,
}: {
  director: Crew;
  characters: Cast[];
}) {
  return (
    <div className="text-white my-10">
      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 text-white">
        <li key={director.id} className="flex flex-col">
          <span className="font-semibold text-sm md:text-base">
            {director.name}
          </span>
          <span className="font-extralight text-sm md:text-base text-white/80">
            {director.job}
          </span>
        </li>
        {characters?.map((character) => (
          <li className="flex flex-col" key={character.cast_id}>
            <span className="font-semibold">{character.name}</span>
            <span className="font-extralight text-sm text-white/80">
              {character.character}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
