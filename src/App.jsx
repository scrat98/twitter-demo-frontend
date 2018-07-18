import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './Profile';
import Header from './Header';
import Page404 from './Page404';

const Content = styled.main`
  padding-top: 3.3rem;
`;

const Stub = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>{location.pathname}</title>
    </Helmet>
    <h1>This is {`${location.pathname}${location.search}`}</h1>
  </React.Fragment>
);

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Content>
        <Switch>
          <Redirect exact from="/" to="/1" />
          <Route exact path="/moments" component={Stub} />
          <Route exact path="/notifications" component={Stub} />
          <Route exact path="/messages" component={Stub} />
          <Route exact path="/about" component={Stub} />
          <Route exact path="/support" component={Stub} />
          <Route exact path="/terms" component={Stub} />
          <Route exact path="/privacy" component={Stub} />
          <Route exact path="/cookies" component={Stub} />
          <Route exact path="/advertisement" component={Stub} />
          <Route exact path="/who_to_follow/suggestions" component={Stub} />
          <Route exact path="/who_to_follow/import" component={Stub} />
          <Route exact path="/search" component={Stub} />
          <Route path="/:userId" component={Profile} />
          <Route component={Page404} />
        </Switch>
      </Content>
    </React.Fragment>
  </BrowserRouter>
);
