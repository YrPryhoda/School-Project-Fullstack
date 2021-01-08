import React from 'react'
import image from './main.jpg';
import styles from './styles.module.scss'
const Landing = () => {
  return (
    <div className={styles.section}>
      <h1> Welcome!</h1>
      <img src={image} alt='logo' />
    </div>
  )
}

export default Landing
