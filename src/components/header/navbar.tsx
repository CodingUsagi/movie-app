import Link from "next/link";

export function Navbar({ type }: { type: string }) {
  return (
    <div className="hidden rounded-md text-sm md:text-lg bg-gray-200 text-black w-32 md:w-48 py-2 md:py-5 group-hover:block bg-{#fff]} absolute top-12 right-0 md:left-0 z-10">
      {type === "movies" ? (
        <ul className="flex flex-col text-[12px] md:text-base items-start space-y-2">
          <li
            key="Popular"
            className="hover:bg-gray-300/50 w-full py-1 cursor-pointer"
          >
            <Link href="/movie">
              <h6 className="px-5">Popular</h6>
            </Link>
          </li>
          <li
            key="Now Playing"
            className="hover:bg-gray-300/50 w-full py-1 cursor-pointer"
          >
            <Link href="/movie/now-playing">
              <h6 className="px-5">Now Playing</h6>
            </Link>
          </li>
          <li className="hover:bg-gray-300/50 w-full py-1 cursor-pointer">
            <Link href="/movie/upcoming">
              <h6 className="px-5">UpComing</h6>
            </Link>
          </li>
          <li className="hover:bg-gray-300/50 w-full py-1 cursor-pointer">
            <Link href="/movie/top-rated">
              <h6 className="px-5">Top Rated</h6>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex items-start text-[12px] md:text-base">
          <li className="hover:bg-gray-300/50 w-full py-1 cursor-pointer">
            <Link href="/person">
              <h6 className="px-5">Popular People</h6>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
