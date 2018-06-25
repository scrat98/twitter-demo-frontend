import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Trend from './Trend';

const trends = [
  {
    caption: '#BringYourDogToWorkDay',
  },
  {
    caption: '#FridayFeeling',
    tweets: 12100,
  },
  {
    caption: '#FridayFeeling',
    tweets: 12100,
  },
  {
    caption: '#BrexitAnniversary',
    description: 'It’s one year since the UK voted to leave the European Union',
    tweets: 56700,
  },
  {
    caption: 'HMS Queen Elizabeth',
    tweets: 1036,
  },
  {
    caption: 'Joe Budden',
    tweets: 1036,
  },
  {
    caption: 'Trident',
    tweets: 6136,
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border: 1px solid #e6ecf0;
  padding: 1rem;
`;

export default () => (
  <Wrapper>
    <Header head="United Kingdom Trends" />
    {trends.map(trend => (
      <Trend
        caption={trend.caption}
        description={trend.description}
        tweets={trend.tweets}
      />
    ))}
  </Wrapper>
);
