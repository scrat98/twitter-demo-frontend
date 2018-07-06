import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { computeMatch, getFormattedNumber } from '../utils';

const List = styled.ul`
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

const Link = styled(NavLink)`
  margin-bottom: -1px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #667580;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  &.active {
    border-color: #1da1f2;
  }

  &:hover {
    border-color: #1da1f2;
    transition: all 0.15s ease-in-out;
  }
`;

const Name = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const Value = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export default ({ userId, tweets, followers, following, likes, lists }) => (
  <List>
    <Statistic>
      <Link
        exact
        to={`/${userId}`}
        isActive={(match, location) =>
          computeMatch(location.pathname, {
            path: `/${userId}/(tweets|with_replies|media)?`,
            exact: true,
          })
        }
      >
        <Name>Tweets</Name>
        <Value>{getFormattedNumber(tweets)}</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to={`/${userId}/following`}>
        <Name>Following</Name>
        <Value>{getFormattedNumber(following)}</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to={`/${userId}/followers`}>
        <Name>Followers</Name>
        <Value>{getFormattedNumber(followers)}</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to={`/${userId}/likes`}>
        <Name>Likes</Name>
        <Value>{getFormattedNumber(likes)}</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to={`/${userId}/lists`}>
        <Name>Lists</Name>
        <Value>{getFormattedNumber(lists)}</Value>
      </Link>
    </Statistic>
  </List>
);
