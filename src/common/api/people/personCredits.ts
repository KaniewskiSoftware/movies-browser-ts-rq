import { useQuery } from "@tanstack/react-query";
import { PersonCreditsResponse } from "../../apiResponseTypes/people/personCredits";
import { axiosInstance } from "../axiosInstance";

const fetchPersonCredits = async (
  id: string
): Promise<PersonCreditsResponse> => {
  const response = await axiosInstance.get(
    `/person/${id}/movie_credits`
  );
  return response.data;
};

export const usePersonCredits = (id: string) => {
  return useQuery(["personCredits", id], () => fetchPersonCredits(id), {
    enabled: !!id,
  });
};
