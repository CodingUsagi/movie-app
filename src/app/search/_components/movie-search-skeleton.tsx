import { SearchMovieResult } from "@/app/actions/movies";
import { ImageIcon } from "@/images/imageIcon";
import { motion } from "framer-motion";

export function MovieSearchSkeleton({ result }: { result: SearchMovieResult }) {
  return (
    <li
      key={result.id}
      className="border border-gray-200 shadow-lg flex items-center space-x-5 rounded-lg h-40 w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="rounded-l-md object-cover h-full w-28 2xl:w-36 bg-gray-300 fill-gray-400 flex justify-center items-center"
      >
        <ImageIcon />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="py-5 w-full"
      >
        <h5 className="bg-gray-300 h-5 rounded-lg w-1/3"></h5>
        <span className="bg-gray-300 h-5 rounded-lg w-1/3"></span>
        <p className="mt-3 pr-7 bg-gray-300 h-5 rounded-lg w-11/12"></p>
      </motion.div>
    </li>
  );
}
