import React from 'react';
import styled from 'styled-components';
import Recommendation from './Recommendation';

const avatar1 = `${process.env.PUBLIC_URL}/img/avatar1.png`;
const avatar2 = `${process.env.PUBLIC_URL}/img/avatar2.png`;
const avatar3 = `${process.env.PUBLIC_URL}/img/avatar3.png`;

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

export default () => (
  <List>
    <RecommendWrapper>
      <Recommendation
        avatar={avatar1}
        name="Apple Insider"
        nickName="appleinsider"
      />
    </RecommendWrapper>
    <RecommendWrapper>
      <Recommendation
        avatar={avatar2}
        name="Creode"
        official
        nickName="Creode"
      />
    </RecommendWrapper>
    <RecommendWrapper>
      <Recommendation
        avatar={avatar3}
        name="Epiphany Search"
        nickName="EpiphanySearch"
      />
    </RecommendWrapper>
  </List>
);
