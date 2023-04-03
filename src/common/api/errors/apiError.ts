import { AxiosError } from "axios";
class ApiError extends AxiosError {
  errorMessage: string;
  statusCode?: number;

  constructor(message: string, errorMessage: string, statusCode?: number) {
    super(message);
    this.errorMessage = errorMessage;
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}

export default ApiError;
