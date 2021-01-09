import { Router } from 'express';
import TeacherController from '../controllers/teacher.controller';

const {
  createTeacher,
  findAllTeachers,
  findTeacher,
  updateTeacher,
  deleteTeacher,
  findTeachersByFilters
} = new TeacherController();

const routes = Router();

routes
  .get('/', findAllTeachers)
  .patch('/filters', findTeachersByFilters)
  .get('/:id', findTeacher)
  .post('/', createTeacher)
  .put('/:id', updateTeacher)
  .delete('/:id', deleteTeacher)

export default routes;
