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

/**
 * The default error handler function for handling ApiError instances.
 * It logs the user-friendly error message to the console when an ApiError is encountered.
 *
 * @param {ApiError} error - The ApiError instance to handle.
 */
const defaultErrorHandler = (error: ApiError) => {
  if (error instanceof ApiError) {
    console.error(error.errorMessage);
  }
};

/**
 * useApiQuery is a custom React hook that wraps the useQuery hook from React Query.
 * It provides a consistent way of handling API errors and retrying failed requests.
 *
 * @template T - The expected shape of the fetched data.
 * @param {(string | number)[]} queryKey - An array representing the query key used by React Query.
 * @param {QueryFunction<T>} queryFn - The query function responsible for fetching the data.
 * @param {UseApiQueryOptions<T>} options - Optional configuration for the useQuery hook.
 * @returns {UseQueryResult<T, ApiError>} - A UseQueryResult object containing the fetched data or an error if the request failed.
 */
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
    retry: (failureCount, error) => {
      // If the error is an ApiError with specific status codes, do not retry
      if (
        error instanceof ApiError &&
        (error.statusCode === 7 || error.statusCode === 34 || error.statusCode === 422)
      ) {
        return false;
      }
      // Retry up to 3 times for other errors
      return failureCount < 3;
    },
  });
};
