import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FollowButton from '../UI/FollowButton';

import officialIcon from '../Profile/icons/official.svg';
import closeIcon from './icons/close.svg';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 4rem;
  padding-right: 0.5rem;
  position: relative;
`;

const Avatar = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.span`
  font-size: 0.8rem;
  color: #14171a;
  font-weight: bold;
  white-space: nowrap;
`;

const NickName = styled.span`
  font-size: 0.8rem;
  color: #707e88;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.2rem;
`;

const OfficialImage = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 0.2rem;
`;

const AccountLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: #14171a;
  cursor: pointer;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    ${Name} {
      color: #1da1f2;
      text-decoration: underline;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
`;

export default ({ avatar, name, official, nickName }) => (
  <Wrapper>
    <AccountLink to={`/${nickName}`}>
      <Avatar src={avatar} alt="avatar" />
      <Name official={official}>{name}</Name>
      {official && <OfficialImage src={officialIcon} alt="official" />}
      <NickName>@{nickName}</NickName>
    </AccountLink>
    <FollowButton small />
    <CloseButton>
      <img src={closeIcon} alt="close recommend" />
    </CloseButton>
  </Wrapper>
);
