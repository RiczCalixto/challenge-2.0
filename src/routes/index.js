import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../pages/List';
import Details from '../pages/Details';

const AppRouter = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/details/:name" component={Details} />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
