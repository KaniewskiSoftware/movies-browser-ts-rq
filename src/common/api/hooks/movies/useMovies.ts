import { MoviesResponse } from "../../types/movies/movies";
import useFetchData, { ParamValueType } from "../useFetchData";
import { apiConfig } from "../../config";

export const useMovies = (query: string | null, page: number) => {
  const config = query ? apiConfig.searchMovies : apiConfig.movies;
  const params: Record<string, ParamValueType> = { page };
  if (query) {
    params.query = query;
  }
  const queryKey = query
    ? [config.queryKey, query, page]
    : [config.queryKey, page];

  return useFetchData<MoviesResponse>(
    config.endpoint as string,
    params,
    queryKey
  );
};
