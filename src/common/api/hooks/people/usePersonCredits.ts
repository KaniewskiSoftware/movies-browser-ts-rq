import { PersonCreditsResponse } from "../../types/people/personCredits";
import { apiConfig } from "../../config";
import useFetchData from "../../useFetchData";

/**
 * `usePersonCredits` is a custom React hook that fetches movie credits data
 * for a specific person from the external API and returns the query result.
 *
 * @param {string} id - The ID of the person for which the movie credits data is fetched.
 * @returns {UseQueryResult<PersonCreditsResponse, unknown>} - The React Query result object.
 */
export const usePersonCredits = (id: string) => {
  const config = apiConfig.personCredits;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const queryKey = [config.queryKey, id];

  return useFetchData<PersonCreditsResponse>(endpoint, {}, queryKey);
};
