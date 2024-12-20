import { Request, Response } from "express";

export const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found", message: "Route does not exist" });
};
