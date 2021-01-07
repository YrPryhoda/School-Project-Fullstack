import { MigrationInterface, QueryRunner, getRepository, getCustomRepository } from 'typeorm';
import { Teacher } from '../entity/Teacher';
import { Lesson } from '../entity/Lesson';
import { LessonRepository } from '../repositories/lesson.repository';

export class Teachers1609962055710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const teacher1 = new Teacher();
    teacher1.firstName = 'Anna';
    teacher1.lastName = 'Fedorenko';
    teacher1.email = 'fedorenko@i.ua';
    teacher1.age = 29;

    const teacher2 = new Teacher();
    teacher2.firstName = 'Yaroslav';
    teacher2.lastName = 'Pryhoda';
    teacher2.tel = '+380636995492';
    teacher2.age = 24;

    await getRepository('Teacher').save([teacher1, teacher2])
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
