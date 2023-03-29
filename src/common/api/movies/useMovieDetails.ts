import { MovieDetailsResponse } from "../../apiResponseTypes/movies/movieDetails";
import useFetchData from "../useFetchData";

export const useMovieDetails = (id: string) => {
  const endpoint = `/movie/${id}`;
  const cacheKey = ["movieDetails", id];

  return useFetchData<MovieDetailsResponse>(endpoint, {}, cacheKey);
};
