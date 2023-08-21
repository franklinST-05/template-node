/**
 * Custom error class for handling application errors
 * @param {string} message - The error message.
 * @param {number} statusCode - The HTTP status code associated with the error (default is 400).
**/
export class AppError extends Error {
  private readonly statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }

  public getMessage(): string {
    return this.message;
  }

  public getStatusCode(): number {
    return this.statusCode;
  }
}