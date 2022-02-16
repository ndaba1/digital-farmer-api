import request from "supertest";

import app from "../app.js";
import { loadPlantsData } from "../models/plants.model.js";
import connectToDB, { disconnectFromDB } from "../services/dbConnection.js";

describe("Test block for Plants endpoint", () => {
  beforeAll(async () => {
    await connectToDB();
    await loadPlantsData();
  });

  afterAll(() => {
    disconnectFromDB();
  });

  describe("Test GET /plants", () => {
    test("It should respond with 401 Unauthorized status", async () => {
      await request(app)
        .get("/v1/plants")
        .expect(401)
        .expect('{"msg":"No token present"}');
    });

    test("It should return a plant and a 200 ok status", async () => {
      const resp = await request(app).get("/v1/auth/token");
      const token = resp.body.token;

      await request(app)
        .get("/v1/plants/alfalfa")
        .set("x-auth-token", `Bearer ${token}`)
        .expect(200);
    });

    test("It should return a paginated endpoint", async () => {
      const resp = await request(app).get("/v1/auth/token");
      const token = resp.body.token;

      const result = await request(app)
        .get("/v1/plants?page=2&limit=2")
        .set("x-auth-token", `Bearer ${token}`)
        .expect(200);

      expect(result.body.length).toBe(2);
    });
  });
});
