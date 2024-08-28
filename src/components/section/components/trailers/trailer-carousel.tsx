import { getMovieVideo } from "@/app/actions/movies";
import { EmbedYoutubeVideo } from "./embedYoutube";

export async function TrailerCarousel({ movieId }: { movieId: number }) {
  const videos = (await getMovieVideo(movieId)).results;

  const videoSrc =
    `${process.env.NEXT_PUBLIC_YOUTUBE_BASEURL}` + `${videos[0]?.key}`;

  return <EmbedYoutubeVideo source={videos[0].key} movieId={movieId} />;
}
