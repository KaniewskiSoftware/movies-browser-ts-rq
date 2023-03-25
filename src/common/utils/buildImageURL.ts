import { ImageSizeMap, ImageType } from "./externalImagesProperties";

/**
 * Constructs a complete image URL from the given image size, image path, and image type.
 *
 * @param {ImageSizeMap[ImageType]} size - The size of the image as a string (e.g., "w92", "w185", etc.).
 * @param {string | null | undefined} imagePath - The path of the image from the external source (e.g., "/path/to/image.jpg").
 * @param {ImageType} type - The type of the image (e.g., "poster", "profile", "backdrop").
 * @returns {string | null} The complete image URL if the imagePath is provided, otherwise null.
 */
export const buildImageURL = (
  size: ImageSizeMap[ImageType],
  imagePath: string | null | undefined,
  type: ImageType
): string | null => {
  if (!imagePath) return null;

  return `https://image.tmdb.org/t/p/${size}${imagePath}`;
};
