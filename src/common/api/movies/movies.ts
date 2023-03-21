import { useQuery } from "@tanstack/react-query";
import { MoviesResponse } from "../../apiResponseTypes/movies/movies";
import { axiosInstance } from "../axiosInstance";

const fetchMoviesByQuery = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await axiosInstance.get("/search/movie", {
    params: { query, page },
  });
  return response.data;
};

const fetchPopularMovies = async (page: number): Promise<MoviesResponse> => {
  const response = await axiosInstance.get("/movie/popular", {
    params: page,
  });
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
