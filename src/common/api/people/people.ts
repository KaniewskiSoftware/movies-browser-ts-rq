import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PeopleResponse } from "../../apiResponseTypes/people/popularPeople";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchPeopleByQuery = async (
  query: string,
  page: number
): Promise<PeopleResponse> => {
  const response = await axios.get(
    `${apiLink}/search/person${apiKey}${apiLanguage}&query=${query}&page=${page}`
  );
  return response.data;
};

const fetchPopularPeople = async (page: number): Promise<PeopleResponse> => {
  const response = await axios.get(
    `${apiLink}/person/popular${apiKey}&page=${page}${apiLanguage}`
  );
  return response.data;
};

const fetchPeople = async (query: string | null, page: number) => {
  return query ? fetchPeopleByQuery(query, page) : fetchPopularPeople(page);
};

export const usePeople = (query: string | null, page: number) => {
  return useQuery(["people", query, page], () => fetchPeople(query, page), {
    enabled: !!page,
    keepPreviousData: true,
  });
};