import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import official from './icons/official.svg';
import joined from './icons/joined.svg';
import link from './icons/link.svg';
import location from './icons/location.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  display: flex;
  align-items: center;
  margin: 2rem 0 0.5rem 0;
  font-size: 1.4rem;
  color: #14171a;
  font-weight: bold;

  &:after {
    content: url(${props => (props.official ? official : '')});
    width: 20px;
    height: 20px;
    margin-left: 0.2rem;
  }
`;

const NickName = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #697787;
  font-size: 0.75rem;
  font-weight: normal;

  &:after {
    content: ${props => (props.followed ? 'Follows you' : '')};
  }
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
    background: url(${location}) no-repeat center center;
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
    background: url(${link}) no-repeat center center;
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
    background: url(${joined}) no-repeat center center;
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
    <NickName followed={followed}>@{nickName} Follows you</NickName>
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
