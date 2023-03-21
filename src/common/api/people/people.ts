import { useQuery } from "@tanstack/react-query";
import { PeopleResponse } from "../../apiResponseTypes/people/popularPeople";
import { axiosInstance } from "../axiosInstance";

const fetchPeopleByQuery = async (
  query: string,
  page: number
): Promise<PeopleResponse> => {
  const response = await axiosInstance.get("/search/person", {
    params: { query, page },
  });
  return response.data;
};

const fetchPopularPeople = async (page: number): Promise<PeopleResponse> => {
  const response = await axiosInstance.get("/person/popular", { params: page });
  return response.data;
};

const fetchPeople = async (query: string | null, page: number) => {
  return query ? fetchPeopleByQuery(query, page) : fetchPopularPeople(page);
};

export const usePeople = (query: string | null, page: number) => {
  return useQuery(["people", query, page], () => fetchPeople(query, page), {
    enabled: !!page,
    keepPreviousData: true,
  });
};
