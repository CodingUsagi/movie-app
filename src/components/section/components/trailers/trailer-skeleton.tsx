"use client";

import { motion } from "framer-motion";

export function TrailerSkeleton() {
  return (
    <div className="aspect-video w-80 rounded-md animate-pulse">
      <div className="flex flex-col items-center h-full rounded-md">
        <div className="w-full bg-gray-300 h-2/3 rounded-md"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="flex pt-5 space-x-8 items-start justify-center w-full"
        >
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="flex flex-col space-y-3 w-5/6">
            <div className="w-full bg-gray-300 h-6 rounded-md "></div>
            <div className="w-full bg-gray-300 h-6 rounded-md "></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
