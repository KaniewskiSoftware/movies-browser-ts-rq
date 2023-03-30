import axios from "axios";
import { getErrorMessage } from "../errors/errorMessages";
import { apiKey, apiLanguage, apiLink } from "../config";
import ApiError from "../errors/apiError";

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

/**
 * handleApiError is a utility function that takes an error object and a status code,
 * gets the associated user-friendly error message using the getErrorMessage function,
 * and throws an ApiError instance with the given details.
 *
 * @param {any} error - The original error object.
 * @param {number} statusCode - The HTTP status code or custom status code associated with the error.
 */
const handleApiError = (error: any, statusCode: number) => {
  const errorMessage = getErrorMessage(statusCode);
  throw new ApiError(error.message, errorMessage, statusCode);
};

/**
 * An interceptor is added to the Axios instance to handle response errors. This interceptor
 * checks for the presence of an error in the response, extracts the status code, and
 * calls the handleApiError utility function to process the error and throw an ApiError
 * instance with the user-friendly error message.
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const statusCode =
      error.response?.data.status_code || error.response?.status || "network";
    handleApiError(error, statusCode);
  }
);

export { axiosInstance };
