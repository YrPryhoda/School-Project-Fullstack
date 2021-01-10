import React from 'react'
import { getSimpleList } from '../../helpers';
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

const LessonTable = ({ lessons }) => {

  const getTeachers = (teachers) => {
    if (!teachers || !teachers.length) {
      return '-'
    }

    return teachers.map(person => (
      <NavLink
        key={person.id}
        to={`/teacher/${person.id}`}
        className={styles.link}
      >
        <div>
          {`${person.firstName} ${person.lastName}`}
        </div>
      </NavLink>
    ))
  }

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>№</th>
          <th>Title</th>
          <th>Lesson type</th>
          <th>How long</th>
          <th>Classrooms</th>
          <th>Teachers</th>
        </tr>
      </thead>
      <tbody>
        {
          lessons.map((lesson, index) => {
            const { id, title, type, duration, room, teacher } = lesson;

            return (
              <tr key={id} >
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{type || '-'}</td>
                <td>{duration ? `${duration} min` : '-'}</td>
                <td>{getSimpleList(room, 'roomNumber')}</td>
                <td>{getTeachers(teacher)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default LessonTable
