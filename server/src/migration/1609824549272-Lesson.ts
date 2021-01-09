import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Lesson } from '../entity/Lesson';
import { LessonType, LessonDuration, Subjects } from '../models/LessonModel';

export class Lesson1609824549272 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    [
      {
        title: Subjects.Maths,
        duration: LessonDuration.short,
        type: LessonType.group,
      },
      {
        title: Subjects.Biology,
        duration: LessonDuration.standart,
        type: LessonType.practical,
      },
      {
        title: Subjects.History,
        duration: LessonDuration.double,
        type: LessonType.lecture,
      },
      {
        title: Subjects.Art,
        duration: LessonDuration.double,
        type: LessonType.seminar,
      },
      {
        title: Subjects.English,
        duration: LessonDuration.standart,
        type: LessonType.group,
      },
    ].map(async (lesson) => {
      const instance = new Lesson();
      instance.title = lesson.title;
      instance.duration = lesson.duration;
      instance.type = lesson.type;

      await getRepository('Lesson').save(instance)
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
