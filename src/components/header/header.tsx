import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header>
      <div className="w-screen bg-[#032541] flex justify-around items-center xl:justify-normal space-x-5 h-16 px-5 md:h-20 xl:px-20">
        <Link href="/" className="py-5 pl-2 xl:pl-20">
          <div className="w-24 md:w-36">
            <Image
              width={300}
              height={300}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
              priority
              className="object-cover"
            />
          </div>
        </Link>
        <nav className="xl:pl-16 md:pr-20">
          <ul className="text-white text-sm md:text-lg xl:text-xl flex items-center space-x-12 h-full">
            <li className="group relative py-4">
              <h6>Movies</h6>
              <Navbar type="movies" />
            </li>
            <li className="group relative py-4">
              <h6>People</h6>
              <Navbar type="people" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
