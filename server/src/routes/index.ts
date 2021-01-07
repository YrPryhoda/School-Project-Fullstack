import { Router } from 'express';
import teacher from './teacher.route';
import lesson from './lesson.route';

const routes = Router();

routes
  .use('/teacher', teacher)
  .use('/lesson', lesson)

export default routes;
