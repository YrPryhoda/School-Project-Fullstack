import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Classroom } from '../entity/Classroom';
import { BuildType } from '../models/ClassroomModel';

export class Classroom1609973056810 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    [
      {
        roomNumber: 10,
        floor: 1,
        build: BuildType.A,
        description: 'Lecture class',
      },
      {
        roomNumber: 34,
        floor: 2,
        build: BuildType.B,
        description: 'Typical classroom',
      },
      {
        roomNumber: 120,
        floor: 5,
        build: BuildType.C,
        description: 'Classroom for seminars',
      },
      {
        roomNumber: 120,
        floor: 3,
        build: BuildType.A,
        description: 'For first year students',
      },
      {
        roomNumber: 200,
        floor: 1,
        build: BuildType.B
      },
      {
        roomNumber: 99,
        floor: 3,
        build: BuildType.C
      },
    ].map(async room => {
      const instance = new Classroom();
      instance.roomNumber = room.roomNumber;
      instance.floor = room.floor;
      instance.build = room.build;
      instance.description = room.description;

      await getRepository('Classroom').save(instance)
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
