import { Router } from 'express';
import LessonController from '../controllers/lesson.controller';

const {
  /*   createTeacher, */
  findAllLessons,
  findLesson,
  /*   updateTeacher,
    deleteTeacher */
} = new LessonController();

const routes = Router();

routes
  .get('/', findAllLessons)
  .get('/:id', findLesson)
/*   .post('/', createTeacher)
  .put('/:id', updateTeacher)
  .delete('/:id', deleteTeacher) */

export default routes;
