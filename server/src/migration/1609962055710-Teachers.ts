import { MigrationInterface, QueryRunner, getRepository, getCustomRepository } from 'typeorm';
import { Teacher } from '../entity/Teacher';
import { Lesson } from '../entity/Lesson';
import { LessonRepository } from '../repositories/lesson.repository';

export class Teachers1609962055710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const teacher1 = new Teacher();
    teacher1.firstName = 'Anna';
    teacher1.lastName = 'Fedorenko';

    const teacher2 = new Teacher();
    teacher2.firstName = 'Yaroslav';
    teacher2.lastName = 'Pryhoda';

    await getRepository('Teacher').save([teacher1, teacher2])
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
