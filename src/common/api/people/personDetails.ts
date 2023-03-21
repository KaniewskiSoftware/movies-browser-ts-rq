import { useQuery } from "@tanstack/react-query";
import { PersonDetailsResponse } from "../../apiResponseTypes/people/personDetails";
import { axiosInstance } from "../axiosInstance";

const fetchPersonDetails = async (
  id: string
): Promise<PersonDetailsResponse> => {
  const response = await axiosInstance.get(
    `/person/${id}`
  );
  return response.data;
};

export const usePersonDetails = (id: string) => {
  return useQuery(["personDetails", id], () => fetchPersonDetails(id), {
    enabled: !!id, // Fetch data only if the `id` is truthy.
  });
};
