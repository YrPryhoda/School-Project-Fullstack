import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import HttpStatusCode from '../constants/httpStatusCode.constants';
import { getWebError } from '../helpers/error.handler';
import { TeacherRepository } from '../repositories/teacher.repository';

class TeacherController {

  createTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const teacher = await teacherRepository.createOne(req.body);

      res.send(teacher)
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(getWebError(error, HttpStatusCode.BAD_REQUEST));
    }
  }

  findAllTeachers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const teachers = await teacherRepository.selectAll();

      res.send(teachers)
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(getWebError(error, HttpStatusCode.BAD_REQUEST));
    }
  }

  findTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const { id } = req.params;
      const teacher = await teacherRepository.findById(id);
      res.send(teacher);

    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(getWebError(error, HttpStatusCode.BAD_REQUEST));
    }
  }

  updateTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const { params: { id }, body } = req;
      const updatedTeacher = await teacherRepository.updateOne(id, body);

      res.send(updatedTeacher);
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(getWebError(error, HttpStatusCode.BAD_REQUEST));
    }
  }

  deleteTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const { id } = req.params;

      const result = await teacherRepository.deleteOne(id);

      res.send(result)
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(getWebError(error, HttpStatusCode.BAD_REQUEST));
    }
  }

}

export default TeacherController;