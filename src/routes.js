import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Main from './components/Main';
import Login from './components/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="gastos" component={Main} />
  </Route>
);