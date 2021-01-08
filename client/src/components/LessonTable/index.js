import React from 'react'
import styles from './styles.module.scss'

const LessonTable = ({ lessons }) => {

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>№</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {
          lessons.map((lesson, index) => {
            const { id, title } = lesson;

            return (
              <tr
                key={id}
                className={styles.userRow}
              >
                <td>{index + 1}</td>
                <td>{title}</td>

              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default LessonTable
