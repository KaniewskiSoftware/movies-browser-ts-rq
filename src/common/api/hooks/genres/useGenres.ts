import { GenresResponse } from "../../types/genres/genres";
import { convertGenresArrayToObject } from "../../../utils/convertGenresArrayToObject";
import { apiConfig } from "../../config";
import useFetchData from "../../useFetchData";

/**
 * `useGenres` is a custom React hook that fetches the list of movie genres
 * from the external API and returns an object containing the query data
 * and a transformed genres object.
 *
 * The `useGenres` hook internally uses the `useFetchData` custom hook to
 * fetch the genre data from the API, and the `convertGenresArrayToObject`
 * utility function to transform the array of genres into an object with
 * genre IDs as keys and genre names as values.
 *
 * @returns {UseQueryResult<MovieCreditsResponse, unknown>} - The React Query result object.
 */
export const useGenres = () => {
  const config = apiConfig.genres;
  const query = useFetchData<GenresResponse>(config.endpoint as string, {}, [
    config.cacheKey,
  ]);

  const genresObject = query.data?.genres
    ? convertGenresArrayToObject(query.data.genres)
    : {};

  return { ...query, data: { ...query.data, genres: genresObject } };
};
