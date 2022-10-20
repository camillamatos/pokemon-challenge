import React from 'react';
import { Routes as RDRoutes, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

function Routes() {
  return (
    <BrowserRouter>
      <RDRoutes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:name" element={<Detail />} />
      </RDRoutes>
    </BrowserRouter>
  );
}

export default Routes;
