import { EntityRepository, MoreThanOrEqual, Any } from 'typeorm';
import { Teacher } from '../entity/Teacher';
import { TeacherModel, Sex } from '../models/TeacherModel';
import { BaseRepository } from './base.repository';

@EntityRepository(Teacher)
export class TeacherRepository extends BaseRepository<Teacher>{

  selectAll(): Promise<TeacherModel[] | []> {
    return this.createQueryBuilder('Teacher')
      .leftJoin('Teacher.canLearn', 'lesson')
      .addSelect('lesson.title')
      .getMany();
  };

  findByFilters(sex: string, teacherAge: number, yearsofExperience: number): Promise<TeacherModel[] | []> {

    return this.createQueryBuilder('Teacher')
      .leftJoin('Teacher.canLearn', 'lesson')
      .addSelect('lesson.title')
      .where({
        sex: !sex ? Any([Sex.male, Sex.female]) : sex,
        age: teacherAge > 0 ? teacherAge : MoreThanOrEqual(0),
        yearsofExperience: yearsofExperience > 0 ? yearsofExperience : MoreThanOrEqual(0)
      })
      .getMany();
  }

  findById(id: string): Promise<TeacherModel | undefined> {
    return this.createQueryBuilder('Teacher')
      .leftJoin('Teacher.canLearn', 'lesson')
      .addSelect('lesson.title')
      .where('Teacher.id = :id', { id })
      .getOne();
  };

  async updateOne(id: string, newTeacher: Teacher): Promise<TeacherModel | undefined> {
    await this.updateById(id, newTeacher);
    return this.findById(id)
  }
}
