import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export const getValidate = (classToFetch: any) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    if (req.method === 'POST' || req.method === 'PUT') {
      const instance = plainToClass(classToFetch, req.body);

      const errors = await validate(instance, { skipMissingProperties: true })

      if (errors.length > 0) {
        const errorsList = errors
          .map((item) => Object.values(item.constraints as { string: string }))
          .join(', ');

        next(new Error(errorsList))
      } else {
        next()
      }
    } else {
      next()
    }
  }
}
