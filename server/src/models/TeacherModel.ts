export enum Subjects {
  Math = 'Math',
  Biology = 'Biology',
  History = 'History'
}

export interface TeacherModel {
  id: string,
  firstName: string,
  lastName: string,
  age?: number,
  canLearn: string
}