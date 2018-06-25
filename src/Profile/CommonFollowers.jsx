import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import followersIcon from './icons/followers.svg';

const avatar4 = `${process.env.PUBLIC_URL}/img/avatar4.png`;
const avatar5 = `${process.env.PUBLIC_URL}/img/avatar5.png`;
const avatar6 = `${process.env.PUBLIC_URL}/img/avatar6.png`;
const avatar7 = `${process.env.PUBLIC_URL}/img/avatar7.png`;
const avatar8 = `${process.env.PUBLIC_URL}/img/avatar8.png`;
const avatar9 = `${process.env.PUBLIC_URL}/img/avatar9.png`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const AllFollowersLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:before {
    background: url(${followersIcon}) no-repeat center center;
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const FollowerWrapper = styled.li`
  display: flex;
  flex-basis: 20%;
  max-width: 20%;
  padding: 0.25rem;
`;

const Follower = styled.img`
  width: 48px;
  height: 48px;
`;

export default () => (
  <Wrapper>
    <AllFollowersLink to="/EveryInteract/followers">
      6 Followers you know
    </AllFollowersLink>
    <List>
      <FollowerWrapper>
        <Follower src={avatar4} />
      </FollowerWrapper>
      <FollowerWrapper>
        <Follower src={avatar5} />
      </FollowerWrapper>
      <FollowerWrapper>
        <Follower src={avatar6} />
      </FollowerWrapper>
      <FollowerWrapper>
        <Follower src={avatar7} />
      </FollowerWrapper>
      <FollowerWrapper>
        <Follower src={avatar8} />
      </FollowerWrapper>
      <FollowerWrapper>
        <Follower src={avatar9} />
      </FollowerWrapper>
    </List>
  </Wrapper>
);
