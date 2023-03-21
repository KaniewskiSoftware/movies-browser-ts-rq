import { useQuery } from "@tanstack/react-query";
import { MovieDetailsResponse } from "../../apiResponseTypes/movies/movieDetails";
import { axiosInstance } from "../axiosInstance";

const fetchMovieDetails = async (id: string): Promise<MovieDetailsResponse> => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};

export const useMovieDetails = (id: string) => {
  return useQuery(["movieDetails", id], () => fetchMovieDetails(id), {
    enabled: !!id,
  });
};
