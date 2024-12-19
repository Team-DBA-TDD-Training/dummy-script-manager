import request from "supertest";
import express from "express";
import scriptRoutes from "../routes/scriptRoutes";
import Script from "../models/script";

describe("Script controller", () => {
  const app = express();
  app.use("/api/scripts", scriptRoutes);

  let findSpy: jest.SpyInstance;

  describe("get scripts", () => {
    beforeEach(() => {
      findSpy = jest.spyOn(Script, "find").mockResolvedValue([]);
    });
    it("should return 200", async () => {
      const response = await request(app).get("/api/scripts");
      expect(response.status).toEqual(200);
      expect(findSpy).toHaveBeenCalledWith();
    });
  });
});
