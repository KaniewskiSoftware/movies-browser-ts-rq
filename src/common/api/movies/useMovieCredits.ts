import { MovieCreditsResponse } from "../../apiResponseTypes/movies/movieCredits";
import { apiConfig } from "../parameters/config";
import useFetchData from "../useFetchData";

/**
 * `useMovieCredits` is a custom React hook that fetches movie credits data
 * for a specific movie from the external API and returns the query result.
 *
 * @param {string} id - The ID of the movie for which the credits data is fetched.
 * @returns {UseQueryResult<MovieCreditsResponse, unknown>} - The React Query result object.
 */
export const useMovieCredits = (id: string) => {
  const config = apiConfig.movieCredits;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const cacheKey = [config.cacheKey, id];

  return useFetchData<MovieCreditsResponse>(endpoint, {}, cacheKey);
};
