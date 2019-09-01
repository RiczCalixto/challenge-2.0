import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../pages/List';

const AppRouter = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
