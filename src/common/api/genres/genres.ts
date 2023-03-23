import { useQuery } from "@tanstack/react-query";
import { Genre, GenresResponse } from "../../apiResponseTypes/genres/genres";
import { axiosInstance } from "../axiosInstance";

export type GenresObject = {
  [id: number]: string;
};

const fetchGenres = async (): Promise<GenresResponse> => {
  const response = await axiosInstance.get("/genre/movie/list");
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
  const query = useQuery(["genres"], fetchGenres, { refetchOnMount: false });

  const genresObject = query.data?.genres
    ? convertGenresArrayToObject(query.data.genres)
    : {};

  return { ...query, data: { ...query.data, genres: genresObject } };
};
