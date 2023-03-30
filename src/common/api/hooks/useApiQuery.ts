import {
  QueryFunction,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import ApiError from "../errors/apiError";

type UseApiQueryOptions<T> = UseQueryOptions<
  T,
  ApiError,
  T,
  (string | number)[]
>;

const defaultErrorHandler = (error: ApiError) => {
  if (error instanceof ApiError) {
    console.error(error.errorMessage);
  }
};

export const useApiQuery = <T>(
  queryKey: (string | number)[],
  queryFn: QueryFunction<T>,
  options?: UseApiQueryOptions<T>
): UseQueryResult<T, ApiError> => {
  return useQuery(queryKey, queryFn, {
    ...options,
    onError: (error) => {
      options?.onError?.(error);
      defaultErrorHandler(error);
    },
  });
};
