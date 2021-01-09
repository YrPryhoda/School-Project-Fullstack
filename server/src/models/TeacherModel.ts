import { LessonModel } from './LessonModel';

export enum Sex {
  male = 'male',
  female = 'female'
}
export interface TeacherModel {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  tel?: string,
  age?: number,
  sex: Sex,
  avatar?: string,
  yearsofExperience?: number,
  canLearn: LessonModel[]
}