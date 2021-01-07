import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { LessonModel, LessonDuration, LessonType, Subjects } from '../models/LessonModel';
import { TeacherModel } from '../models/TeacherModel';
import { Teacher } from './Teacher';

@Entity()
export class Lesson implements LessonModel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  title!: Subjects;

  @ManyToMany(() => Teacher, (teacher: Teacher) => teacher.canLearn, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({ name: 'teachers_lessons' })
  teacher!: TeacherModel[];

  @Column()
  room!: number;

  @Column('text')
  duration?: LessonDuration

  @Column('text')
  type?: LessonType;
}
