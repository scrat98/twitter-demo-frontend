import React from 'react';
import { Route } from 'react-router-dom';
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

import users from '../data/users';
import commonFollowers from '../data/commonFollowers';
import media from '../data/media';
import tweets from '../data/tweets';
import suggestedUsers from '../data/suggestedUsers';
import trends from '../data/trends';

const MainContentWrapper = styled.div`
  background: #e6ecf0;
  padding-top: 0.5rem;
`;

export default ({ match }) => {
  const { userId } = match.params;
  const userInfo = users.filter(user => user.id === userId)[0];
  return (
    <React.Fragment>
      <Helmet>
        <title>{`${userInfo.name} (@${userInfo.id})`}</title>
      </Helmet>
      <Header {...userInfo} />
      <MainContentWrapper>
        <Grid>
          <Row>
            <Col xs={3}>
              <Info {...userInfo} />
              <CommonFollowers userId={userId} data={commonFollowers} />
              <Media userId={userId} data={media} />
            </Col>
            <Col xs={6}>
              <Route
                exact
                path={`/${userId}`}
                render={props => (
                  <Tweets {...props} userId={userId} tweetsData={tweets} />
                )}
              />
              <Route
                exact
                path={`/${userId}/following`}
                render={() => <h1>Following</h1>}
              />
              <Route
                exact
                path={`/${userId}/followers`}
                render={() => <h1>Followers</h1>}
              />
              <Route
                exact
                path={`/${userId}/likes`}
                render={() => <h1>Likes</h1>}
              />
              <Route
                exact
                path={`/${userId}/lists`}
                render={() => <h1>Lists</h1>}
              />
            </Col>
            <Col xs={3}>
              <WhoToFollow data={suggestedUsers} />
              <Trends data={trends} header="United Kingdom Trends" />
              <Footer />
            </Col>
          </Row>
        </Grid>
      </MainContentWrapper>
    </React.Fragment>
  );
};
