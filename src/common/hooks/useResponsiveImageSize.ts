import { useEffect, useState } from "react";
import {
  BackdropSize,
  ImageType,
  PosterSize,
  ProfileSize,
} from "../types/imageTypes";

type ImageSize<T extends ImageType> = {
  size: T extends "poster"
    ? PosterSize
    : T extends "profile"
    ? ProfileSize
    : BackdropSize;
  width: number;
};

const posterBreakpoints: ImageSize<"poster">[] = [
  { size: "w154", width: 467 },
  { size: "w342", width: 767 },
  { size: "w500", width: Infinity },
];

const profileBreakpoints: ImageSize<"profile">[] = [
  { size: "w185", width: 600 },
  { size: "h632", width: Infinity },
];

const backdropBreakpoints: ImageSize<"backdrop">[] = [
  { size: "w780", width: 767 },
  { size: "w1280", width: 1224 },
  { size: "original", width: Infinity },
];

const getPosterImageSize = (width: number): ImageSize<"poster"> => {
  return posterBreakpoints.find(
    (breakpoint: ImageSize<"poster">) => width <= breakpoint.width
  )!;
};

const getProfileImageSize = (width: number): ImageSize<"profile"> => {
  return profileBreakpoints.find(
    (breakpoint: ImageSize<"profile">) => width <= breakpoint.width
  )!;
};

const getBackdropImageSize = (width: number): ImageSize<"backdrop"> => {
  return backdropBreakpoints.find(
    (breakpoint: ImageSize<"backdrop">) => width <= breakpoint.width
  )!;
};

export const useResponsiveImageSize = (
  type: ImageType
): typeof type extends "poster"
  ? PosterSize
  : typeof type extends "profile"
  ? ProfileSize
  : BackdropSize => {
  const [imageSize, setImageSize] = useState<ImageSize<typeof type>>(
    type === "poster"
      ? getPosterImageSize(window.innerWidth)
      : type === "profile"
      ? getProfileImageSize(window.innerWidth)
      : getBackdropImageSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newSize =
        type === "poster"
          ? getPosterImageSize(window.innerWidth)
          : type === "profile"
          ? getProfileImageSize(window.innerWidth)
          : getBackdropImageSize(window.innerWidth);

      if (!imageSize || newSize !== imageSize) {
        setImageSize(newSize);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSize, type]);

  return imageSize.size as typeof type extends "poster"
    ? PosterSize
    : typeof type extends "profile"
    ? ProfileSize
    : BackdropSize;
};
