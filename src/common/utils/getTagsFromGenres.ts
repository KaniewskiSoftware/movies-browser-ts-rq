import { GenresObject } from "./convertGenresArrayToObject";

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