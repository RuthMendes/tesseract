import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import InfoPage from '../Pages/InfoPage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/info/:username"
          exact
          component={InfoPage}
        />
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;