import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { Genre, GenresResponse } from "../../apiResponseTypes/genres/genres";

export type GenresObject = {
  [id: number]: string;
};

const fetchGenres = async (): Promise<GenresResponse> => {
  const response = await axios.get(`${apiLink}/genre/movie/list${apiKey}`);
  return response.data;
};

const convertGenresArrayToObject = (genres: Genre[]): GenresObject =>
  genres.reduce<GenresObject>((accumulator, { id, name }) => {
    if (id !== undefined && name !== undefined) {
      return {
        ...accumulator,
        [id]: name,
      };
    }

    return accumulator;
  }, {});

export const useGenres = () => {
  const query = useQuery(["genres"], fetchGenres);

  const genresObject = query.data?.genres
    ? convertGenresArrayToObject(query.data.genres)
    : {};

  return { ...query, data: { ...query.data, genres: genresObject } };
};
