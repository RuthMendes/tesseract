import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InfoPage from '../Pages/InfoPage';
import HomePage from '../Pages/HomePage'


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route>
          <Route exact path="/info" />
          <InfoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;