import React from 'react';
import styled from 'styled-components';
import Tweet from './Tweet';

const TweetsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const TweetWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default ({ data }) => (
  <TweetsList>
    {data.map(tweet => (
      <TweetWrapper>
        <Tweet {...tweet} />
      </TweetWrapper>
    ))}
  </TweetsList>
);
