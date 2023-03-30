import { AxiosError } from "axios";

/**
 * ApiError is a custom error class extending AxiosError that contains an additional property:
 * errorMessage, which holds a user-friendly error message. It also optionally holds the status code
 * of the error if available.
 */
class ApiError extends AxiosError {
  errorMessage: string;
  statusCode?: number;

  /**
   * Constructs an ApiError instance.
   *
   * @param {string} message - The original error message from Axios.
   * @param {string} errorMessage - The user-friendly error message.
   * @param {number} [statusCode] - The optional HTTP status code or custom status code associated with the error.
   */
  constructor(message: string, errorMessage: string, statusCode?: number) {
    super(message);
    this.errorMessage = errorMessage;
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}

export default ApiError;
