import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Header from './Header';
import Info from './Info';
import Tweets from './Tweets';

const MainContentWrapper = styled.div`
  background: #e6ecf0;
  padding-top: 1rem;
`;

export default () => (
  <React.Fragment>
    <Header />
    <MainContentWrapper>
      <Grid>
        <Row>
          <Col xs={3}>
            <Info />
          </Col>
          <Col xs={6}>
            <Tweets />
          </Col>
        </Row>
      </Grid>
    </MainContentWrapper>
  </React.Fragment>
);
