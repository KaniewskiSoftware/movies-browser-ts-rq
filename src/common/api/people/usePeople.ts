import { PeopleResponse } from "../../apiResponseTypes/people/popularPeople";
import { apiConfig } from "../parameters/config";
import useFetchData, { ParamValueType } from "../useFetchData";

/**
 * `usePeople` is a custom React hook that fetches either popular people or
 * people search results from the external API and returns the query result.
 *
 * @param {string | null} query - The search query string or null to fetch popular people.
 * @param {number} page - The page number for the results.
 * @returns {UseQueryResult<PeopleResponse, unknown>} - The React Query result object.
 */
export const usePeople = (query: string | null, page: number) => {
  const config = query ? apiConfig.searchPeople : apiConfig.people;
  const params: Record<string, ParamValueType> = { page };
  if (query) {
    params.query = query;
  }
  const cacheKey = query
    ? [config.cacheKey, query, page]
    : [config.cacheKey, page];

  return useFetchData<PeopleResponse>(
    config.endpoint as string,
    params,
    cacheKey
  );
};
