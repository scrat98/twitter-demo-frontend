import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './Profile';
import Header from './Header';

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

const ErrorPage = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>Error 404</title>
    </Helmet>
    <h1>
      Error occurred during load the page{' '}
      {`${location.pathname}${location.search}`}
    </h1>
  </React.Fragment>
);

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Content>
        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
          <Route exact path="/moments" component={Stub} />
          <Route exact path="/notifications" component={Stub} />
          <Route exact path="/messages" component={Stub} />
          <Route exact path="/about" component={Stub} />
          <Route exact path="/support" component={Stub} />
          <Route exact path="/terms" component={Stub} />
          <Route exact path="/privacy" component={Stub} />
          <Route exact path="/cookies" component={Stub} />
          <Route exact path="/advertisement" component={Stub} />
          <Route exact path="/search" component={Stub} />
          <Route path="/:userId" component={Profile} />
          <Route component={ErrorPage} />
        </Switch>
      </Content>
    </React.Fragment>
  </BrowserRouter>
);
