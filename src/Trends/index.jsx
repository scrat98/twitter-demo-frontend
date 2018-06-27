import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Trend from './Trend';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border: 1px solid #e6ecf0;
  padding: 1rem;
`;

export default ({ data, header }) => (
  <Wrapper>
    <Header head={header} />
    {data.map(trend => (
      <Trend
        caption={trend.caption}
        description={trend.description}
        tweets={trend.tweets}
      />
    ))}
  </Wrapper>
);
