import React from 'react';
import styled from 'styled-components';

import commentIcon from './icons/comments.svg';
import envelopeIcon from './icons/envelope.svg';
import likesIcon from './icons/loves.svg';
import retweetIcon from './icons/retweet.svg';
import pinnedIcon from './icons/pinned.svg';

import { getFormattedDate, getFormattedNumber } from '../utils';

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
  height: auto;
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
  pinned,
  userFullName,
  userNickName,
  userAvatar,
  time,
  content,
  media,
  replies,
  retweets,
  likes,
}) => (
  <Wrapper>
    {pinned && <Context img={pinnedIcon}>Pinned Tweet</Context>}
    <Content>
      <ContentHeader>
        <UserFullName>{userFullName}</UserFullName>
        <UserNickName>@{userNickName}</UserNickName>
        <TweetTime>• {getFormattedDate(time, 'DD MMMM YYYY')}</TweetTime>
        <UserAvatar src={userAvatar} />
      </ContentHeader>
      {content && <TweetText dangerouslySetInnerHTML={{ __html: content }} />}
      {media.length > 0 &&
        media.map(attachment => <TweetImg src={attachment.preview_url} />)}
    </Content>
    <ActionsList>
      <Action>
        <img src={commentIcon} alt="replies" />
        <ActionCount>{replies > 0 && getFormattedNumber(replies)}</ActionCount>
      </Action>
      <Action>
        <img src={retweetIcon} alt="retweet" />
        <ActionCount>
          {retweets > 0 && getFormattedNumber(retweets)}
        </ActionCount>
      </Action>
      <Action>
        <img src={likesIcon} alt="likes" />
        <ActionCount>{likes > 0 && getFormattedNumber(likes)}</ActionCount>
      </Action>
      <Action>
        <img src={envelopeIcon} alt="message" />
      </Action>
    </ActionsList>
  </Wrapper>
);
