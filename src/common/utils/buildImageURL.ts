import { ImageSizeMap, ImageType } from "./externalImagesProperties";

export const buildImageURL = (
  size: ImageSizeMap[ImageType],
  imagePath: string | null | undefined,
  type: ImageType
): string | null => {
  if (!imagePath) return null;

  return `https://image.tmdb.org/t/p/${size}${imagePath}`;
};
