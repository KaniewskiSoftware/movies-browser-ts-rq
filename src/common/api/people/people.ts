import { useQuery } from "@tanstack/react-query";
import { PeopleResponse } from "../../apiResponseTypes/people/popularPeople";
import { axiosInstance } from "../axiosInstance";

/**
 * Fetches people matching the provided search query from the external API.
 *
 * @param query - The search query string.
 * @param page - The page number for pagination.
 * @returns A promise that resolves with a PeopleResponse object.
 */
const fetchPeopleByQuery = async (
  query: string,
  page: number
): Promise<PeopleResponse> => {
  const response = await axiosInstance.get("/search/person", {
    params: { query, page },
  });
  return response.data;
};

/**
 * Fetches popular people from the external API.
 *
 * @param page - The page number for pagination.
 * @returns A promise that resolves with a PeopleResponse object.
 */
const fetchPopularPeople = async (page: number): Promise<PeopleResponse> => {
  const response = await axiosInstance.get("/person/popular", {
    params: { page },
  });
  return response.data;
};

/**
 * Fetches either popular people or people matching the search query, depending on whether
 * a query is provided.
 *
 * @param query - The search query string or null for popular people.
 * @param page - The page number for pagination.
 * @returns A promise that resolves with a PeopleResponse object.
 */
const fetchPeople = async (query: string | null, page: number) => {
  return query ? fetchPeopleByQuery(query, page) : fetchPopularPeople(page);
};

/**
 * A custom React Hook that fetches either popular people or people matching a search query,
 * depending on whether a query is provided. The hook utilizes the `useQuery` hook from
 * @tanstack/react-query to manage the data fetching and caching.
 *
 * @param query - The search query string or null for popular people.
 * @param page - The page number for pagination.
 * @returns An object containing query-related data, such as isLoading, isError, and data.
 */
export const usePeople = (query: string | null, page: number) => {
  return useQuery(["people", query, page], () => fetchPeople(query, page), {
    enabled: !!page,
    keepPreviousData: true,
  });
};
