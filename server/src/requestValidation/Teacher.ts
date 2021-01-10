import { IsEmail, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';
import { LessonObject } from '../models/LessonModel';

export class Teacher {

  @Expose()
  id!: string;

  @Expose()
  @IsNotEmpty()
  firstName!: string;

  @Expose()
  @IsNotEmpty()
  lastName!: string;

  @Expose()
  age?: number;

  @Expose()
  sex!: string;

  @Expose()
  @IsEmail()
  email!: string;

  @Expose()
  tel?: string;

  @Expose()
  avatar?: string;

  @Expose()
  yearsofExperience?: number;

  @Expose()
  canLearn?: LessonObject[];
}
