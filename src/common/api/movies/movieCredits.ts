import { useQuery } from "@tanstack/react-query";
import { MovieCreditsResponse } from "../../apiResponseTypes/movies/movieCredits";
import { axiosInstance } from "../axiosInstance";

/**
 * Fetches movie credits for a specific movie from the external API.
 *
 * @param id - The ID of the movie for which the credits are to be fetched.
 * @returns A promise that resolves with a MovieCreditsResponse object.
 */
const fetchMovieCredits = async (id: string): Promise<MovieCreditsResponse> => {
  const response = await axiosInstance.get(`/movie/${id}/credits`);
  return response.data;
};

/**
 * A custom React Hook that fetches and returns movie credits for a specific movie from the external API.
 *
 * The hook uses the useQuery hook from @tanstack/react-query to handle fetching and caching.
 *
 * @param id - The ID of the movie for which the credits are to be fetched.
 * @returns An object containing query information and data, including the movie credits.
 */
export const useMovieCredits = (id: string) => {
  return useQuery(["movieCredits", id], () => fetchMovieCredits(id), {
    enabled: !!id,
  });
};
