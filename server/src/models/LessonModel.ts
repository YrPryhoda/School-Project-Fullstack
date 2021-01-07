import { TeacherModel } from './TeacherModel';
import { ClassroomModel } from './ClassroomModel';

export enum Subjects {
  Maths = 'Maths',
  Biology = 'Biology',
  History = 'History',
  Chemistry = 'Chemistry',
  Art = 'Art',
  Music = 'Music',
  Physics = 'Physics',
  Sport = 'Sport',
  Literature = 'Literature',
  English = 'English'
}

export enum LessonDuration {
  short = 30,
  standart = 45,
  double = 90
}

export enum LessonType {
  group = 'Group',
  lecture = 'Lecture',
  seminar = 'Seminar',
  practical = 'Practical',
  exam = 'Exam'
}

export interface LessonModel {
  id: string,
  title: Subjects,
  room: ClassroomModel[],
  teacher: TeacherModel[],
  duration?: LessonDuration,
  type?: LessonType
}