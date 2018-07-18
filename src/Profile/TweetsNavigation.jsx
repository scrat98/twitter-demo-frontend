import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  padding: 0 1rem;
  border-bottom: 1px solid #e6ecf0;
  background-color: #fff;
  margin: 0;
  list-style: none;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

const Link = styled(NavLink)`
  padding: 0.8rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: black;
  }

  &.active:hover {
    text-decoration: none;
  }
`;

export default ({ userId }) => (
  <List>
    <Navigation>
      <Link exact to={`/${userId}`}>
        Tweets
      </Link>
    </Navigation>
    <Navigation>
      <Link exact to={`/${userId}/with_replies`}>
        Tweets & replies
      </Link>
    </Navigation>
    <Navigation>
      <Link exact to={`/${userId}/media`}>
        Media
      </Link>
    </Navigation>
  </List>
);
