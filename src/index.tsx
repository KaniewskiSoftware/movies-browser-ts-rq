import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";

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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <App />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
