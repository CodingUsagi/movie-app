"use client";

import { useRouter } from "next/navigation";

export function MobileNavbar({
  type,
  setIsToggled,
}: {
  type: string;
  setIsToggled: (isToggled: boolean) => void;
}) {
  const router = useRouter();

  return (
    <div className="text-sm bg-gray-200 text-black bg-{#fff]}">
      {type === "Movies" ? (
        <menu className="flex flex-col text-[12px] md:text-base items-start space-y-2">
          <li
            key="Popular"
            className="hover:bg-gray-300/50 w-full py-1 cursor-pointer"
          >
            <button
              onClick={() => {
                setIsToggled(false);
                router.push("/movies");
              }}
            >
              <h6 className="px-5">Popular</h6>
            </button>
          </li>
          <li
            key="Now Playing"
            className="hover:bg-gray-300/50 w-full py-1 cursor-pointer"
          >
            <button
              onClick={() => {
                setIsToggled(false);
                router.push("/movies/now-playing");
              }}
            >
              <h6 className="px-5">Now Playing</h6>
            </button>
          </li>
          <li className="hover:bg-gray-300/50 w-full py-1 cursor-pointer">
            <button
              onClick={() => {
                setIsToggled(false);
                router.push("/movies/upcoming");
              }}
            >
              <h6 className="px-5">UpComing</h6>
            </button>
          </li>
          <li className="hover:bg-gray-300/50 w-full py-1 cursor-pointer">
            <button
              onClick={() => {
                setIsToggled(false);
                router.push("/movies/top-rated");
              }}
            >
              <h6 className="px-5">Top Rated</h6>
            </button>
          </li>
        </menu>
      ) : (
        <menu className="flex items-start text-[12px] md:text-base">
          <li className="hover:bg-gray-300/50 w-full py-1 cursor-pointer">
            <button
              onClick={() => {
                setIsToggled(false);
                router.push("/person");
              }}
            >
              <h6 className="px-5">Popular People</h6>
            </button>
          </li>
        </menu>
      )}
    </div>
  );
}
