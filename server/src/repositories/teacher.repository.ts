import { EntityRepository, MoreThanOrEqual, Any, MoreThan, getRepository } from 'typeorm';
import { Teacher } from '../entity/Teacher';
import { TeacherModel, Sex } from '../models/TeacherModel';
import { BaseRepository } from './base.repository';

@EntityRepository(Teacher)
export class TeacherRepository extends BaseRepository<Teacher>{

  selectAll(): Promise<TeacherModel[] | []> {
    return this.createQueryBuilder('Teacher')
      .leftJoinAndSelect('Teacher.canLearn', 'lesson')
      .getMany();
  };

  findByFilters(sex: string, teacherAge: number, yearsofExperience: number): Promise<TeacherModel[] | []> {

    return this.createQueryBuilder('Teacher')
      .leftJoinAndSelect('Teacher.canLearn', 'lesson')
      .where({
        sex: !sex ? Any([Sex.male, Sex.female]) : sex,
        age: teacherAge > 0 ? teacherAge : MoreThanOrEqual(0),
        yearsofExperience: yearsofExperience > 0 ? yearsofExperience : MoreThanOrEqual(0)
      })
      .getMany();
  }

  getTargetMathTeachers(): Promise<TeacherModel[] | undefined> {
    return this.createQueryBuilder('Teacher')
      .leftJoinAndSelect('Teacher.canLearn', 'lesson')
      .leftJoin('lesson.room', 'room')
      .where({ yearsofExperience: MoreThan(10) })
      .andWhere('lesson.title = :title', { title: 'Maths' })
      .andWhere('room.roomNumber = :number', { number: 100 })
      .getMany();
  }

  findById(id: string): Promise<TeacherModel | undefined> {
    return this.createQueryBuilder('Teacher')
      .leftJoinAndSelect('Teacher.canLearn', 'lesson')
      .where('Teacher.id = :id', { id })
      .getOne();
  };

  async updateOne(id: string, newTeacher: Teacher): Promise<TeacherModel | undefined> {

    const teacher = await this.findById(id);
    const updated = { ...teacher, ...newTeacher };
    console.log(updated, 'RERERER');

    return this.save(updated)
  }
}
