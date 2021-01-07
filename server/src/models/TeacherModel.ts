import { LessonModel } from './LessonModel';

export interface TeacherModel {
  id: string,
  firstName: string,
  lastName: string,
  email?: string,
  tel?: string,
  age?: number,
  canLearn: LessonModel[]
}