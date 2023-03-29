import { MoviesResponse } from "../../apiResponseTypes/movies/movies";
import useFetchData from "../useFetchData";

export const useMovies = (query: string | null, page: number) => {
  const endpoint = query ? "/search/movie" : "/movie/popular";
  const params = query ? { query, page } : { page };
  const cacheKey = query ? ["movies", query, page] : ["movies", page];

  return useFetchData<MoviesResponse>(endpoint, params, cacheKey);
};
