import { QueryClient } from "@tanstack/react-query";

// Set the duration of one minute in milliseconds
const minuteInMiliSeconds = 1000 * 60;

/**
 * This is the QueryClient object that is used to manage the caching and fetching of data using React Query.
 *
 * @property defaultOptions - The default options for all queries made with this QueryClient instance.
 * @property defaultOptions.queries - The default options for query-related operations.
 * @property defaultOptions.queries.staleTime - The time in milliseconds that data should be considered fresh by default. Defaults to 0 (never stale).
 * @property defaultOptions.queries.cacheTime - The time in milliseconds that data should be kept in the cache by default. Defaults to 5 minutes.
 * @property defaultOptions.queries.refetchOnWindowFocus - Whether queries should automatically refetch when the window regains focus. Defaults to true.
 * @property defaultOptions.queries.refetchOnMount - Whether queries should automatically refetch when the component mounts. Defaults to false.
 * @property defaultOptions.queries.refetchInterval - The time in milliseconds that queries should automatically refetch at. Defaults to disabled.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: minuteInMiliSeconds * 10,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
