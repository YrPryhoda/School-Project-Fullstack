import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TeacherModel, Subjects } from '../models/TeacherModel';

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

  @Column()
  canLearn!: string;
}
