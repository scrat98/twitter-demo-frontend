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
  getCommonFollowers,
  getUserInfoById,
  getUserMediaPreview,
  getUserTweets,
  getUserFollowers,
  getUserFollowing,
  getSuggestedUsers,
  getTrends,
} from './api';

const MainContentWrapper = styled.div`
  background: #e6ecf0;
  padding-top: 0.5rem;
`;

export default class Profile extends React.Component {
  state = {
    profileData: null,
    status: undefined,
    loading: true,
  };

  componentDidMount() {
    const { userId } = this.props.match.params;
    this.loadAsyncProfileData(userId);
  }

  componentDidUpdate(prevProps) {
    const { userId } = this.props.match.params;
    const { userId: prevUserId } = prevProps.match.params;
    if (userId !== prevUserId) {
      this.loadAsyncProfileData(userId);
    }
  }

  loadAsyncProfileData(userId) {
    this.setState({
      loading: true,
    });

    Promise.all([
      getUserInfoById(userId),
      getUserMediaPreview(userId),
      getUserTweets(userId),
      getUserFollowers(userId),
      getUserFollowing(userId),
      getCommonFollowers(userId),
      getSuggestedUsers(userId),
      getTrends(),
    ])
      .then(data => {
        const profileData = {
          userInfo: data[0],
          media: data[1],
          tweets: data[2],
          userFollowers: data[3],
          userFollowing: data[4],
          commonFollowers: data[5],
          suggestedUsers: data[6],
          trends: data[7],
        };
        this.setState({
          profileData,
          status: 200,
          loading: false,
        });
      })
      .catch(status => {
        this.setState({
          profileData: null,
          status,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    if (!this.state.profileData)
      return <h1>{`Error! Status ${this.state.status}`}</h1>;

    const {
      userInfo,
      commonFollowers,
      media,
      tweets,
      suggestedUsers,
      trends,
    } = this.state.profileData;
    if (userInfo.error) return <Page404 />;

    return (
      <React.Fragment>
        <Helmet>
          <title>{`${userInfo.name} (@${userInfo.username})`}</title>
        </Helmet>
        <Header
          userId={userInfo.id}
          avatar={userInfo.avatar}
          background={userInfo.background}
          tweets={userInfo.tweetsCount}
          following={userInfo.followingCount}
          followers={userInfo.followersCount}
          likes={userInfo.likes}
          lists={userInfo.lists}
        />
        <MainContentWrapper>
          <Grid>
            <Row>
              <Col xs={3}>
                <Info
                  name={userInfo.name}
                  official={!userInfo.bot}
                  username={userInfo.username}
                  about={userInfo.about}
                  ownUrl={userInfo.url}
                  joined={userInfo.joined}
                />
                <CommonFollowers userId={userInfo.id} data={commonFollowers} />
                <Media userId={userInfo.id} data={media} />
              </Col>
              <Col xs={6}>
                <Route
                  exact
                  path={`/${userInfo.id}/(tweets|with_replies|media)?`}
                  render={() => (
                    <React.Fragment>
                      <TweetsNavigation userId={userInfo.id} />
                      <Switch>
                        <Route
                          exact
                          path={`/${userInfo.id}/(tweets)?`}
                          render={() => <Tweets data={tweets} />}
                        />
                        <Route
                          exact
                          path={`/${userInfo.id}/with_replies`}
                          render={() => <h1>With replies</h1>}
                        />
                        <Route
                          exact
                          path={`/${userInfo.id}/media`}
                          render={() => <h1>Media</h1>}
                        />
                      </Switch>
                    </React.Fragment>
                  )}
                />
                <Route
                  exact
                  path={`/${userInfo.id}/following`}
                  render={() => <h1>Following</h1>}
                />
                <Route
                  exact
                  path={`/${userInfo.id}/followers`}
                  render={() => <h1>Followers</h1>}
                />
                <Route
                  exact
                  path={`/${userInfo.id}/likes`}
                  render={() => <h1>Likes</h1>}
                />
                <Route
                  exact
                  path={`/${userInfo.id}/lists`}
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
  }
}
