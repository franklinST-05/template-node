import { describe, expect, test } from "vitest";
import { AppError } from "../../src/errors/AppError";

describe("test class AppError", () => {
  test("ensure getter returns correct values", () => {
    const FIELD_MESSAGE = "Error of test";
    const FIELD_STATUS_CODE = 500;

    const appError = new AppError(FIELD_MESSAGE, FIELD_STATUS_CODE);
    expect(appError.getMessage()).toBe(FIELD_MESSAGE);
    expect(appError.getStatusCode()).toBe(FIELD_STATUS_CODE);
  });

  test("ensure getter returns status code 400 if not passed", () => {
    const FIELD_MESSAGE = "Error of test";

    const appError = new AppError(FIELD_MESSAGE);
    expect(appError.getMessage()).toBe(FIELD_MESSAGE);
    expect(appError.getStatusCode()).toBe(400);
  });
});