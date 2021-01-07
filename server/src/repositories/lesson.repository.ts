import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from '../entity/Lesson';
import { LessonModel } from '../models/LessonModel';
import { BaseRepository } from './base.repository';

@EntityRepository(Lesson)
export class LessonRepository extends BaseRepository<Lesson>{

  findById(id: string): Promise<LessonModel | undefined> {
    return this.createQueryBuilder('Lesson')
      .leftJoinAndSelect('Lesson.teacher', 'teacher')
      .where('Lesson.id = :id', { id })
      .getOne();
  };

  async updateOne(id: string, newTeacher: Lesson): Promise<LessonModel | undefined> {
    await this.updateById(id, newTeacher);
    return this.findById(id)
  }
}