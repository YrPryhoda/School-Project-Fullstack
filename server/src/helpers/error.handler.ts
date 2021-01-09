import { Request, Response, NextFunction } from 'express';
import HttpStatusCode from '../constants/httpStatusCode.constants';

export const validationError = (err: Error, res: Response) => {

  res.status(HttpStatusCode.BAD_REQUEST).json({
    status: 'error',
    statusCode: HttpStatusCode.BAD_REQUEST,
    message: err.message,
  });
};

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  validationError(err, res);
}