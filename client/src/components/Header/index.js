import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <NavLink
          exact={true}
          activeClassName={styles.activeLink}
          to='/'
        >
          Main page
          </NavLink>
        <NavLink
          activeClassName={styles.activeLink}
          to='/teachers'
        >
          Teachers page
          </NavLink>
        <NavLink
          activeClassName={styles.activeLink}
          to='/lessons'
        >
          Lessons page
          </NavLink>
      </div>
      {children}
    </>
  )
}

export default Header
