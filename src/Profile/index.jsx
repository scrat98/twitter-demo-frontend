import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Header from './Header';
import Info from './Info';
import TweetsNavigation from './TweetsNavigation';
import Tweets from '../Tweets';
import Footer from '../Footer';
import WhoToFollow from '../WhoToFollow';
import Trends from '../Trends';
import CommonFollowers from './CommonFollowers';
import Media from './Media';
import Page404 from '../Page404';

import {
  isUserExist,
  getCommonFollowers,
  getUserInfoById,
  getUserMediaPreview,
  getUserTweets,
  getSuggestedUsers,
  getTrends,
} from './api';

const MainContentWrapper = styled.div`
  background: #e6ecf0;
  padding-top: 0.5rem;
`;

export default ({ match }) => {
  const { userId } = match.params;
  if (!isUserExist(userId)) return <Page404 />;

  const userInfo = getUserInfoById(userId);
  const commonFollowers = getCommonFollowers(userId);
  const media = getUserMediaPreview(userId);
  const tweets = getUserTweets(userId);

  const suggestedUsers = getSuggestedUsers();
  const trends = getTrends();

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${userInfo.name} (@${userInfo.id})`}</title>
      </Helmet>
      <Header
        userId={userInfo.id}
        avatar={userInfo.avatar}
        background={userInfo.background}
      />
      <MainContentWrapper>
        <Grid>
          <Row>
            <Col xs={3}>
              <Info {...userInfo} />
              <CommonFollowers userId={userInfo.id} data={commonFollowers} />
              <Media userId={userId} data={media} />
            </Col>
            <Col xs={6}>
              <Route
                exact
                path={`/${userId}/(tweets|with_replies|media)?`}
                render={() => (
                  <React.Fragment>
                    <TweetsNavigation userId={userId} />
                    <Switch>
                      <Route
                        exact
                        path={`/${userId}/(tweets)?`}
                        render={() => <Tweets data={tweets} />}
                      />
                      <Route
                        exact
                        path={`/${userId}/with_replies`}
                        render={() => <h1>With replies</h1>}
                      />
                      <Route
                        exact
                        path={`/${userId}/media`}
                        render={() => <h1>Media</h1>}
                      />
                    </Switch>
                  </React.Fragment>
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
