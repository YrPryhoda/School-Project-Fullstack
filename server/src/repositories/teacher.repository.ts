import { EntityRepository, Repository } from 'typeorm';
import { Teacher } from '../entity/Teacher';
import { TeacherModel } from '../models/TeacherModel';


@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher>{

  selectAll(): Promise<TeacherModel[] | []> {
    return this.find()
  };

  findById(id: string): Promise<TeacherModel | undefined> {
    return this.findOne(id)
  };

  createOne(teacher: Teacher) {
    return this.save(teacher);
  }

  async updateOne(id: string, newTeacher: Teacher): Promise<TeacherModel | undefined> {
    await this.update(id, newTeacher);
    return this.findById(id)
  }

  deleteOne(id: string) {
    return this.delete(id)
  }
}