import { useQuery } from "@tanstack/react-query";
import { PersonDetailsResponse } from "../../apiResponseTypes/people/personDetails";
import { axiosInstance } from "../axiosInstance";

/**
 * Fetches personal details for a specific person from the external API.
 *
 * @param id - The ID of the person for which the personal details are to be fetched.
 * @returns A promise that resolves with a PersonDetailsResponse object.
 */
const fetchPersonDetails = async (
  id: string
): Promise<PersonDetailsResponse> => {
  const response = await axiosInstance.get(`/person/${id}`);
  return response.data;
};

/**
 * A custom React Hook that fetches the details of a person based on their ID.
 * The hook utilizes the `useQuery` hook from @tanstack/react-query to manage the data fetching and caching.
 *
 * @param id - The ID of the person whose details need to be fetched.
 * @returns An object containing query-related data, such as isLoading, isError, and data.
 */
export const usePersonDetails = (id: string) => {
  return useQuery(["personDetails", id], () => fetchPersonDetails(id), {
    enabled: !!id, // Fetch data only if the `id` is truthy.
  });
};
