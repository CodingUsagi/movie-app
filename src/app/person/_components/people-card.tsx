import { SearchPersonResult } from "@/app/actions/movies";
import Image from "next/image";
import imageIcon from "@/images/imageIcon.svg";

export function PeopleCard({
  person,
  knowForTitles,
}: {
  person: SearchPersonResult;
  knowForTitles: string;
}) {
  let imageSrc = person.profile_path
    ? `${process.env.NEXT_PUBLIC_IMAGEBASEURL}${person.profile_path}`
    : imageIcon;

  return (
    <div
      key={person.id}
      className="border border-gray-200 shadow-lg flex flex-col items-center space-x-5 rounded-lg h-[50vh] xl:h-[60vh] w-full"
    >
      <div className="relative w-full h-4/5">
        <Image
          src={imageSrc}
          alt={person.name}
          fill
          className="py-[1px] rounded-l-md object-cover bg-gray-300"
        />
      </div>

      <div className="py-5 w-full h-1/5">
        <h5 className="text-base md:text-lg font-semibold">{person.name}</h5>
        <div className="flex items-center">
          <p className="font-thin text-[10px] md:text-sm">{knowForTitles}</p>
        </div>
      </div>
    </div>
  );
}
