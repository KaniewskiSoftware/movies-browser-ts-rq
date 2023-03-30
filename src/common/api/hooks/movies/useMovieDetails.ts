import { MovieDetailsResponse } from "../../types/movies/movieDetails";
import { apiConfig } from "../../config";
import useFetchData from "../useFetchData";

/**
 * `useMovieDetails` is a custom React hook that fetches movie details data
 * for a specific movie from the external API and returns the query result.
 *
 * @param {string} id - The ID of the movie for which the details data is fetched.
 * @returns {UseQueryResult<MovieDetailsResponse, unknown>} - The React Query result object.
 */
export const useMovieDetails = (id: string) => {
  const config = apiConfig.movieDetails;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const queryKey = [config.queryKey, id];

  return useFetchData<MovieDetailsResponse>(endpoint, {}, queryKey);
};
