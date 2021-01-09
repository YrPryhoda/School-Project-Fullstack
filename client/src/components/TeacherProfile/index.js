import React from 'react'
import styles from './styles.module.scss';
import { getSimpleList } from '../../helpers';

const TeacherProfile = ({ teacher }) => {
  const { firstName, lastName, sex, age, yearsofExperience, email, tel, canLearn, avatar } = teacher;

  return (
    <div className={styles.section}>
      <div className={styles.col}>
        <img src={avatar} alt='avatar' className={styles.avatar} />
      </div>
      <div className={styles.col}>
        <h2>{`${firstName} ${lastName}`}</h2>
        <p> Sex: <span className={styles.info}> {sex}</span>
        </p>
        <p> Age: <span className={styles.info}> {age}</span>
        </p>
        <p> E-mail: <span className={styles.info}> {email}</span>
        </p>
        <p> Phone: <span className={styles.info}> {tel}</span>
        </p>
        <p> Experience: <span className={styles.info}> {yearsofExperience}</span>
        </p>
        <p> Instructor of:
          <span className={styles.info}>
            {getSimpleList(canLearn)}
          </span>
        </p>

      </div>
    </div>
  )
}

export default TeacherProfile
