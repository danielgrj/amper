import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import MapView from './components/MapView';
import RegionList from './components/RegionList';
import RegionDetail from './components/RegionDetail';
import NodeDetail from './components/NodeDetail';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MapView} />
          <Route exact path="/regions" component={RegionList} />
          <Route exact path="/regions/:id" component={RegionDetail} />
          <Route exact path="/node/:id" component={NodeDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
