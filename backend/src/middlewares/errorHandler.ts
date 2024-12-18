/* typescript-eslint-disable no-implicit-any */
import { Request, Response } from "express";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
) => {
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "An unexpected error occurred",
  });
};
