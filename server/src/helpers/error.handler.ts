import { Request, Response, NextFunction } from 'express';
import HttpStatusCode from '../constants/httpStatusCode.constants';

export function getWebError(err: Error, statusCode: number) {
  return {
    message: err.message,
    status: 'error',
    statusCode
  };
}

const validationError = (err: Error, res: Response) => {
  res.status(HttpStatusCode.BAD_REQUEST).json({
    status: 'error',
    statusCode: HttpStatusCode.BAD_REQUEST,
    message: 'Validation failed',
  });
};

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  validationError(err, res);
}