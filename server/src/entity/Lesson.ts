import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Length, IsEmail, Min, Max } from 'class-validator';
import { LessonModel, LessonDuration, LessonType, Subjects } from '../models/LessonModel';
import { TeacherModel } from '../models/TeacherModel';
import { ClassroomModel } from '../models/ClassroomModel';
import { Teacher } from './Teacher';
import { Classroom } from './Classroom';

@Entity()
export class Lesson implements LessonModel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  @Length(1)
  title!: Subjects;

  @ManyToMany(() => Teacher, (teacher: Teacher) => teacher.canLearn, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({ name: 'teachers_lessons' })
  teacher!: TeacherModel[];

  @ManyToMany(() => Classroom, (room: Classroom) => room.allowLessons, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({ name: 'lessons_rooms' })
  room!: ClassroomModel[];

  @Column('text')
  duration?: LessonDuration

  @Column('text')
  type?: LessonType;
}
