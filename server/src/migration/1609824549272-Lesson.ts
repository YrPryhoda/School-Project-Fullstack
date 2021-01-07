import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Lesson } from '../entity/Lesson';
import { LessonType, LessonDuration } from '../models/LessonModel';

export class Lesson1609824549272 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const lessons = [
      {
        title: 'Maths',
        room: 102,
        duration: LessonDuration.short,
        type: LessonType.group,
      },
      {
        title: 'Biology',
        room: 210,
        duration: LessonDuration.standart,
        type: LessonType.practical,
      },
      {
        title: 'History',
        room: 301,
        duration: LessonDuration.double,
        type: LessonType.lecture,
      },
    ].map(async (lesson) => {
      const instance = new Lesson();
      instance.title = lesson.title;
      instance.room = lesson.room;
      instance.duration = lesson.duration;
      instance.type = lesson.type;

      await getRepository('Lesson').save(instance)
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
