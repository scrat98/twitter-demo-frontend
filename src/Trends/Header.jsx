import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

const DotSeparator = styled.small`
  margin: 0 0.25rem;
  color: #718290;

  &:after {
    content: '•';
  }
`;

const Caption = styled.h3`
  color: #14171a;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

const ChangeBtn = styled.button`
  text-align: center;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #1da1f2;
  font-size: 0.75rem;
  padding: 0;
  margin: 0;

  &:focus {
    outline: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ head }) => (
  <Wrapper>
    <Caption>{head}</Caption>
    <DotSeparator />
    <ChangeBtn>Change</ChangeBtn>
  </Wrapper>
);
