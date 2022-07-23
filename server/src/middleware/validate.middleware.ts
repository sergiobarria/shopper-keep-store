import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import * as status from 'http-status';

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      return next();
    } catch (error: any) {
      res.status(status.BAD_REQUEST).json({ errors: error.errors });
    }
  };
