import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Footer = styled.footer`
  display: flex;
  margin: 1rem 0;
  padding: 0 1rem;
`;

export default () => (
  <Footer>
    <Navigation />
  </Footer>
);
