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
            <Info
              name="Every Interaction"
              official
              nickName="EveryInteraction"
              followed
              about="UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing."
              location="London, UK"
              ownUrl="https://everyinteraction.com"
              joined="May 2008"
            />
          </Col>
          <Col xs={6}>
            <Tweets />
          </Col>
        </Row>
      </Grid>
    </MainContentWrapper>
  </React.Fragment>
);
