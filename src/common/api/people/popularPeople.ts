import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { apiLanguage } from "../parameters/apiLanguage";
import { PopularPeopleResponse } from "../../apiResponseTypes/people/popularPeople";

const fetchPopularPeople = async (
  page: string
): Promise<PopularPeopleResponse> => {
  const response = await axios.get(
    `${apiLink}/person/popular${apiKey}&page=${page}${apiLanguage}`
  );
  return response.data;
};

export const usePopularPeople = (page: string) => {
  return useQuery(["popularPeople", page], () => fetchPopularPeople(page), {
    enabled: !!page,
  });
};
