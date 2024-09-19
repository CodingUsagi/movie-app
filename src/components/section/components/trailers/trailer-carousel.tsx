"use client";

import { Movie } from "@/app/actions/movies";
import { VideoCard } from "./video-card";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function TrailerCarousel({ movies }: { movies: Movie[] }) {
  const [pause, setPause] = useState(false);
  let [ref, { width }] = useMeasure();
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width * 20;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: pause ? 10000 : 300,
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: pause ? 10000 : 300,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, rerender, mustFinish, pause]);

  return (
    <motion.ul
      ref={ref}
      style={{ x: xTranslation }}
      onHoverStart={() => {
        setPause(true);
        setMustFinish(true);
      }}
      onHoverEnd={() => {
        setPause(false);
        setMustFinish(true);
      }}
      className="flex flex-row space-x-5 text-black pr-10 my-10"
    >
      {[...movies, ...movies].map((movie: Movie, index: number) => {
        return (
          <li key={index}>
            <VideoCard movieId={movie.id} />
          </li>
        );
      })}
    </motion.ul>
  );
}
