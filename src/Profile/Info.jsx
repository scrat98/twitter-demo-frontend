import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

import officialIcon from './icons/official.svg';
import joinedIcon from './icons/joined.svg';
import linkIcon from './icons/link.svg';
import locationIcon from './icons/location.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  display: flex;
  align-items: center;
  margin: 2rem 0 0.5rem 0;
  font-size: 1.4rem;
  color: #14171a;
  font-weight: bold;

  &:after {
    content: url(${props => (props.official ? officialIcon : '')});
    width: 20px;
    height: 20px;
    margin-left: 0.2rem;
  }
`;

const NickName = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #697787;
  font-size: 0.85rem;
  font-weight: normal;
`;

const Followed = styled.span`
  margin-left: 0.5rem;
  color: #697787;
  font-size: 0.75rem;
  font-weight: normal;
`;

const About = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
  color: #14171a;
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #697787;

  &:before {
    background: url(${locationIcon}) no-repeat center center;
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }
`;

const OwnUrl = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #1da1f2;
  text-decoration: none;

  &:before {
    background: url(${linkIcon}) no-repeat center center;
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }
`;

const Joined = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #697787;

  &:before {
    background: url(${joinedIcon}) no-repeat center center;
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export default ({
  name,
  official,
  nickName,
  followed,
  about,
  location,
  ownUrl,
  joined,
}) => (
  <Wrapper>
    <Name official={official}>{name}</Name>
    <NickName>
      <span>@{nickName}</span>
      {followed && <Followed>Follows you</Followed>}
    </NickName>
    <About>{about}</About>
    <Location>{location}</Location>
    <OwnUrl href={ownUrl}>{ownUrl.replace(/(^\w+:|^)\/\//, '')}</OwnUrl>
    <Joined>Joined {joined}</Joined>
    <Actions>
      <Button>Tweet to</Button>
      <Button>Message</Button>
    </Actions>
  </Wrapper>
);
