export const errorMessages: Record<number | "default", string> = {
  400: "Bad request. Please ensure you have entered a valid search query or selected a correct filter.",
  401: "Unauthorized access. You are not authorized to access movie data. Please check your API key and try again.",
  403: "Access forbidden. You do not have permission to access movie data. Please contact support for assistance.",
  404: "Resource not found. The movie, person, or genre you are looking for could not be found. Please check the URL or try a different search query.",
  500: "Internal server error. Our servers encountered an issue while processing your request. Please try again later or contact support for assistance.",
  502: "Bad gateway. Our servers experienced an issue while connecting to the movie database. Please try again later or contact support for assistance.",
  503: "Service unavailable. Our servers are currently under maintenance or experiencing high traffic. Please try again later.",
  default:
    "An unexpected error occurred. Please try again later or contact support for assistance.",
};

export const getErrorMessage = (code: number): string => {
  return errorMessages[code] || errorMessages.default;
};
