import { useEffect, useState } from "react";
import {
  breakpoints,
  ImageSize,
  ImageSizeMap,
  ImageType,
} from "../utils/externalImagesProperties";

/**
 * Returns the appropriate image size based on the given image type and screen width.
 *
 * @param type - The image type (poster, profile, or backdrop).
 * @param width - The current screen width.
 * @returns The image size from the ImageSizeMap that best fits the screen width.
 */
const getImageSize = (
  type: ImageType,
  width: number
): ImageSizeMap[ImageType] => {
  return (breakpoints[type] as ImageSize<typeof type>[]).find(
    (breakpoint: ImageSize<typeof type>) => width <= breakpoint.width
  )!.size;
};

/**
 * A custom React Hook that returns the appropriate image size based on the given image type
 * and the current screen width. The image size will be updated whenever the screen is resized.
 *
 * @param type - The image type (poster, profile, or backdrop).
 * @returns The image size from the ImageSizeMap that best fits the current screen width.
 */
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

    // Cleanup function to remove the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSize, type]);

  return imageSize.size;
};
