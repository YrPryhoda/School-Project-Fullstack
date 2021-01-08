import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from '../entity/Lesson';
import { LessonModel } from '../models/LessonModel';
import { BaseRepository } from './base.repository';

@EntityRepository(Lesson)
export class LessonRepository extends BaseRepository<Lesson>{

  selectAll(): Promise<LessonModel[] | []> {
    return this.createQueryBuilder('Lesson')
      .innerJoin('Lesson.teacher', 'teacher')
      .innerJoin('Lesson.room', 'room')
      .select([
        'Lesson',
        'teacher.id',
        'teacher.firstName',
        'teacher.lastName',
        'room.roomNumber',
      ])
      .getMany();
  };

  findById(id: string): Promise<LessonModel | undefined> {
    return this.createQueryBuilder('Lesson')
      .leftJoinAndSelect('Lesson.teacher', 'teacher')
      .leftJoinAndSelect('Lesson.room', 'room')
      .where('Lesson.id = :id', { id })
      .getOne();
  };

  async updateOne(id: string, newLesson: Lesson): Promise<LessonModel | undefined> {
    await this.updateById(id, newLesson);
    return this.findById(id)
  }
}