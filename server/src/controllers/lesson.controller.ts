import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import HttpStatusCode from '../constants/httpStatusCode.constants';
import { getWebError } from '../helpers/error.handler';
import { LessonRepository } from '../repositories/lesson.repository';

class LessonController {

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
  /* 
    updateTeacher = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const teacherRepository = getCustomRepository(TeacherRepository);
        const { params: { id }, body } = req;
        const updatedTeacher = await teacherRepository.updateOne(id, body);
  
        res.send(updatedTeacher);
      } catch (error) {
        res
          .status(HttpStatusCode.NOT_ACCEPTABLE)
          .send(getWebError(error, HttpStatusCode.NOT_ACCEPTABLE));
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
   */
}

export default LessonController;