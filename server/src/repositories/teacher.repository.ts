import { EntityRepository, Repository } from 'typeorm';
import { Teacher } from '../entity/Teacher';
import { TeacherModel } from '../models/TeacherModel';
import { BaseRepository } from './base.repository';


@EntityRepository(Teacher)
export class TeacherRepository extends BaseRepository<Teacher>{

  selectAll(): Promise<TeacherModel[] | []> {
    return this.createQueryBuilder('Teacher')
      .leftJoin('Teacher.canLearn', 'lesson')
      .addSelect('lesson.title')
      .getMany();
  };

  findById(id: string): Promise<TeacherModel | undefined> {
    return this.createQueryBuilder('Teacher')
      .leftJoinAndSelect('Teacher.canLearn', 'lesson')
      .where('Teacher.id = :id', { id })
      .getOne();
  };

  async updateOne(id: string, newTeacher: Teacher): Promise<TeacherModel | undefined> {
    await this.updateById(id, newTeacher);
    return this.findById(id)
  }
}
