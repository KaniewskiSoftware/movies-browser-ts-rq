import { PersonCreditsResponse } from "../../apiResponseTypes/people/personCredits";
import useFetchData from "../useFetchData";

/**
 * A custom React Hook that fetches the movie credits for a person based on their ID.
 * The hook utilizes the `useFetchData` hook to manage the data fetching and caching.
 *
 * @param id - The ID of the person whose movie credits need to be fetched.
 * @returns An object containing query-related data, such as isLoading, isError, and data.
 */
export const usePersonCredits = (id: string) => {
  const endpoint = `/person/${id}/movie_credits`;
  const params = {}; // No additional params required for this request
  const cacheKey = ["personCredits", id];

  return useFetchData<PersonCreditsResponse>(endpoint, params, cacheKey);
};
