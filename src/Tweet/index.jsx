import React from 'react';
import styled from 'styled-components';

import commentIcon from './icons/comments.svg';
import envelopeIcon from './icons/envelope.svg';
import likesIcon from './icons/loves.svg';
import retweetIcon from './icons/retweet.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  border-bottom: 1px solid #e6ecf0;
  background-color: #fff;
`;

const Context = styled.span`
  position: relative;
  font-size: 0.75rem;
  color: #707e88;
  margin-bottom: 0.5rem;

  &:before {
    content: url(${props => props.img});
    position: absolute;
    left: -20px;
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
`;

const UserFullName = styled.span`
  font-size: 1rem;
  color: #14171a;
  font-weight: bold;
  margin-right: 0.2rem;
`;

const UserNickName = styled.span`
  font-size: 0.75rem;
  color: #697787;
  font-weight: bold;
  margin-right: 0.2rem;
`;

const TweetTime = styled.span`
  font-size: 0.75rem;
  color: #697787;
  font-weight: bold;
  margin-right: 0.2rem;
`;

const TweetText = styled.p``;

const TweetImg = styled.img`
  width: 100%;
  height: auto;
`;

const ActionsList = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0;
  list-style: none;
  margin: 1rem 0 0 0;
`;

const Action = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

const ActionCount = styled.span`
  font-size: 0.75rem;
  color: #697787;
  font-weight: bold;
  margin-left: 0.2rem;
`;

export default ({
  context,
  contextImg,
  userFullName,
  userNickName,
  time,
  text,
  img,
  replies,
  retweets,
  likes,
}) => (
  <Wrapper>
    <Context img={contextImg}>{context}</Context>
    <Content>
      <ContentHeader>
        <UserFullName>{userFullName}</UserFullName>
        <UserNickName>@{userNickName}</UserNickName>
        <TweetTime>• {time}</TweetTime>
      </ContentHeader>
      <TweetText>{text}</TweetText>
      <TweetImg src={img} />
    </Content>
    <ActionsList>
      <Action>
        <img src={commentIcon} alt="replies" />
        <ActionCount>{replies}</ActionCount>
      </Action>
      <Action>
        <img src={retweetIcon} alt="retweet" />
        <ActionCount>{retweets}</ActionCount>
      </Action>
      <Action>
        <img src={likesIcon} alt="likes" />
        <ActionCount>{likes}</ActionCount>
      </Action>
      <Action>
        <img src={envelopeIcon} alt="message" />
      </Action>
    </ActionsList>
  </Wrapper>
);
