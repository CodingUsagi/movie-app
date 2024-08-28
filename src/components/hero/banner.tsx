"use client";

import { Movie } from "@/app/actions/movies";
import { motion } from "framer-motion";
import { SearchForm } from "./search-form";

export const Banner = ({ populars }: { populars: Movie[] }) => {
  const randomNmber = Math.floor(Math.random() * 8);
  const backgroundImageUrl = `https://image.tmdb.org/t/p/original${populars[randomNmber].backdrop_path}`;

  return (
    <div
      className="h-68 md:h-96 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(30, 37, 65, 0.9) 0%, rgba(3, 37, 65, 0.7) 100%), url(${backgroundImageUrl})`,
      }}
    >
      <div className="px-5 md:px-10 pt-5 md:pt-20 w-full">
        <motion.p
          initial={{
            x: "50vw",
            scale: 1.5,
            color: "#EA775C",
          }}
          animate={{
            translateX: "-50vw",
            scale: 1,
            color: "#fff",
          }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
          className="text-white text-3xl md:text-5xl my-2 font-semibold"
        >
          Welcome.
        </motion.p>

        <p className="text-white text-xl md:text-3xl">
          Millions of movies and people to discover. Explore now.
        </p>
        <SearchForm />
      </div>
    </div>
  );
};
