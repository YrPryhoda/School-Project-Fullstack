import React from 'react'
import styles from './styles.module.scss';

const TeacherTable = ({ teachers }) => {

  const getSubjects = teacherSubjects => {

    if (!teacherSubjects || !teacherSubjects.length) {
      return '-'
    }

    return teacherSubjects
      .map(subject => Object.values(subject))
      .flat()
      .join(', ')
  }

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>№</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Sex</th>
          <th>Age</th>
          <th>Experience</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Subjects</th>
        </tr>
      </thead>
      <tbody>
        {
          teachers.map((teacher, index) => {
            const { firstName, lastName, sex, age, yearsofExperience, email, phone, canLearn } = teacher;

            return (
              <tr
                key={teacher.id}
                className={styles.userRow}
              >
                <td>{index + 1}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{sex}</td>
                <td>{age || '-'}</td>
                <td>{yearsofExperience || '-'}</td>
                <td>{email || '-'}</td>
                <td>{phone || '-'}</td>
                <td>{getSubjects(canLearn)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table> 
  )
}

export default TeacherTable
