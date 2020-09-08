import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/test" exact component={Dashboard} />
    <Route path="/" component={Detail} />
  </Switch>
);

export default Routes;
