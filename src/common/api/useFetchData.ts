import { UseQueryResult } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";
import ApiError from "./errors/apiError";
import { useApiQuery } from "./hooks/useApiQuery";

export type ParamValueType = string | number;

const useFetchData = <T>(
  endpoint: string,
  params: Record<string, ParamValueType>,
  cacheKey: (string | number)[]
): UseQueryResult<T, ApiError> => {
  const fetchData = async (): Promise<T> => {
    const response = await axiosInstance.get(endpoint, {
      params,
    });
    return response.data;
  };

  return useApiQuery(cacheKey, fetchData, {
    enabled: !!endpoint,
  });
};

export default useFetchData;
