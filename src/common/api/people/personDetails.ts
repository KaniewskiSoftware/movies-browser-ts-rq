import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PersonDetailsResponse } from "../../apiResponseTypes/people/personDetails";
import { apiKey, apiLanguage, apiLink } from "../parameters/config";

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
