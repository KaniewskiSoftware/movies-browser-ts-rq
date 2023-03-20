import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PopularMoviesResponse } from "../../apiResponseTypes/movies/popularMovies";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchPopularMovies = async (
  page: number
): Promise<PopularMoviesResponse> => {
  const response = await axios.get(
    `${apiLink}/movie/popular${apiKey}&page=${page}${apiLanguage}`
  );
  return response.data;
};

export const usePopularMovies = (page: number) => {
  return useQuery(["popularMovies", page], () => fetchPopularMovies(page), {
    enabled: !!page,
    keepPreviousData: true,
  });
};
