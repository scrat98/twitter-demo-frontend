import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { getFormattedTweets } from '../utils';

const Caption = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #1da1f2;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
  color: #14171a;
`;

const Tweets = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: #697787;
`;

const TrendLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-bottom: 1rem;

  &:hover {
    ${Caption} {
      text-decoration: underline;
    }
  }
`;

export default ({ caption, description, tweets }) => {
  const formattedTweets = getFormattedTweets(tweets);
  const searchParams = {
    q: caption,
  };
  const searchQuery = queryString.stringify(searchParams);

  return (
    <TrendLink to={`/search?${searchQuery}`}>
      <Caption>{caption}</Caption>
      {description && <Description>{description}</Description>}
      {tweets && <Tweets>{formattedTweets} Tweets</Tweets>}
    </TrendLink>
  );
};
