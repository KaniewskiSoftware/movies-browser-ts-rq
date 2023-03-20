import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MovieCreditsResponse } from "../../apiResponseTypes/movies/movieCredits";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchMovieCredits = async (id: string): Promise<MovieCreditsResponse> => {
  const response = await axios.get(
    `${apiLink}/movie/${id}/credits${apiKey}${apiLanguage}`
  );
  return response.data;
};

export const useMovieCredits = (id: string) => {
  return useQuery(["movieCredits", id], () => fetchMovieCredits(id), {
    enabled: !!id,
  });
};
