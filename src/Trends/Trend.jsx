import React from 'react';
import styled from 'styled-components';
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

export default ({ caption, description }) => (
  <TrendLink to={`/search?q=${caption}`}>
    <Caption>{caption}</Caption>
    <Description>{description}</Description>
  </TrendLink>
);
