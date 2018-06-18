import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import homeIcon from './icons/home.svg';
import messagesIcon from './icons/messages.svg';
import notificationsIcon from './icons/notifications.svg';
import momentsIcon from './icons/moments.svg';

const List = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled(NavLink)`
  margin-bottom: -1px;
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667580;
  font-weight: bold;
  font-size: 0.85rem;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  &.active {
    border-color: #1da1f2;
  }

  &:hover {
    border-color: #1da1f2;
    transition: all 0.15s ease-in-out;
  }

  &:before {
    background: url(${props => props.img}) no-repeat center center;
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }
`;

export default () => (
  <List>
    <Navigation>
      <Link img={homeIcon} exact to="/">
        Home
      </Link>
    </Navigation>
    <Navigation>
      <Link img={momentsIcon} exact to="/moments">
        Moments
      </Link>
    </Navigation>
    <Navigation>
      <Link img={notificationsIcon} exact to="/notifications">
        Notifications
      </Link>
    </Navigation>
    <Navigation>
      <Link img={messagesIcon} exact to="/messages">
        Messages
      </Link>
    </Navigation>
  </List>
);
