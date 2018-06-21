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

export default () => (
  <React.Fragment>
    <Header />
    {trends.map(trend => <Trend />)}
  </React.Fragment>
);
