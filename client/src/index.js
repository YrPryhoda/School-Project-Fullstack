import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './containers/Routes';
import { Provider } from 'react-redux';
import { store } from './redux'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
