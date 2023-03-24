import { useEffect, useState } from "react";
import {
  BackdropSize,
  ImageType,
  PosterSize,
  ProfileSize,
} from "../types/imageTypes";

type ImageSizeMap = {
  poster: PosterSize;
  profile: ProfileSize;
  backdrop: BackdropSize;
};

type ImageSize<T extends ImageType> = {
  size: ImageSizeMap[T];
  width: number;
};

const breakpoints: {
  [key in ImageType]: ImageSize<key>[];
} = {
  poster: [
    { size: "w154", width: 467 },
    { size: "w342", width: 767 },
    { size: "w500", width: Infinity },
  ],
  profile: [
    { size: "w185", width: 600 },
    { size: "h632", width: Infinity },
  ],
  backdrop: [
    { size: "w780", width: 767 },
    { size: "w1280", width: 1224 },
    { size: "original", width: Infinity },
  ],
};

const getImageSize = (
  type: ImageType,
  width: number
): ImageSizeMap[ImageType] => {
  return (breakpoints[type] as ImageSize<typeof type>[]).find(
    (breakpoint: ImageSize<typeof type>) => width <= breakpoint.width
  )!.size;
};

export const useResponsiveImageSize = (
  type: ImageType
): ImageSizeMap[ImageType] => {
  const [imageSize, setImageSize] = useState<ImageSize<ImageType>>({
    size: getImageSize(type, window.innerWidth),
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      const newSize = getImageSize(type, window.innerWidth);

      if (!imageSize || newSize !== imageSize.size) {
        setImageSize({ size: newSize, width: window.innerWidth });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSize, type]);

  return imageSize.size;
};
