import { useState } from "react";
import imageIcon from "../../../../public/imageIcon.svg";

export function ImageSkeleton() {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div>
      <img src={imageIcon} alt="imageIcon" />
    </div>
  );
}
