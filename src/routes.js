import React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';

export default (
  <Route>
    <Route path="login" component={LoginPage} />
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="form" component={FormPage} />
      <Route path="table" component={TablePage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);
