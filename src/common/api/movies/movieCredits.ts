import { useQuery } from "@tanstack/react-query";
import { MovieCreditsResponse } from "../../apiResponseTypes/movies/movieCredits";
import { axiosInstance } from "../axiosInstance";

const fetchMovieCredits = async (id: string): Promise<MovieCreditsResponse> => {
  const response = await axiosInstance.get(`/movie/${id}/credits`);
  return response.data;
};

export const useMovieCredits = (id: string) => {
  return useQuery(["movieCredits", id], () => fetchMovieCredits(id), {
    enabled: !!id,
  });
};
