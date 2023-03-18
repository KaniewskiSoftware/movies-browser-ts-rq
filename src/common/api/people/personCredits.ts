import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { apiLanguage } from "../parameters/apiLanguage";
import { PersonCreditsResponse } from "../../apiResponseTypes/people/personCredits";

const fetchPersonCredits = async (
  id: string
): Promise<PersonCreditsResponse> => {
  const response = await axios.get(
    `${apiLink}/person/${id}/movie_credits${apiKey}${apiLanguage}`
  );
  return response.data;
};

export const usePersonCredits = (id: string) => {
  return useQuery(["personCredits", id], () => fetchPersonCredits(id), {
    enabled: !!id,
  });
};
