type PosterSize = "w154" | "w342" | "w500" | "original";
type ProfileSize = "w45" | "w185" | "h632" | "original";

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
  size: string,
  imagePath: string | null | undefined,
  type: "poster" | "profile"
): string | null {
  if (!imagePath) return null;

  return `https://image.tmdb.org/t/p/${size}${imagePath}`;
}
