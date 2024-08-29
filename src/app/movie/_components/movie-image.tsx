"use client";

import Image from "next/image";
import imageIcon from "../../../../public/imageIcon.svg";
import { useState } from "react";

export function ImageSkeleton() {
  return (
    <div>
      <Image src={imageIcon} alt="imageIcon" />
    </div>
  );
}

export function MovieImage({ src }: { src: string }) {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="relative flex justify-center w-[20rem] h-[25rem] md:w-[30rem] md:h-[38rem] xl:w-[450px] xl:h-[600px] mt-16 lg:mt-10 xl:mt-20">
      {!loaded && <ImageSkeleton />}

      <Image
        onLoad={() => setLoaded(true)}
        src={src}
        alt="title"
        priority
        fill
        className="rounded-md bg-gray-300 object-cover"
      />
    </div>
  );
}
