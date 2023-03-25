import { GenresObject } from "./convertGenresArrayToObject";

/**
 * Converts an array of genre IDs into an array of genre names by utilizing a GenresObject.
 *
 * @param genreIds - An array of genre IDs to be converted into genre names.
 * @param genres - A GenresObject containing the mapping of genre IDs to genre names.
 * @returns An array of genre names corresponding to the given genre IDs, or null if no genreIds are provided.
 */
export const getTagsFromGenres = (
  genreIds: number[],
  genres: GenresObject
): string[] | null => {
  if (!genreIds || genreIds.length === 0) {
    return null;
  }

  return genreIds.map((genreId) => genres[genreId]);
};
