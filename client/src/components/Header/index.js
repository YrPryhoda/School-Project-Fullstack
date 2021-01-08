import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link to='/'>Main page</Link>
        <Link to='/teachers'>Teachers page</Link>
        <Link to='/lessons'>Lessons page</Link>
      </div>
      {children}
    </>
  )
}

export default Header
