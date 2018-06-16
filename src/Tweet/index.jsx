import React from 'react';
import styled from 'styled-components';

import commentIcon from './icons/comments.svg';
import envelopeIcon from './icons/envelope.svg';
import likesIcon from './icons/loves.svg';
import retweetIcon from './icons/retweet.svg';

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  border-bottom: 1px solid #e6ecf0;
  background-color: #fff;

  &:hover {
    background-color: #f5f8fa;
  }
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
  margin-bottom: 1rem;
`;

const ContentHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const UserFullName = styled.span`
  font-size: 0.9rem;
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

const UserAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: -3.5rem;
  top: 0.1rem;
  border-radius: 50%;
`;

const TweetTime = styled.span`
  font-size: 0.75rem;
  color: #697787;
  font-weight: bold;
  margin-right: 0.2rem;
`;

const TweetText = styled.p`
  margin: 0.5rem 0 0 0;
`;

const TweetImg = styled.img`
  margin-top: 0.5rem;
  width: 100%;
  height: auto;
`;

const ActionsList = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
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
  userAvatar,
  time,
  text,
  img,
  replies,
  retweets,
  likes,
}) => (
  <Wrapper>
    {context && <Context img={contextImg}>{context}</Context>}
    <Content>
      <ContentHeader>
        <UserFullName>{userFullName}</UserFullName>
        <UserNickName>@{userNickName}</UserNickName>
        <TweetTime>• {time}</TweetTime>
        <UserAvatar src={userAvatar} />
      </ContentHeader>
      {text && <TweetText>{text}</TweetText>}
      {img && <TweetImg src={img} />}
    </Content>
    <ActionsList>
      <Action>
        <img src={commentIcon} alt="replies" />
        <ActionCount>{replies > 0 && replies}</ActionCount>
      </Action>
      <Action>
        <img src={retweetIcon} alt="retweet" />
        <ActionCount>{retweets > 0 && retweets}</ActionCount>
      </Action>
      <Action>
        <img src={likesIcon} alt="likes" />
        <ActionCount>{likes > 0 && likes}</ActionCount>
      </Action>
      <Action>
        <img src={envelopeIcon} alt="message" />
      </Action>
    </ActionsList>
  </Wrapper>
);
