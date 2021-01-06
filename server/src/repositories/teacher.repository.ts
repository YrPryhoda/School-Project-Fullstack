import { Teacher } from './../entity/Teacher';
import { EntityRepository, Repository, getCustomRepository } from 'typeorm';


@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher>{

  selectAll() {
    return this.find()
  }
}