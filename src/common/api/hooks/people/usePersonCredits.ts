import { PersonCreditsResponse } from "../../types/people/personCredits";
import { apiConfig } from "../../config";
import useFetchData from "../useFetchData";

export const usePersonCredits = (id: string) => {
  const config = apiConfig.personCredits;
  const endpoint = (config.endpoint as (id: string) => string)(id);
  const queryKey = [config.queryKey, id];

  return useFetchData<PersonCreditsResponse>(endpoint, {}, queryKey);
};
