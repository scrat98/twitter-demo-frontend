import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import followersIcon from './icons/followers.svg';

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

export default ({ userId, data }) => (
  <Wrapper>
    <AllFollowersLink to={`/${userId}/followers`}>
      {`${data.length} Followers you know`}
    </AllFollowersLink>
    <List>
      {data.map(follower => (
        <FollowerWrapper>
          <Follower src={follower} />
        </FollowerWrapper>
      ))}
    </List>
  </Wrapper>
);
