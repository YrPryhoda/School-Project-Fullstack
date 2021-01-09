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

    teacher[0].canLearn = [lessons[0], lessons[1], lessons[4]];
    teacher[1].canLearn = [lessons[2], lessons[1], lessons[4]];
    teacher[2].canLearn = [lessons[4], lessons[3], lessons[2]];
    teacher[3].canLearn = [lessons[0], lessons[1], lessons[3]];
    teacher[4].canLearn = [lessons[0], lessons[3], lessons[1]];

    lessons[0].room = [classrooms[0], classrooms[1], classrooms[4]]
    lessons[1].room = [classrooms[1], classrooms[2], classrooms[4]]
    lessons[2].room = [classrooms[2], classrooms[3], classrooms[1]]
    lessons[3].room = [classrooms[3], classrooms[2], classrooms[0]]
    lessons[4].room = [classrooms[4], classrooms[3], classrooms[5]]

    await lessonRepository.save(lessons)
    await teacherRepository.save(teacher)
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
