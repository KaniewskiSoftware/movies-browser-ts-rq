import { GenresObject } from "../api/genres/genres";

export const getTagsFromGenres = (
  genreIds: number[],
  genres: GenresObject
): string[] => {
  return genreIds.map((genreId) => genres[genreId]);
};
