import axios from "axios";
import { getErrorMessage } from "../errors/errorMessages";
import { apiKey, apiLanguage, apiLink } from "../config";
import ApiError from "../errors/apiError";

const axiosInstance = axios.create({
  baseURL: apiLink,
  params: {
    api_key: apiKey,
    language: apiLanguage,
  },
});

const handleApiError = (error: any, statusCode: number) => {
  const errorMessage = getErrorMessage(statusCode);
  throw new ApiError(error.message, errorMessage, statusCode);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const statusCode =
      error.response?.data.status_code || error.response?.status || "network";
    handleApiError(error, statusCode);
  }
);

export { axiosInstance };
