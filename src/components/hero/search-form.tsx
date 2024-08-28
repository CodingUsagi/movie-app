"use client";

import { searchFormAction } from "@/app/actions/movies";
import { useFormState } from "react-dom";

export function SearchForm() {
  const [formState, formAction] = useFormState(searchFormAction, { error: "" });

  return (
    <form action={formAction} className="mt-5">
      <div className="py-7 md:py-12">
        <label htmlFor="search" className="relative">
          <div className="relative">
            <input
              type="text"
              id="search"
              name="search"
              className="rounded-full w-11/12 bg-white placeholder-gray-400 placeholder-opacity-25 py-1.5 px-2 md:py-2.5 md:px-5 text-gray-700 text-sm md:text-lg focus:outline-none"
              placeholder="Search for a movie, person...."
            />
            <button
              type="submit"
              className="absolute right-5 md:right-12 xl:right-16 bg-gradient-to-r hover:text-black from-[#1ED5A9] to-[#01B4E4] h-8 md:h-12 rounded-full w-16 md:w-28 text-white text-sm md:text-lg py-1"
            >
              Search
            </button>
          </div>
        </label>
        {formState.error && (
          <p className="text-red-500 my-2 mx-2">
            Please enter the keyword that you want to search
          </p>
        )}
      </div>
    </form>
  );
}
