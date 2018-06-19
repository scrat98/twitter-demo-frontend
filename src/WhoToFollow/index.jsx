import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Recommendations from './Recommendations';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export default () => (
  <Wrapper>
    <Header />
    <Recommendations />
    <Footer />
  </Wrapper>
);
