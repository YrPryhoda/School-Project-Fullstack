import { Router } from 'express';
import LessonController from '../controllers/lesson.controller';

const {
  createLesson,
  findAllLessons,
  findLesson,
  updateLesson,
  deleteLesson
} = new LessonController();

const routes = Router();

routes
  .get('/', findAllLessons)
  .get('/:id', findLesson)
  .post('/', createLesson)
  .put('/:id', updateLesson)
  .delete('/:id', deleteLesson)

export default routes;
