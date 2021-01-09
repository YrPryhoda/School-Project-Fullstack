import { MigrationInterface, QueryRunner, getRepository, getCustomRepository } from 'typeorm';
import { LessonRepository } from '../repositories/lesson.repository';
import { TeacherRepository } from '../repositories/teacher.repository';
import { LessonModel } from '../models/LessonModel';

export class Joins1610001912332 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const lessonRepository = getCustomRepository(LessonRepository);
    const teacherRepository = getCustomRepository(TeacherRepository);
    const classroomRepository = getRepository('Classroom');

    const lessons: LessonModel[] = await lessonRepository.select();
    const teacher = await teacherRepository.selectAll();
    const classrooms: any[] = await classroomRepository.find();
    console.log(lessons, 'LESSONS JOIN');

    teacher[0].canLearn = [lessons[0], lessons[2]];
    teacher[1].canLearn = [lessons[1], lessons[0]];

    lessons[0].room = [classrooms[0], classrooms[1], classrooms[4]]
    lessons[1].room = [classrooms[1], classrooms[2], classrooms[4]]
    lessons[2].room = [classrooms[2], classrooms[3], classrooms[5]]

    await lessonRepository.save(lessons)
    await teacherRepository.save(teacher)
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
