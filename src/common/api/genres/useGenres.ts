import { GenresResponse } from "../../apiResponseTypes/genres/genres";
import { convertGenresArrayToObject } from "../../utils/convertGenresArrayToObject";
import useFetchData from "../useFetchData";

/**
 * A custom React Hook that fetches and returns movie genres from the external API.
 *
 * The hook also converts the received genres array into an object for easier access.
 * It utilizes the useFetchData hook to handle fetching and caching.
 *
 * @returns An object containing query information and data, including the transformed genres object.
 */
export const useGenres = () => {
  const query = useFetchData<GenresResponse>("/genre/movie/list", {}, [
    "genres",
  ]);

  const genresObject = query.data?.genres
    ? convertGenresArrayToObject(query.data.genres)
    : {};

  return { ...query, data: { ...query.data, genres: genresObject } };
};
