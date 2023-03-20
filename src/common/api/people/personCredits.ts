import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PersonCreditsResponse } from "../../apiResponseTypes/people/personCredits";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

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
