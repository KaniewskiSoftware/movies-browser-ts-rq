import axios from "axios";
import { getErrorMessage } from "./errors/errorMessages";
import { apiKey, apiLanguage, apiLink } from "./config";
import ApiError from "./errors/apiError";

/**
 * Creates an Axios instance for making API requests to the external data source.
 *
 * The instance is pre-configured with a base URL, API key, and language parameters.
 * These configurations are imported from the `./parameters/config` module.
 */
const axiosInstance = axios.create({
  baseURL: apiLink,
  params: {
    api_key: apiKey,
    language: apiLanguage,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.request) {
      console.error("Low-level error:", error.message);
      const errorMessage =
        "A network error occurred. Please check your internet connection and try again.";
      throw new ApiError(error.message, errorMessage);
    } else {
      const errorMessage = getErrorMessage(error.response?.status);
      throw new ApiError(error.message, errorMessage);
    }
  }
);

export { axiosInstance };
