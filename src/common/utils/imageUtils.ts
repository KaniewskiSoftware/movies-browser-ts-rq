export const buildPosterURL = (
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original",
  posterPath: string | null | undefined,
): string | null => {
  if (!posterPath) return null;

  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
};
