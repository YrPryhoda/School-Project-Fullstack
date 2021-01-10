import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main';
import Header from '../../components/Header';
import TeacherPage from '../TeacherPage';
import styles from './styles.module.scss';

const Routes = () => {
  return <div className={styles.page}>
    <Switch>
      <Header>
        <Route path='/teacher/:id' component={TeacherPage} />
        <Route path='*' component={Main} />
      </Header>
    </Switch>
  </div>
}

export default Routes
