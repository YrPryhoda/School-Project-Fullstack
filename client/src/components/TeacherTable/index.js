import React, { useState } from 'react'
import { getSimpleList } from '../../helpers';
import styles from './styles.module.scss';
import TeacherForm from '../TeacherForm';
import { useDispatch } from 'react-redux';
import { deleteTeacherWatcher } from '../../ducks/main';
import { NavLink } from 'react-router-dom';
import FilterBar from '../FilterBar';

const TeacherTable = ({
  teachers,
  handleFormOpen,
  isModalOpen
}) => {
  const dispatch = useDispatch();
  const [chosedTeacher, setChosedTeacher] = useState({});

  const handleDeleteTeacher = id => {
    dispatch(deleteTeacherWatcher(id))
  }

  const handleEditTeacher = id => {
    const teacher = teachers.find(person => person.id === id);
    setChosedTeacher(teacher);
    handleFormOpen()
  }

  const onFormClose = () => {
    setChosedTeacher();
    handleFormOpen();
  }

  return (
    <>
      <FilterBar />
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subjects</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            teachers.map((teacher, index) => {
              const { id, firstName, lastName, sex, age, yearsofExperience, email, tel, canLearn } = teacher;

              return (
                <tr
                  key={id}
                  className={styles.userRow}
                >
                  <td>{index + 1}</td>
                  <td>
                    <NavLink to={`/teacher/${id}`}>
                      {`${firstName} ${lastName}`}
                    </NavLink>
                  </td>
                  <td>{sex}</td>
                  <td>{age || '-'}</td>
                  <td>
                    {
                      yearsofExperience ?
                        `${yearsofExperience} year(s)` :
                        '-'
                    }
                  </td>
                  <td>{email || '-'}</td>
                  <td>{tel || '-'}</td>
                  <td>{getSimpleList(canLearn)}</td>
                  <td>
                    <button
                      className={styles.btnSmall}
                      onClick={() => handleEditTeacher(id)}
                    >
                      Edit
                    </button>
                    <button
                      className={`${styles.btnSmall} ${styles.btnDelete}`}
                      onClick={() => handleDeleteTeacher(id)}
                    >
                      Delete
                      </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className={styles.btnSection}>
        <button
          onClick={onFormClose}
          className={styles.btnAdd}
        >
          Add teacher
        </button>
      </div>
      {
        isModalOpen && <TeacherForm
          person={chosedTeacher}
          handleFormOpen={onFormClose}
        />
      }
    </>
  )
}

export default TeacherTable
