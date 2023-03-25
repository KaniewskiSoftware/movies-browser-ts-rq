import { useQuery } from "@tanstack/react-query";
import { PersonCreditsResponse } from "../../apiResponseTypes/people/personCredits";
import { axiosInstance } from "../axiosInstance";

/**
 * Fetches movie credits for a specific person from the external API.
 *
 * @param id - The ID of the person for which the movie credits are to be fetched.
 * @returns A promise that resolves with a PersonCreditsResponse object.
 */
const fetchPersonCredits = async (
  id: string
): Promise<PersonCreditsResponse> => {
  const response = await axiosInstance.get(`/person/${id}/movie_credits`);
  return response.data;
};

/**
 * A custom React Hook that fetches the movie credits for a person based on their ID.
 * The hook utilizes the `useQuery` hook from @tanstack/react-query to manage the data fetching and caching.
 *
 * @param id - The ID of the person whose movie credits need to be fetched.
 * @returns An object containing query-related data, such as isLoading, isError, and data.
 */
export const usePersonCredits = (id: string) => {
  return useQuery(["personCredits", id], () => fetchPersonCredits(id), {
    enabled: !!id,
  });
};
