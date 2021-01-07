import { Request, Response, NextFunction } from 'express';
import { getCustomRepository, Repository } from 'typeorm';
import HttpStatusCode from '../constants/httpStatusCode.constants';
import { getWebError } from '../helpers/error.handler';
import { LessonRepository } from '../repositories/lesson.repository';

class LessonController {
  createLesson = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lessonRepository = getCustomRepository(LessonRepository);
      const lesson = await lessonRepository.createOne(req.body);

      res.send(lesson)
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(getWebError(error, HttpStatusCode.BAD_REQUEST));
    }
  }

  findAllLessons = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const lessonRepository = getCustomRepository(LessonRepository);
      const lesson = await lessonRepository.selectAll();

      res.send(lesson)
    } catch (error) {
      res
        .status(HttpStatusCode.NOT_FOUND)
        .send(getWebError(error, HttpStatusCode.NOT_FOUND));
    }
  }

  findLesson = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lessonRepository = getCustomRepository(LessonRepository);
      const { id } = req.params;
      const lesson = await lessonRepository.findById(id);
      res.send(lesson);

    } catch (error) {
      res
        .status(HttpStatusCode.NOT_FOUND)
        .send(getWebError(error, HttpStatusCode.NOT_FOUND));
    }
  }

  updateLesson = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lessonRepository = getCustomRepository(LessonRepository);
      const { params: { id }, body } = req;
      const updatedTeacher = await lessonRepository.updateOne(id, body);

      res.send(updatedTeacher);
    } catch (error) {
      res
        .status(HttpStatusCode.NOT_ACCEPTABLE)
        .send(getWebError(error, HttpStatusCode.NOT_ACCEPTABLE));
    }
  }

  deleteLesson = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lessonRepository = getCustomRepository(LessonRepository);
      const { id } = req.params;

      const result = await lessonRepository.deleteOne(id);

      res.send(result)
    } catch (error) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(getWebError(error, HttpStatusCode.BAD_REQUEST));
    }
  }

}

export default LessonController;