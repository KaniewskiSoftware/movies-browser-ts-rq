/**
 * errorMessages is an object containing user-friendly error messages associated with specific
 * HTTP status codes, status code from the external API, and custom errors like network errors.
 * These messages are used to inform users about the issues they may encounter while using the app.
 */
export const errorMessages: Record<number | "default" | "network", string> = {
  7: "Invalid API key. You must be granted a valid key. Please check your API key and try again.",
  34: "The resource you requested could not be found. Please check the URL.",
  400: "Bad request. Please ensure you have entered a valid search query or selected a correct filter.",
  401: "Unauthorized access. You are not authorized to access movie data. Please check your API key and try again.",
  403: "Access forbidden. You do not have permission to access movie data. Please contact support for assistance.",
  404: "Resource not found. The movie, person, or genre you are looking for could not be found. Please check the URL.",
  500: "Internal server error. Our servers encountered an issue while processing your request. Please try again later.",
  502: "Bad gateway. Our servers experienced an issue while connecting to the movie database. Please try again later.",
  503: "Service unavailable. Our servers are currently under maintenance or experiencing high traffic. Please try again later.",
  network:
    "A network error occurred. Please check your internet connection and try again.",
  default:
    "An unexpected error occurred. Please try again later.",
};

/**
 * getErrorMessage is a function that takes an HTTP status code or a custom status code as an input
 * and returns the associated user-friendly error message. If the code is not found in the
 * errorMessages object, it returns the default error message.
 *
 * @param {number} code - The HTTP status code or a custom status code to get the error message for.
 * @returns {string} - The associated user-friendly error message.
 */
export const getErrorMessage = (code: number): string => {
  return errorMessages[code] || errorMessages.default;
};
