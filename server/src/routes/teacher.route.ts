import { Router } from 'express';
import TeacherController from '../controllers/teacher.controller';

const {
  createTeacher,
  findAllTeachers,
  findTeacher,
  updateTeacher,
  deleteTeacher,
  findTeachersByFilters,
  getTargetMathTeachers
} = new TeacherController();

const routes = Router();

routes
  .get('/', findAllTeachers)
  .patch('/filters', findTeachersByFilters)
  .get('/special-filter', getTargetMathTeachers)
  .get('/:id', findTeacher)
  .post('/', createTeacher)
  .put('/:id', updateTeacher)
  .delete('/:id', deleteTeacher)

export default routes;
