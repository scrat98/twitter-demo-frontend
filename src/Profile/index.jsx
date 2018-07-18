import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Header from './Header';
import Info from './Info';
import Tweets from './Tweets';
import Footer from '../Footer';
import WhoToFollow from '../WhoToFollow';
import Trends from '../Trends';
import CommonFollowers from './CommonFollowers';
import Media from './Media';

const MainContentWrapper = styled.div`
  background: #e6ecf0;
  padding-top: 0.5rem;
`;

export default () => (
  <React.Fragment>
    <Helmet>
      <title>EveryInteract (@EveryInteract)</title>
    </Helmet>
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
            <CommonFollowers />
            <Media />
          </Col>
          <Col xs={6}>
            <Tweets />
          </Col>
          <Col xs={3}>
            <WhoToFollow />
            <Trends />
            <Footer />
          </Col>
        </Row>
      </Grid>
    </MainContentWrapper>
  </React.Fragment>
);
