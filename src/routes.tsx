import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from 'src/pages/Dashboard';
import Detail from 'src/pages/Detail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/:name" component={Detail} />
  </Switch>
);

export default Routes;
