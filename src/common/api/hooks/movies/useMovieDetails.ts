import { MovieDetailsResponse } from "../../types/movies/movieDetails";
import { apiConfig } from "../../config";
import useFetchData from "../useFetchData";

export const useMovieDetails = (id: string) => {
  const config = apiConfig.movieDetails;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const queryKey = [config.queryKey, id];

  return useFetchData<MovieDetailsResponse>(endpoint, {}, queryKey);
};
