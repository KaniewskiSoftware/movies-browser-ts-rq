import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MovieDetailsResponse } from "../../apiResponseTypes/movies/movieDetails";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchMoviesByQuery = async (
  query: string,
  page: number
): Promise<MovieDetailsResponse | undefined> => {
  if (!query) {
    return;
  }
  const response = await axios.get(
    `${apiLink}/search/movie${apiKey}${apiLanguage}&query=${query}&page=${page}`
  );
  return response.data;
};

export const useMoviesByQuery = (query: string, page: number) => {
  return useQuery(
    ["moviesByQuery", query, page],
    () => fetchMoviesByQuery(query, page),
    {
      enabled: !!query,
    }
  );
};
