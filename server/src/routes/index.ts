import { Router } from 'express';
import teacher from './teacher.route';

const routes = Router();

routes
  .use('/teacher', teacher)

export default routes;
