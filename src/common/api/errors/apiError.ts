import { AxiosError } from "axios";

class ApiError extends AxiosError {
  errorMessage: string;

  constructor(message: string, errorMessage: string) {
    super(message);
    this.errorMessage = errorMessage;
    this.name = 'ApiError';
  }
}

export default ApiError;
