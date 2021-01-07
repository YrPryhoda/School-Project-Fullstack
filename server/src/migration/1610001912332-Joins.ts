import { MigrationInterface, QueryRunner, getRepository, getCustomRepository } from 'typeorm';
import { LessonRepository } from '../repositories/lesson.repository';
import { TeacherRepository } from '../repositories/teacher.repository';

export class Joins1610001912332 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const lessonRepository = getCustomRepository(LessonRepository);
    const teacherRepository = getCustomRepository(TeacherRepository);

    const lessons = await lessonRepository.selectAll();
    const teacher = await teacherRepository.selectAll();

    teacher[0].canLearn = [lessons[0], lessons[2]];
    teacher[1].canLearn = [lessons[1], lessons[0]];

    await teacherRepository.save(teacher)
    console.log(lessons, teacher, 'CHECK!!!!');
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
