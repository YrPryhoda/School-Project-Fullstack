import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LessonModel, LessonDuration, LessonType, Subjects } from '../models/LessonModel';
import { TeacherModel } from '../models/TeacherModel';
import { Teacher } from './Teacher';

@Entity()
export class Lesson implements LessonModel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: Subjects;

  @ManyToOne(() => Teacher, (teacher: Teacher) => teacher.canLearn, { cascade: true, onDelete: 'CASCADE' })
  teacher!: TeacherModel;

  @Column()
  room!: number;

  @Column('text')
  duration?: LessonDuration

  @Column('text')
  type?: LessonType;
}
