import { PeopleResponse } from "../../apiResponseTypes/people/popularPeople";
import useFetchData, { ParamValueType } from "../useFetchData";

/**
 * A custom React Hook that fetches either popular people or people matching a search query,
 * depending on whether a query is provided. The hook utilizes the `useFetchData` hook to
 * manage the data fetching and caching.
 *
 * @param query - The search query string or null for popular people.
 * @param page - The page number for pagination.
 * @returns An object containing query-related data, such as isLoading, isError, and data.
 */
export const usePeople = (query: string | null, page: number) => {
  const endpoint = query ? "/search/person" : "/person/popular";
  const params: Record<string, ParamValueType> = { page };
  if (query) {
    params.query = query;
  }
  const cacheKey = query ? ["people", query, page] : ["people", page];

  return useFetchData<PeopleResponse>(endpoint, params, cacheKey);
};
