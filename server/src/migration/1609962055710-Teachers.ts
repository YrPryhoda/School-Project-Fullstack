import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Subjects } from '../models/TeacherModel';
import { Teacher } from '../entity/Teacher';

export class Teachers1609962055710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const teacher1 = new Teacher();
    teacher1.firstName = 'Anna';
    teacher1.lastName = 'Fedorenko';
    teacher1.canLearn = JSON.stringify([Subjects['Math'], Subjects['History']]);

    await getRepository('Teacher').save(teacher1)
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
