import { PersonDetailsResponse } from "../../types/people/personDetails";
import { apiConfig } from "../../config";
import useFetchData from "../useFetchData";

export const usePersonDetails = (id: string) => {
  const config = apiConfig.personDetails;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const queryKey = [config.queryKey, id];

  return useFetchData<PersonDetailsResponse>(endpoint, {}, queryKey);
};
