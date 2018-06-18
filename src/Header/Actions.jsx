import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import Search from '../UI/Search';
import avatar from '../Profile/avatar.png';

const List = styled.ul`
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
  margin: 0.5rem;
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
  width: 32px;
  height: auto;
`;

export default () => (
  <List>
    <Action>
      <Search />
    </Action>
    <Action>
      <UserSettingsDropdown>
        <UserAvatarImg src={avatar} alt="avatar" />
      </UserSettingsDropdown>
    </Action>
    <Action>
      <Button>Tweet</Button>
    </Action>
  </List>
);
