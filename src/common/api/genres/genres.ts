import { useQuery } from "@tanstack/react-query";
import { Genre, GenresResponse } from "../../apiResponseTypes/genres/genres";
import { axiosInstance } from "../axiosInstance";

export type GenresObject = {
  [id: number]: string;
};

/**
 * Fetches movie genres from the external API.
 *
 * @returns A promise that resolves with a GenresResponse object.
 */
const fetchGenres = async (): Promise<GenresResponse> => {
  const response = await axiosInstance.get("/genre/movie/list");
  return response.data;
};

/**
 * Converts an array of Genre objects into a single object with genre IDs as keys and genre names as values.
 *
 * @param genres - An array of Genre objects.
 * @returns A GenresObject with genre IDs as keys and genre names as values.
 */
const convertGenresArrayToObject = (genres: Genre[]): GenresObject =>
  genres.reduce<GenresObject>((accumulator, { id, name }) => {
    if (id !== undefined && name !== undefined) {
      return {
        ...accumulator,
        [id]: name,
      };
    }

    return accumulator;
  }, {});

/**
 * A custom React Hook that fetches and returns movie genres from the external API.
 *
 * The hook also converts the received genres array into an object for easier access.
 * It utilizes the useQuery hook from @tanstack/react-query to handle fetching and caching.
 *
 * @returns An object containing query information and data, including the transformed genres object.
 */
export const useGenres = () => {
  const query = useQuery(["genres"], fetchGenres, { refetchOnMount: false });

  const genresObject = query.data?.genres
    ? convertGenresArrayToObject(query.data.genres)
    : {};

  return { ...query, data: { ...query.data, genres: genresObject } };
};
