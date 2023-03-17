import axios from "axios";
import { apiLink } from "./apiLink";
import { apiKey } from "./apiKey";
import { apiLanguage } from "./apiLanguage";
import { PersonDetailsResponse } from "./apiResponseTypes/personDetails";
import { PopularPeopleResponse } from "./apiResponseTypes/popularPeople";
import { MovieCreditsResponse } from "./apiResponseTypes/movieCredits";
import { MovieDetailsResponse } from "./apiResponseTypes/movieDetails";
import { PopularMoviesResponse } from "./apiResponseTypes/popularMovies";
import { GenresResponse } from "./apiResponseTypes/genres";
import { PersonCreditsResponse } from "./apiResponseTypes/personCredits";

const makeApiCall = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);

  return await response.data;
};

export const getPersonDetails = async (
  id: string
): Promise<PersonDetailsResponse> => {
  return makeApiCall(`${apiLink}/person/${id}${apiKey}${apiLanguage}`);
};

export const getPersonCredits = async (
  id: string
): Promise<PersonCreditsResponse> => {
  return makeApiCall(
    `${apiLink}/person/${id}/movie_credits${apiKey}${apiLanguage}`
  );
};

export const getMovies = async (
  page: string
): Promise<PopularMoviesResponse> => {
  return makeApiCall(
    `${apiLink}/movie/popular${apiKey}&page=${page}${apiLanguage}`
  );
};

export const getGenres = async (): Promise<GenresResponse> => {
  return makeApiCall(`${apiLink}/genre/movie/list${apiKey}`);
};

export const getMoviesByQuery = async (
  query: string,
  page: string
): Promise<MovieDetailsResponse | undefined> => {
  if (!query) {
    return;
  }
  return makeApiCall(
    `${apiLink}/search/movie${apiKey}${apiLanguage}&query=${query}&page=${page}`
  );
};

export const getMovieDetails = async (
  id: string
): Promise<MovieDetailsResponse> => {
  return makeApiCall(`${apiLink}/movie/${id}${apiKey}${apiLanguage}`);
};

export const getCredits = async (id: string): Promise<MovieCreditsResponse> => {
  return makeApiCall(`${apiLink}/movie/${id}/credits${apiKey}${apiLanguage}`);
};

export const getPeople = async (
  page: string
): Promise<PopularPeopleResponse> => {
  return makeApiCall(
    `${apiLink}/person/popular${apiKey}&page=${page}${apiLanguage}`
  );
};

export const getPeopleByQuery = async (
  query: string,
  page: string
): Promise<PersonDetailsResponse | undefined> => {
  //Only media_type: "movie"; is allowed for search (17.03.2023)
  if (!query) {
    return;
  }
  return makeApiCall(
    `${apiLink}/search/person${apiKey}${apiLanguage}&query=${query}&page=${page}`
  );
};
