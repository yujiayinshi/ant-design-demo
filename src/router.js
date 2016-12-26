import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import IndexPage from './routes/Dashboard';
import Posts from './routes/Posts';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRedirect to="/dashboard" />
        <Route path="dashboard" component={Dashboard} />
        <Route path="/posts" component={Posts} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
