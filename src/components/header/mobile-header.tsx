"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileNavbar } from "./mobile-navbar";

export function MobileHeader() {
  const [isToggled, setIsToggled] = useState(false);

  const items = ["Movies", "People"];

  return (
    <div className="w-screen bg-[#032541] flex justify-between items-center px-10">
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
      <nav className="relative">
        <button onClick={() => setIsToggled(!isToggled)} className="py-1.5">
          {isToggled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              className="size-6 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="size-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        {isToggled && (
          <menu className="absolute bg-gray-200 top-10 right-5 z-20 rounded-lg w-44 md:w-52">
            <ul className="text-gray-800 text-base md:text-lg flex flex-col items-center justify-center space-y-5 h-full py-5">
              <li className="">
                <h6 className="mb-2">Movies</h6>
                <MobileNavbar type="Movies" setIsToggled={setIsToggled} />
              </li>
              <li className="pl-5">
                <h6>People</h6>
                <MobileNavbar type="People" setIsToggled={setIsToggled} />
              </li>
            </ul>
          </menu>
        )}
      </nav>
    </div>
  );
}
