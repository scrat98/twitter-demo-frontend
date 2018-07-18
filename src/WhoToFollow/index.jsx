import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Recommendations from './Recommendations';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border: 1px solid #e6ecf0;
  padding: 1rem;
`;

export default ({ data }) => {
  if (!data.length) return null;

  return (
    <Wrapper>
      <Header />
      <Recommendations data={data} />
      <Footer />
    </Wrapper>
  );
};
