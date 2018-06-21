import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Tweet from '../Tweet';

import avatar from '../Profile/tmpImg/avatar.png';
import pinned from '../Tweet/icons/pinned.svg';
import tweet1 from './tmpImg/tweet1.png';
import tweet3 from './tmpImg/tweet3.png';

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

const NavigationList = styled.ul`
  display: flex;
  padding: 0 1rem;
  border-bottom: 1px solid #e6ecf0;
  background-color: #fff;
  margin: 0;
  list-style: none;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

const NavigationLink = styled(NavLink)`
  padding: 0.8rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: black;
  }

  &.active:hover {
    text-decoration: none;
  }
`;

export default () => (
  <React.Fragment>
    <NavigationList>
      <Navigation>
        <NavigationLink exact to="/EveryInteract">
          Tweets
        </NavigationLink>
      </Navigation>
      <Navigation>
        <NavigationLink exact to="/EveryInteract/with_replies">
          Tweets & replies
        </NavigationLink>
      </Navigation>
      <Navigation>
        <NavigationLink exact to="/EveryInteract/media">
          Media
        </NavigationLink>
      </Navigation>
    </NavigationList>
    <TweetsList>
      <TweetWrapper>
        <Tweet
          context="Pinned Tweet"
          contextImg={pinned}
          userFullName="Every Interaction"
          userNickName="EveryInteract"
          userAvatar={avatar}
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
          userAvatar={avatar}
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
          userAvatar={avatar}
          time="Nov 18"
          text="Variable web fonts are coming, and will open a world of opportunities for weight use online"
          img={tweet3}
          replies={0}
          retweets={0}
          likes={0}
        />
      </TweetWrapper>
    </TweetsList>
  </React.Fragment>
);
