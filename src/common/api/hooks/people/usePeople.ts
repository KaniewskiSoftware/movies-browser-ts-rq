import { PeopleResponse } from "../../types/people/popularPeople";
import { apiConfig } from "../../config";
import useFetchData, { ParamValueType } from "../useFetchData";

export const usePeople = (query: string | null, page: number) => {
  const config = query ? apiConfig.searchPeople : apiConfig.people;
  const params: Record<string, ParamValueType> = { page };
  if (query) {
    params.query = query;
  }
  const queryKey = query
    ? [config.queryKey, query, page]
    : [config.queryKey, page];

  return useFetchData<PeopleResponse>(
    config.endpoint as string,
    params,
    queryKey
  );
};
