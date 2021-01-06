import { Subjects } from './../models/TeacherModel';
import { Teacher } from './../entity/Teacher';
import { MigrationInterface, QueryRunner, getRepository, getCustomRepository } from 'typeorm';

export class Teachers1609962055710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const teacher1 = new Teacher();
    teacher1.firstName = 'Anna';
    teacher1.lastName = 'Fedorenko';
    teacher1.canLearn = `Subjects['Math']`;

    await getRepository('Teacher').save(teacher1)
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
