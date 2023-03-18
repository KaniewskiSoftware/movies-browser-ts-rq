import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { apiLanguage } from "../parameters/apiLanguage";
import { MovieDetailsResponse } from "../../apiResponseTypes/movies/movieDetails";

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
