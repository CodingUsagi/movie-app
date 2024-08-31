"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();

  return (
    <div
      className="fixed top-0 left-0 bg-black/80 flex justify-center items-center w-screen h-screen"
      onClick={router.back}
    />
  );
}
