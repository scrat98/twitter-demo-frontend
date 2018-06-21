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
    description: '12.1K Tweets',
  },
  {
    caption: '#FridayFeeling',
    description: '12.1K Tweets',
  },
  {
    caption: '#BrexitAnniversary',
    description: 'It’s one year since the UK voted to leave the European Union',
  },
  {
    caption: 'HMS Queen Elizabeth',
    description: '1,036 Tweets',
  },
  {
    caption: 'Joe Budden',
    description: '1,036 Tweets',
  },
  {
    caption: 'Trident',
    description: '6,136 Tweets',
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
      <Trend caption={trend.caption} description={trend.description} />
    ))}
  </Wrapper>
);
