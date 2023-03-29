import { MoviesResponse } from "../../apiResponseTypes/movies/movies";
import useFetchData, { ParamValueType } from "../useFetchData";

export const useMovies = (query: string | null, page: number) => {
  const endpoint = query ? "/search/movie" : "/movie/popular";
  const params: Record<string, ParamValueType> = { page };
  if (query) {
    params.query = query;
  }
  const cacheKey = query ? ["movies", query, page] : ["movies", page];

  return useFetchData<MoviesResponse>(endpoint, params, cacheKey);
};
