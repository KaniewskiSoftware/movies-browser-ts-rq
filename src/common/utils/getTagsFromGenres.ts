import { GenresObject } from "./convertGenresArrayToObject";

/**
 * Converts an array of genre IDs or a genresDetailed array into an array of genre names by utilizing a GenresObject.
 *
 * @param genreIds - An array of genre IDs to be converted into genre names.
 * @param genres - A GenresObject containing the mapping of genre IDs to genre names.
 * @param genresDetailed - An optional array of objects with a 'name' property containing genre names.
 * @returns An array of genre names corresponding to the given genre IDs or genresDetailed array, or null if no valid input is provided.
 */
export const getTagsFromGenres = (
  genreIds: number[] | undefined,
  genres: GenresObject | undefined,
  genresDetailed?: { name?: string }[]
): string[] | null => {
  if (genresDetailed) {
    return genresDetailed.flatMap((genre) => genre.name ?? []);
  }

  if (genreIds && genres) {
    return genreIds.map((genreId) => genres[genreId]);
  }

  return null;
};