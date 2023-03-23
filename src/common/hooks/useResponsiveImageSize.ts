import { useEffect, useState } from "react";

export type PosterSize = "w154" | "w342" | "w500" | "original";
export type ProfileSize = "w45" | "w185" | "h632" | "original";
type ImageType = "poster" | "profile";

type ImageSize<T extends ImageType> = {
  size: T extends "poster" ? PosterSize : ProfileSize;
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

export const useResponsiveImageSize = (
  type: ImageType
): typeof type extends "poster" ? PosterSize : ProfileSize => {
  const [imageSize, setImageSize] = useState<ImageSize<typeof type>>(
    type === "poster"
      ? getPosterImageSize(window.innerWidth)
      : getProfileImageSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newSize =
        type === "poster"
          ? getPosterImageSize(window.innerWidth)
          : getProfileImageSize(window.innerWidth);

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
    : ProfileSize;
};
