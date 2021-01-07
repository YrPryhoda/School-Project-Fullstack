import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from '../entity/Lesson';
import { LessonModel } from '../models/LessonModel';


@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson>{

  selectAll(): Promise<LessonModel[] | []> {
    return this.find()
  };

  findById(id: string): Promise<LessonModel | undefined> {
    return this.findOne(id)
  };

  createOne(teacher: Lesson) {
    return this.save(teacher);
  }

  async updateOne(id: string, newTeacher: Lesson): Promise<LessonModel | undefined> {
    await this.update(id, newTeacher);
    return this.findById(id)
  }

  deleteOne(id: string) {
    return this.delete(id)
  }
}