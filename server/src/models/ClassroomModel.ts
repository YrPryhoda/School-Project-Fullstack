import { LessonModel } from './LessonModel';

export enum BuildType {
  A,
  B,
  C,
  D,
  E
}

export interface ClassroomModel {
  id: string,
  roomNumber: number,
  floor: number,
  build: BuildType,
  description?: string,
  allowLessons: LessonModel[]
}