import { getCustomRepository } from 'typeorm';
import { LessonModel, LessonObject } from '../models/LessonModel';
import { LessonRepository } from '../repositories/lesson.repository';

export const getLessons = async (canLearn: LessonObject[]): Promise<LessonModel[] | []> => {
  const lessonRepository = getCustomRepository(LessonRepository);
  const arrLessons: LessonModel[] = [];

  if (canLearn.length) {

    await Promise.all(canLearn.map(async (lesson: LessonObject) => {
      const result = await lessonRepository.findOne({
        where: { title: lesson.value }
      })

      if (result) arrLessons.push(result)
    }));
  }
  return arrLessons;
}