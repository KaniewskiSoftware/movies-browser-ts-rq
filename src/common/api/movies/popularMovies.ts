import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { apiLanguage } from "../parameters/apiLanguage";
import { PopularMoviesResponse } from "../../apiResponseTypes/movies/popularMovies";

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
  });
};
