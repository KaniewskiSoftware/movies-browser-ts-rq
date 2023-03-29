import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

type ParamValueType = string | number | null | undefined;

const useFetchData = <T>(
  endpoint: string,
  params: Record<string, ParamValueType>,
  cacheKey: (string | number)[]
): UseQueryResult<T, unknown> => {
  const fetchData = async (): Promise<T> => {
    const response = await axiosInstance.get(endpoint, {
      params,
    });
    return response.data;
  };

  return useQuery(cacheKey, fetchData, {
    enabled: !!endpoint,
  });
};

export default useFetchData;
