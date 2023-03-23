import { useEffect, useState } from "react";

type PosterSize = {
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original"; // Possible poster sizes from the API.
  width: number;
};

const posterBreakpoints: PosterSize[] = [
  { size: "w154", width: 467 },
  { size: "w342", width: 767 },
  { size: "w500", width: Infinity },
];

const getPosterSize = (width: number): PosterSize => {
  return posterBreakpoints.find((breakpoint) => width <= breakpoint.width)!;
};

export const useResponsiveImageSize = () => {
  const [posterSize, setPosterSize] = useState<PosterSize>(
    getPosterSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newSize = getPosterSize(window.innerWidth);
      if (!posterSize || newSize !== posterSize) {
        setPosterSize(newSize);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [posterSize]);

  return posterSize.size;
};
