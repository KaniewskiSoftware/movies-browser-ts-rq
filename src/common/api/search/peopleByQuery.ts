import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PersonDetailsResponse } from "../../apiResponseTypes/people/personDetails";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchPeopleByQuery = async (
  query: string,
  page: string
): Promise<PersonDetailsResponse | undefined> => {
  if (!query) {
    return;
  }
  const response = await axios.get(
    `${apiLink}/search/person${apiKey}${apiLanguage}&query=${query}&page=${page}`
  );
  return response.data;
};

export const usePeopleByQuery = (query: string, page: string) => {
  return useQuery(
    ["peopleByQuery", query, page],
    () => fetchPeopleByQuery(query, page),
    {
      enabled: !!query,
    }
  );
};
