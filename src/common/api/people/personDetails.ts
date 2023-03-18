import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiLink } from "../parameters/apiLink";
import { apiKey } from "../parameters/apiKey";
import { apiLanguage } from "../parameters/apiLanguage";
import { PersonDetailsResponse } from "../../apiResponseTypes/people/personDetails";

const fetchPersonDetails = async (
  id: string
): Promise<PersonDetailsResponse> => {
  const response = await axios.get(
    `${apiLink}/person/${id}${apiKey}${apiLanguage}`
  );
  return response.data;
};

export const usePersonDetails = (id: string) => {
  return useQuery(["personDetails", id], () => fetchPersonDetails(id), {
    enabled: !!id, // Fetch data only if the `id` is truthy.
  });
};
