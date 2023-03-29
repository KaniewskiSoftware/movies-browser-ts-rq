import { PersonDetailsResponse } from "../../apiResponseTypes/people/personDetails";
import useFetchData from "../useFetchData";

/**
 * A custom React Hook that fetches the details of a person based on their ID.
 * The hook utilizes the `useFetchData` hook to manage the data fetching and caching.
 *
 * @param id - The ID of the person whose details need to be fetched.
 * @returns An object containing query-related data, such as isLoading, isError, and data.
 */
export const usePersonDetails = (id: string) => {
  const endpoint = `/person/${id}`;
  const params = {}; // No additional params required for this request
  const cacheKey = ["personDetails", id];

  return useFetchData<PersonDetailsResponse>(endpoint, params, cacheKey);
};
