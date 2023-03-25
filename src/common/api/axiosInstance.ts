import axios from "axios";
import { apiKey, apiLanguage, apiLink } from "./parameters/config";

/**
 * Creates an Axios instance for making API requests to the external data source.
 * 
 * The instance is pre-configured with a base URL, API key, and language parameters.
 * These configurations are imported from the `./parameters/config` module.
 */
export const axiosInstance = axios.create({
  baseURL: apiLink,
  params: {
    api_key: apiKey,
    language: apiLanguage,
  },
});
