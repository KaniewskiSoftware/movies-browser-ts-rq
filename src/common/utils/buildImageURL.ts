export const buildImageURL = (
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original", // Possible poster sizes from the API.
  imagePath: string | null | undefined,
): string | null => {
  if (!imagePath) return null;

  return `https://image.tmdb.org/t/p/${size}${imagePath}`;
};
