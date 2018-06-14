import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import Search from '../UI/Search';
import avatar from '../Profile/avatar.png';
import twitterLogo from './icons/twitterLogo.svg';
import home from './icons/home.svg';
import messages from './icons/messages.svg';
import notifications from './icons/notifications.svg';
import moments from './icons/moments.svg';

const Header = styled.header`
  position: fixed;
  background: #fff;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationList = styled.ul`
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

const NavigationLink = styled(NavLink)`
  margin-bottom: -1px;
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667580;
  font-weight: bold;
  font-size: 0.85rem;
  border-bottom: 2px solid transparent;
  border-color: ${props =>
    props.activeClassName === 'active' ? '#1da1f2' : 'transparent'};
  text-decoration: none;

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

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;

const ActionsList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Action = styled.li`
  display: flex;
  margin: 0.5rem 1.25rem 0.5rem 0;
`;

const UserSettingsDropdown = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease-in-out;
  border-radius: 50%;
  overflow: hidden;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ffffff, 0 0 2px 4px rgba(29, 161, 242, 0.4);
  }
`;

const UserAvatarImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export default () => (
  <Header>
    <Grid>
      <Wrapper>
        <NavigationList>
          <Navigation>
            <NavigationLink img={home} exact to="/">
              Home
            </NavigationLink>
          </Navigation>
          <Navigation>
            <NavigationLink img={moments} exact to="/moments">
              Moments
            </NavigationLink>
          </Navigation>
          <Navigation>
            <NavigationLink img={notifications} exact to="/notifications">
              Notifications
            </NavigationLink>
          </Navigation>
          <Navigation>
            <NavigationLink img={messages} exact to="/messages">
              Messages
            </NavigationLink>
          </Navigation>
        </NavigationList>
        <LogoWrapper to="/">
          <img src={twitterLogo} alt="twitter logo" />
        </LogoWrapper>
        <ActionsList>
          <Action>
            <Search />
          </Action>
          <Action>
            <UserSettingsDropdown>
              <UserAvatarImg src={avatar} />
            </UserSettingsDropdown>
          </Action>
          <Action>
            <Button>Tweet</Button>
          </Action>
        </ActionsList>
      </Wrapper>
    </Grid>
  </Header>
);
