import { TeacherRepository } from './../repositories/teacher.repository';
import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { getWebError } from '../helpers/error.handler';


class TeacherController {
  createTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);

    } catch (error) {
      res.status(400).send(getWebError(error, 400));
    }
  }

  findAllTeachers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const teachers = await teacherRepository.selectAll();

      res.send(teachers)
    } catch (error) {
      res.status(400).send(getWebError(error, 400));
    }
  }

  findTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
      res.status(400).send(getWebError(error, 400));
    }
  }

  updateTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
      res.status(400).send(getWebError(error, 400));
    }
  }

  deleteTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
      res.status(400).send(getWebError(error, 400));
    }
  }

}

export default TeacherController;