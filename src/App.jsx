import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './Profile';
import Header from './Header';

const Content = styled.main`
  padding-top: 3.4rem;
`;

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Content>
        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={Profile} />
        </Switch>
      </Content>
    </React.Fragment>
  </BrowserRouter>
);
