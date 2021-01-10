import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class BaseRepository<T> extends Repository<T>{

  select(): Promise<T[] | []> {
    return this.find()
  };

  createOne(teacher: T): Promise<T | undefined> {
    return this.save(teacher);
  }

  async updateById(id: string, newTeacher: T): Promise<T | void> {
    await this.update(id, newTeacher);
  }

  deleteOne(id: string) {
    return this.delete(id)
  }
}