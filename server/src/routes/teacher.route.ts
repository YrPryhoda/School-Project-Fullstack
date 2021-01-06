import { Router } from 'express';
import TeacherController from '../controllers/teacher.controller';

const {
  createTeacher,
  findAllTeachers,
  findTeacher,
  updateTeacher,
  deleteTeacher
} = new TeacherController();

const routes = Router();

routes
  .get('/', findAllTeachers)
  .get('/:id', findTeacher)
  .post('/', createTeacher)
  .put('/:id', updateTeacher)
  .delete('/:id', deleteTeacher)

export default routes;
