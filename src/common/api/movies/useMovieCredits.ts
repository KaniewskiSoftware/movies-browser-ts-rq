import { MovieCreditsResponse } from "../../apiResponseTypes/movies/movieCredits";
import useFetchData from "../useFetchData";

export const useMovieCredits = (id: string) => {
  const endpoint = `/movie/${id}/credits`;
  const cacheKey = ["movieCredits", id];

  return useFetchData<MovieCreditsResponse>(endpoint, {}, cacheKey);
};
