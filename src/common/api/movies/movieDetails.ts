import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MovieDetailsResponse } from "../../apiResponseTypes/movies/movieDetails";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchMovieDetails = async (id: string): Promise<MovieDetailsResponse> => {
  const response = await axios.get(
    `${apiLink}/movie/${id}${apiKey}${apiLanguage}`
  );
  return response.data;
};

export const useMovieDetails = (id: string) => {
  return useQuery(["movieDetails", id], () => fetchMovieDetails(id), {
    enabled: !!id,
  });
};
