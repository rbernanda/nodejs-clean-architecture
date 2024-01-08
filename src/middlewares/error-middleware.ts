import { Request, Response, NextFunction } from "express";
import ResponseError from "../utilities/response-error";

export const errorMiddleware = (
  err: Error | ResponseError,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
    return;
  }

  res
    .status(500)
    .json({
      errors: err.message,
    })
    .end();
};
