import { useQuery } from "@tanstack/react-query";
import { MoviesResponse } from "../../apiResponseTypes/movies/movies";
import { axiosInstance } from "../axiosInstance";

/**
 * Fetches movies matching the provided search query from the external API.
 *
 * @param query - The search query string.
 * @param page - The page number for pagination.
 * @returns A promise that resolves with a MoviesResponse object.
 */
const fetchMoviesByQuery = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await axiosInstance.get("/search/movie", {
    params: { query, page },
  });
  return response.data;
};

/**
 * Fetches popular movies from the external API.
 *
 * @param page - The page number for pagination.
 * @returns A promise that resolves with a MoviesResponse object.
 */
const fetchPopularMovies = async (page: number): Promise<MoviesResponse> => {
  const response = await axiosInstance.get("/movie/popular", {
    params: { page },
  });
  return response.data;
};

/**
 * Fetches either popular movies or movies matching the search query, depending on whether
 * a query is provided.
 *
 * @param query - The search query string or null for popular movies.
 * @param page - The page number for pagination.
 * @returns A promise that resolves with a MoviesResponse object.
 */
const fetchMovies = async (query: string | null, page: number) => {
  return query ? fetchMoviesByQuery(query, page) : fetchPopularMovies(page);
};

/**
 * A custom React Hook that fetches and returns movies based on the provided query and page number.
 *
 * The hook fetches either popular movies or movies matching the search query, depending on whether
 * a query is provided. It uses the useQuery hook from @tanstack/react-query to handle fetching and caching.
 *
 * @param query - The search query string or null for popular movies.
 * @param page - The page number for pagination.
 * @returns An object containing query information and data, including the movies list.
 */
export const useMovies = (query: string | null, page: number) => {
  return useQuery(["movies", query, page], () => fetchMovies(query, page), {
    enabled: !!page,
    keepPreviousData: true,
  });
};
