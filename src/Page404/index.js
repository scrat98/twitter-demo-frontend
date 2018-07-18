import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';

const Page404 = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>Error 404</title>
    </Helmet>
    <h1>Error occurred during load the page.</h1>
    <h2>Page {`${location.pathname}${location.search}`} not found</h2>
  </React.Fragment>
);

export default withRouter(Page404);
