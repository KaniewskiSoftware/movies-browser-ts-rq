import { useEffect, useState } from "react";
import {
  breakpoints,
  ImageSize,
  ImageSizeMap,
  ImageType,
} from "../utils/externalImagesProperties";

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
