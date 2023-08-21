import { describe, expect, test } from "vitest";
import supertest from "supertest";
import serverApp from "../../../src/app";

describe("test routes of account", () => {
  test("POST:/account ensure return correct object", async () => {
    const res = await supertest(serverApp)
      .post("/account")
      .send();

    expect(res.body).toEqual({ created: true });
  });
});