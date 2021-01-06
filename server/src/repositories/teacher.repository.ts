import { EntityRepository, Repository } from 'typeorm';
import { Teacher } from '../entity/Teacher';


@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher>{

  selectAll() {
    return this.find()
  }
}