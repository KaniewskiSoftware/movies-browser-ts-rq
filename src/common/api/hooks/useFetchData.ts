import { UseQueryResult } from "@tanstack/react-query";
import { axiosInstance } from "../utilities/axiosInstance";
import ApiError from "../errors/apiError";
import { useApiQuery } from "./useApiQuery";

export type ParamValueType = string | number;

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
