import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from './Header';

export default () => (
  <React.Fragment>
    <Header />
    <Grid>
      <Row>
        <Col xs={3}>
          <div>Info</div>
        </Col>
        <Col xs={6}>
          <div>Tweets</div>
        </Col>
        <Col xs={3}>
          <div>Right</div>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);
