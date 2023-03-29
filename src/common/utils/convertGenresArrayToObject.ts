import { Genre } from "../api/types/genres/genres";

export interface GenresObject {
  [id: number]: string;
}

/**
 * Converts an array of Genre objects into a single object with genre IDs as keys and genre names as values.
 *
 * @param genres - An array of Genre objects.
 * @returns A GenresObject with genre IDs as keys and genre names as values.
 */
export const convertGenresArrayToObject = (genres: Genre[]): GenresObject =>
  genres.reduce<GenresObject>((accumulator, { id, name }) => {
    if (id !== undefined && name !== undefined) {
      return {
        ...accumulator,
        [id]: name,
      };
    }

    return accumulator;
  }, {});
