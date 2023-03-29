import { PersonDetailsResponse } from "../../apiResponseTypes/people/personDetails";
import { apiConfig } from "../parameters/config";
import useFetchData from "../useFetchData";

/**
 * `usePersonDetails` is a custom React hook that fetches personal details data
 * for a specific person from the external API and returns the query result.
 *
 * @param {string} id - The ID of the person for which the personal details data is fetched.
 * @returns {UseQueryResult<PersonDetailsResponse, unknown>} - The React Query result object.
 */
export const usePersonDetails = (id: string) => {
  const config = apiConfig.personDetails;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const cacheKey = [config.cacheKey, id];

  return useFetchData<PersonDetailsResponse>(endpoint, {}, cacheKey);
};
