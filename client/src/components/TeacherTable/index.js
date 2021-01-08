import React from 'react'
import { getSimpleList } from '../../helpers';
import styles from './styles.module.scss';
import TeacherForm from '../TeacherForm';

const TeacherTable = ({ teachers, handleFormOpen, isModalOpen }) => {

  return (
    <>
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
                  <td>{yearsofExperience ? `${yearsofExperience} years` : '-'}</td>
                  <td>{email || '-'}</td>
                  <td>{phone || '-'}</td>
                  <td>{getSimpleList(canLearn)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className={styles.btnSection}>
        <button
          onClick={handleFormOpen}
          className={styles.btnAdd}
        >
          Add teacher
        </button>
      </div>
      {
        isModalOpen && <TeacherForm handleFormOpen={handleFormOpen} />
      }
    </>
  )
}

export default TeacherTable
