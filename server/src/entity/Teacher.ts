import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TeacherModel } from '../models/TeacherModel';
import { Lesson } from './Lesson';
@Entity()
export class Teacher implements TeacherModel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ nullable: true })
  age?: number;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  tel?: string;

  @OneToMany(() => Lesson, (lesson) => lesson.teacher)
  canLearn!: Lesson[];
}
