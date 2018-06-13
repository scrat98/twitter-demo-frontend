import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './Profile';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/EveryInteract" />
      <Route path="/EveryInteract" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default App;
