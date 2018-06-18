import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export default () => (
  <List>
    <Statistic>
      <Link exact to="/EveryInteract">
        <Name>Tweets</Name>
        <Value>8,058</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to="/EveryInteract/following">
        <Name>Following</Name>
        <Value>721</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to="/EveryInteract/followers">
        <Name>Followers</Name>
        <Value>1,815</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to="/EveryInteract/likes">
        <Name>Likes</Name>
        <Value>460</Value>
      </Link>
    </Statistic>
    <Statistic>
      <Link exact to="/EveryInteract/lists">
        <Name>Lists</Name>
        <Value>2</Value>
      </Link>
    </Statistic>
  </List>
);
