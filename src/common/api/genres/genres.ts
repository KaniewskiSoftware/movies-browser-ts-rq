import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { GenresResponse } from "../../apiResponseTypes/genres/genres";

const fetchGenres = async (): Promise<GenresResponse> => {
  const response = await axios.get(`${apiLink}/genre/movie/list${apiKey}`);
  return response.data;
};

export const useGenres = () => {
  return useQuery(["genres"], fetchGenres);
};
