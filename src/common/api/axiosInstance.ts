import axios from "axios";
import { apiKey, apiLanguage, apiLink } from "./parameters/config";

export const axiosInstance = axios.create({
  baseURL: apiLink,
  params: {
    api_key: apiKey,
    language: apiLanguage,
  },
});