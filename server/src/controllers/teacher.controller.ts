import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import HttpStatusCode from '../constants/httpStatusCode.constants';
import { validationError } from '../helpers/error.handler';
import { TeacherRepository } from '../repositories/teacher.repository';
import { LessonModel } from '../models/LessonModel';
import { getLessons } from '../helpers/lessons.transformer';


class TeacherController {

  createTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const { canLearn } = req.body;
      const arrLessons: LessonModel[] = await getLessons(canLearn);

      const teacher = await teacherRepository.createOne({
        ...req.body, canLearn: arrLessons
      });

      res.send(teacher)
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(validationError(error, res));
    }
  }

  findAllTeachers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const teachers = await teacherRepository.selectAll();

      res.send(teachers)
    } catch (error) {
      res
        .status(HttpStatusCode.NOT_FOUND)
        .send(validationError(error, res));
    }
  }

  findTeachersByFilters = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const { sex, age, yearsofExperience } = req.body

      const teacher = await teacherRepository.findByFilters(sex, age, yearsofExperience);

      res.send(teacher);
    } catch (error) {
      res
        .status(HttpStatusCode.NOT_FOUND)
        .send(validationError(error, res));
    }
  }

  getTargetMathTeachers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const teachers = await teacherRepository.getTargetMathTeachers();
      res.send(teachers);

    } catch (error) {
      res
        .status(HttpStatusCode.NOT_FOUND)
        .send(validationError(error, res));
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
        .status(HttpStatusCode.NOT_FOUND)
        .send(validationError(error, res));
    }
  }

  updateTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const { params: { id }, body } = req;
      const { canLearn } = req.body;

      const arrLessons: LessonModel[] = await getLessons(canLearn);

      const updatedTeacher = await teacherRepository.updateOne(id, {
        ...body,
        canLearn: arrLessons
      });

      res.send(updatedTeacher);
    } catch (error) {
      res
        .status(HttpStatusCode.NOT_ACCEPTABLE)
        .send(validationError(error, res));
    }
  }

  deleteTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherRepository = getCustomRepository(TeacherRepository);
      const { id } = req.params;

      const result = await teacherRepository.deleteOne(id as string);

      res.send(result)
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(validationError(error, res));
    }
  }

}

export default TeacherController;