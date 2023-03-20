import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PopularPeopleResponse } from "../../apiResponseTypes/people/popularPeople";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

const fetchPopularPeople = async (
  page: number
): Promise<PopularPeopleResponse> => {
  const response = await axios.get(
    `${apiLink}/person/popular${apiKey}&page=${page}${apiLanguage}`
  );
  return response.data;
};

export const usePopularPeople = (page: number) => {
  return useQuery(["popularPeople", page], () => fetchPopularPeople(page), {
    enabled: !!page,
  });
};
