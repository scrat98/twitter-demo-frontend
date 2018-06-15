import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FollowButton from '../UI/FollowButton';
import background from './background.png';
import avatar from './avatar.png';
import moreActions from './icons/moreActions.svg';

const Background = styled.img`
  display: block;
  width: 100%;
  height: 380px;
  object-fit: cover;
  object-position: top;
`;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const AvatarWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -30px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: #fff;
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const StatisticList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Statistic = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatisticLink = styled(NavLink)`
  margin-bottom: -1px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #667580;
  border-bottom: 3px solid transparent;
  border-color: ${props =>
    props.activeClassName === 'active' ? '#1da1f2' : 'transparent'};
  text-decoration: none;

  &:hover {
    border-color: #1da1f2;
    transition: all 0.15s ease-in-out;
  }
`;

const StatisticName = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const StatisticValue = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MoreActionsButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  margin-left: 1rem;
`;

export default () => (
  <React.Fragment>
    <Background src={background} alt="Profile Background" />
    <Navigation>
      <Grid>
        <Row middle="xs">
          <Col xs={3}>
            <AvatarWrapper>
              <Avatar src={avatar} alt="Avatar" />
            </AvatarWrapper>
          </Col>
          <Col xs={6}>
            <StatisticList>
              <Statistic>
                <StatisticLink exact to="/EveryInteract">
                  <StatisticName>Tweets</StatisticName>
                  <StatisticValue>8,058</StatisticValue>
                </StatisticLink>
              </Statistic>
              <Statistic>
                <StatisticLink exact to="/EveryInteract/following">
                  <StatisticName>Following</StatisticName>
                  <StatisticValue>721</StatisticValue>
                </StatisticLink>
              </Statistic>
              <Statistic>
                <StatisticLink exact to="/EveryInteract/followers">
                  <StatisticName>Followers</StatisticName>
                  <StatisticValue>1,815</StatisticValue>
                </StatisticLink>
              </Statistic>
              <Statistic>
                <StatisticLink exact to="/EveryInteract/likes">
                  <StatisticName>Likes</StatisticName>
                  <StatisticValue>460</StatisticValue>
                </StatisticLink>
              </Statistic>
              <Statistic>
                <StatisticLink exact to="/EveryInteract/lists">
                  <StatisticName>Lists</StatisticName>
                  <StatisticValue>2</StatisticValue>
                </StatisticLink>
              </Statistic>
            </StatisticList>
          </Col>
          <Col xs={3}>
            <ActionsWrapper>
              <FollowButton>Follow</FollowButton>
              <MoreActionsButton>
                <img src={moreActions} alt="more actions" />
              </MoreActionsButton>
            </ActionsWrapper>
          </Col>
        </Row>
      </Grid>
    </Navigation>
  </React.Fragment>
);
