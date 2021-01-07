import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ClassroomModel, BuildType } from '../models/ClassroomModel';
import { Lesson } from './Lesson';
import { LessonModel } from '../models/LessonModel';

@Entity()
export class Classroom implements ClassroomModel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text', { nullable: true })
  description?: string;

  @ManyToMany(() => Lesson, (lesson: Lesson) => lesson.room)
  allowLessons!: LessonModel[];

  @Column()
  roomNumber!: number;

  @Column()
  floor!: number;

  @Column('text')
  build!: BuildType
}
