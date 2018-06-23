import React from 'react';
import styled from 'styled-components';
import numbro from 'numbro';
import { Link } from 'react-router-dom';

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

class Trend extends React.Component {
  getFormattedTweets(tweets) {
    const shortNumberFormat = {
      thousandSeparated: true,
    };

    const longNumberFormat = {
      average: true,
      thousandSeparated: true,
      mantissa: 1,
      trimMantissa: true,
    };

    if (tweets < 10000) {
      return numbro(tweets)
        .format(shortNumberFormat)
        .toUpperCase();
    }

    return numbro(tweets)
      .format(longNumberFormat)
      .toUpperCase();
  }

  render() {
    const { caption, description, tweets } = this.props;
    const formattedTweets = this.getFormattedTweets(tweets);

    return (
      <TrendLink to={`/search?q=${caption}`}>
        <Caption>{caption}</Caption>
        {description && <Description>{description}</Description>}
        {tweets && <Tweets>{formattedTweets} Tweets</Tweets>}
      </TrendLink>
    );
  }
}

export default Trend;
