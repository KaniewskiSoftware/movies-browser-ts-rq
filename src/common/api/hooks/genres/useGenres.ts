import { GenresResponse } from "../../types/genres/genres";
import { convertGenresArrayToObject } from "../../../utils/convertGenresArrayToObject";
import { apiConfig } from "../../config";
import useFetchData from "../useFetchData";

export const useGenres = () => {
  const config = apiConfig.genres;
  const query = useFetchData<GenresResponse>(config.endpoint as string, {}, [
    config.queryKey,
  ]);

  const genresObject = query.data?.genres
    ? convertGenresArrayToObject(query.data.genres)
    : {};

  return { ...query, data: { ...query.data, genres: genresObject }};
};
