import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { apiLanguage } from "../parameters/apiLanguage";
import { MovieCreditsResponse } from "../../apiResponseTypes/movies/movieCredits";

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
