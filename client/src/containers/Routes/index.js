import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main';
import Header from '../../components/Header';

const Routes = () => {
  return <Switch>
    <Header>
      <Route path='*' component={Main} />
    </Header>
  </Switch>
}

export default Routes
