import { GenresObject } from "../api/genres/genres";

export const getTagsFromGenres = (
  genreIds: number[],
  genres: GenresObject
): string[] | null => {
  if (!genreIds || genreIds.length === 0) {
    return null;
  }

  return genreIds.map((genreId) => genres[genreId]);
};
