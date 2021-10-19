import { Request, Response } from "express";

export const respondWithResult =
  (req: Request, res: Response, statusCode = 200) =>
  (entity: any) => {
    return res.status(statusCode).json(entity);
  };

export const handleEntityNotFound =
  (req: Request, res: Response, statusCode = 404) =>
  (msg: string = "Entity not found") => {
    const message = {
      msg: msg,
      statusCode,
    };
    res.status(404).send(message);
  };

export const handleError =
  (req: Request, res: Response, statusCode = 500) =>
  (err: any) => {
    const message = {
      msg: err.message,
      error: err,
      statusCode,
    };

    res.status(statusCode).send(message);
  };
