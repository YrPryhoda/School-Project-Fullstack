import React from 'react'
import {getSimpleList} from '../../helpers';

import styles from './styles.module.scss'

const LessonTable = ({ lessons }) => {

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
            console.log(room, teacher);
            return (
              <tr
                key={id}
                className={styles.userRow}
              >
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{type || '-'}</td>
                <td>{duration ? `${duration} min` : '-'}</td>
                <td>{getSimpleList(room)}</td>
            

              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default LessonTable
