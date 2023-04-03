import { QueryClient } from "@tanstack/react-query";

const minuteInMiliSeconds = 1000 * 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: minuteInMiliSeconds * 10,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
