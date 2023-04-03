import { MovieCreditsResponse } from "../../types/movies/movieCredits";
import { apiConfig } from "../../config";
import useFetchData from "../useFetchData";

export const useMovieCredits = (id: string) => {
  const config = apiConfig.movieCredits;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const queryKey = [config.queryKey, id];

  return useFetchData<MovieCreditsResponse>(endpoint, {}, queryKey);
};
