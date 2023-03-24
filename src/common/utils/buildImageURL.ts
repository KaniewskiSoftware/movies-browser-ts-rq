import {
  BackdropSize,
  ImageType,
  PosterSize,
  ProfileSize,
} from "../types/imageTypes";

export function buildImageURL(
  size: PosterSize,
  imagePath: string | null | undefined,
  type: "poster"
): string | null;

export function buildImageURL(
  size: ProfileSize,
  imagePath: string | null | undefined,
  type: "profile"
): string | null;

export function buildImageURL(
  size: BackdropSize,
  imagePath: string | null | undefined,
  type: "backdrop"
): string | null;

export function buildImageURL(
  size: string,
  imagePath: string | null | undefined,
  type: ImageType
): string | null {
  if (!imagePath) return null;

  return `https://image.tmdb.org/t/p/${size}${imagePath}`;
}
