import { useQuery } from "@tanstack/react-query";
import { MovieDetailsResponse } from "../../apiResponseTypes/movies/movieDetails";
import { axiosInstance } from "../axiosInstance";

/**
 * Fetches movie details for a specific movie from the external API.
 *
 * @param id - The ID of the movie for which the details are to be fetched.
 * @returns A promise that resolves with a MovieDetailsResponse object.
 */
const fetchMovieDetails = async (id: string): Promise<MovieDetailsResponse> => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};

/**
 * A custom React Hook that fetches and returns movie details for a specific movie from the external API.
 *
 * The hook uses the useQuery hook from @tanstack/react-query to handle fetching and caching.
 *
 * @param id - The ID of the movie for which the details are to be fetched.
 * @returns An object containing query information and data, including the movie details.
 */
export const useMovieDetails = (id: string) => {
  return useQuery(["movieDetails", id], () => fetchMovieDetails(id), {
    enabled: !!id,
  });
};
