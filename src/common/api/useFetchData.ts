import { UseQueryResult } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";
import ApiError from "./errors/apiError";
import { useApiQuery } from "./hooks/useApiQuery";

export type ParamValueType = string | number;

/**
 * useFetchData is a custom React hook that utilizes useApiQuery to fetch data from the provided endpoint
 * with the specified parameters. It also handles caching using the provided queryKey.
 *
 * @template T - The expected shape of the fetched data.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {Record<string, ParamValueType>} params - An object containing the parameters to be sent with the request.
 * @param {(string | number)[]} queryKey - An array representing the query key to be used in query from tanstack/react-query.
 * @returns {UseQueryResult<T, ApiError>} - A UseQueryResult object containing the fetched data or an error if the request failed.
 */
const useFetchData = <T>(
  endpoint: string,
  params: Record<string, ParamValueType>,
  queryKey: (string | number)[]
): UseQueryResult<T, ApiError> => {
  const fetchData = async (): Promise<T> => {
    const response = await axiosInstance.get(endpoint, {
      params,
    });
    return response.data;
  };

  return useApiQuery(queryKey, fetchData, {
    enabled: !!endpoint,
  });
};

export default useFetchData;
