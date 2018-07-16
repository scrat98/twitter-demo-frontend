import React from 'react';
import styled from 'styled-components';
import Recommendation from './Recommendation';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 0 1rem 0;
  list-style: none;
`;

const RecommendWrapper = styled.li`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
  padding: 1rem 0;
`;

export default ({ data }) => (
  <List>
    {data.map(user => (
      <RecommendWrapper>
        <Recommendation {...user} />
      </RecommendWrapper>
    ))}
  </List>
);
