import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoviesResponse } from "../../apiResponseTypes/movies/movies";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchMoviesByQuery = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await axios.get(
    `${apiLink}/search/movie${apiKey}${apiLanguage}&query=${query}&page=${page}`
  );
  return response.data;
};

const fetchPopularMovies = async (page: number): Promise<MoviesResponse> => {
  const response = await axios.get(
    `${apiLink}/movie/popular${apiKey}&page=${page}${apiLanguage}`
  );
  return response.data;
};

const fetchMovies = async (query: string | null, page: number) => {
  return query ? fetchMoviesByQuery(query, page) : fetchPopularMovies(page);
};

export const useMovies = (query: string | null, page: number) => {
  return useQuery(["movies", query, page], () => fetchMovies(query, page), {
    enabled: !!page,
    keepPreviousData: true,
  });
};
