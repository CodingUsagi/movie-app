import { SearchPersonResult } from "@/app/actions/movies";
import Image from "next/image";
import imageIcon from "@/images/imageIcon.svg";

export function PeopleSearchCard({
  result,
  knowForTitles,
}: {
  result: SearchPersonResult;
  knowForTitles: string;
}) {
  let imageSrc = result.profile_path
    ? `${process.env.NEXT_PUBLIC_IMAGEBASEURL}${result.profile_path}`
    : imageIcon;

  return (
    <div
      key={result.id}
      className="border border-gray-200 shadow-lg flex items-center space-x-5 rounded-lg h-28 w-full"
    >
      <div className="relative w-28 h-28">
        <Image
          src={imageSrc}
          alt={result.name}
          fill
          className="h-auto w-full py-[1px] rounded-l-md object-cover bg-gray-300"
        />
      </div>

      <div className="py-5 w-full">
        <h5 className="text-base md:text-lg font-semibold">{result.name}</h5>
        <div className="flex items-center">
          <span className="after:content-['•'] after:ml-2 text-sm md:text-base">
            {result.known_for_department}
          </span>

          <p className="ml-2 font-thin text-[10px] md:text-sm lg:text-base">
            {knowForTitles}
          </p>
        </div>
      </div>
    </div>
  );
}
