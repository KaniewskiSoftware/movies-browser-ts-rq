import { MoviesResponse } from "../../types/movies/movies";
import useFetchData, { ParamValueType } from "../../useFetchData";
import { apiConfig } from "../../config";

/**
 * `useMovies` is a custom React hook that fetches either popular movies or
 * movie search results from the external API and returns the query result.
 *
 * @param {string | null} query - The search query string or null to fetch popular movies.
 * @param {number} page - The page number for the results.
 * @returns {UseQueryResult<MoviesResponse, unknown>} - The React Query result object.
 */
export const useMovies = (query: string | null, page: number) => {
  const config = query ? apiConfig.searchMovies : apiConfig.movies;
  const params: Record<string, ParamValueType> = { page };
  if (query) {
    params.query = query;
  }
  const cacheKey = query
    ? [config.cacheKey, query, page]
    : [config.cacheKey, page];

  return useFetchData<MoviesResponse>(
    config.endpoint as string,
    params,
    cacheKey
  );
};
