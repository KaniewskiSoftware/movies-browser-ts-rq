import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { apiLanguage } from "../parameters/apiLanguage";
import { MovieDetailsResponse } from "../../apiResponseTypes/movies/movieDetails";

const fetchMoviesByQuery = async (
  query: string,
  page: string
): Promise<MovieDetailsResponse | undefined> => {
  if (!query) {
    return;
  }
  const response = await axios.get(
    `${apiLink}/search/movie${apiKey}${apiLanguage}&query=${query}&page=${page}`
  );
  return response.data;
};

export const useMoviesByQuery = (query: string, page: string) => {
  return useQuery(
    ["moviesByQuery", query, page],
    () => fetchMoviesByQuery(query, page),
    {
      enabled: !!query,
    }
  );
};
