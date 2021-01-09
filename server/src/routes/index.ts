import { Router } from 'express';
import teacher from './teacher.route';
import lesson from './lesson.route';
import { getValidate } from '../helpers/validation.middleware';
import { Teacher } from '../requestValidation/Teacher';

const routes = Router();

routes
  .use('/teacher', getValidate(Teacher), teacher)
  .use('/lesson', lesson)

export default routes;
