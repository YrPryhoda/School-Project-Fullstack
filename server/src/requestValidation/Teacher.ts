import { Length, IsEmail, Min, Max } from 'class-validator';
import { Expose } from 'class-transformer';

export class Teacher {

  @Expose()
  id!: string;

  @Expose()
  @Length(1)
  firstName!: string;

  @Expose()
  @Length(1)
  lastName!: string;

  @Expose()
  @Min(0)
  @Max(99)
  age?: number;

  @Expose()
  sex!: string;

  @Expose()
  @IsEmail()
  email?: string;

  @Expose()
  @Length(2, 15)
  tel?: string;

  @Expose()
  avatar?: string;

  @Expose()
  @Min(0)
  @Max(99)
  yearsofExperience?: number;
}
