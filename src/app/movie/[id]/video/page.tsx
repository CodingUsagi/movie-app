import ModalBackdrop from "@/app/movie/_components/modal-backdrop";
import { getMovieVideo } from "@/app/actions/movies";

export default async function InterceptedVideoPage({
  searchParams: { query },
}: {
  searchParams: { query: string };
}) {
  const videos = (await getMovieVideo(+query)).results;

  const videoSrc =
    `${process.env.NEXT_PUBLIC_YOUTUBE_BASEURL}` + `${videos[1]?.key}`;

  return (
    <div className="h-screen xl:h-[calc(100vh-80px)]">
      <ModalBackdrop />
      <dialog className="w-full xl:w-2/3 rounded-lg translate-y-10" open>
        <div className="aspect-video w-full">
          <iframe
            src={videoSrc}
            frameBorder={0}
            allowFullScreen
            loading="lazy"
            title="youtube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full rounded-md"
          />
        </div>
      </dialog>
    </div>
  );
}
