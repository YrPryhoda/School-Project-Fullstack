import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Teacher } from '../entity/Teacher';
import { Sex } from '../models/TeacherModel';

export class Teachers1609962055710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const teacher1 = new Teacher();
    teacher1.firstName = 'Anna';
    teacher1.lastName = 'Fedorenko';
    teacher1.email = 'fedorenko@i.ua';
    teacher1.age = 29;
    teacher1.sex = Sex.female;
    teacher1.yearsofExperience = 8;
    teacher1.avatar = 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png';

    const teacher2 = new Teacher();
    teacher2.firstName = 'Yaroslav';
    teacher2.lastName = 'Pryhoda';
    teacher2.email = 'email@ukr.ua';
    teacher2.tel = '+380636995492';
    teacher2.age = 24;
    teacher2.yearsofExperience = 1;
    teacher2.sex = Sex.male;
    teacher2.avatar = 'https://imgur.com/I80W1Q0.png';

    const teacher3 = new Teacher();
    teacher3.firstName = 'Olena';
    teacher3.lastName = 'Petrova';
    teacher3.email = 'mail@ukr.net';
    teacher3.tel = '+380996959433';
    teacher3.age = 40;
    teacher3.yearsofExperience = 12;
    teacher3.sex = Sex.female;
    teacher3.avatar = 'https://html5css.ru/howto/img_avatar2.png';

    const teacher4 = new Teacher();
    teacher4.firstName = 'Oleg';
    teacher4.lastName = 'Johnson';
    teacher4.email = 'oleg@mail.net';
    teacher4.tel = '+30882323123';
    teacher4.age = 53;
    teacher4.yearsofExperience = 16;
    teacher4.sex = Sex.male;
    teacher4.avatar = 'https://static.toiimg.com/photo/76729750.cms';

    const teacher5 = new Teacher();
    teacher5.firstName = 'Dmytro';
    teacher5.lastName = 'Skupenko';
    teacher5.email = 'skup_dm@gmail.net';
    teacher5.tel = '+380504334321';
    teacher5.age = 66;
    teacher5.yearsofExperience = 20;
    teacher5.sex = Sex.male;
    teacher5.avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU';

    await getRepository('Teacher').save([teacher1, teacher2, teacher3, teacher4, teacher5])
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
