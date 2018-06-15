import React from 'react';
import styled from 'styled-components';
import Tweet from '../Tweet';

import pinned from '../Tweet/icons/pinned.svg';
import tweet1 from './tweet1.png';
import tweet3 from './tweet3.png';

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

export default () => (
  <TweetsList>
    <TweetWrapper>
      <Tweet
        context="Pinned Tweet"
        contextImg={pinned}
        userFullName="Every Interaction"
        userNickName="EveryInteract"
        time="2 Mar 2015"
        text="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
        img={tweet1}
        replies={0}
        retweets={17}
        likes={47}
      />
    </TweetWrapper>

    <TweetWrapper>
      <Tweet
        userFullName="Every Interaction"
        userNickName="EveryInteract"
        time="23h"
        text="Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
        replies={1}
        retweets={4}
        likes={2}
      />
    </TweetWrapper>

    <TweetWrapper>
      <Tweet
        userFullName="Every Interaction"
        userNickName="EveryInteract"
        time="Nov 18"
        text="Variable web fonts are coming, and will open a world of opportunities for weight use online"
        img={tweet3}
      />
    </TweetWrapper>
  </TweetsList>
);
