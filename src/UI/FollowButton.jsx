import React from 'react';
import styled from 'styled-components';

const FollowBtn = styled.button`
  padding: ${props => (props.small ? '0.5rem 1.25rem' : '0.5rem 2rem')};
  font-size: ${props => (props.small ? '0.75rem' : '0.85rem')};
  color: #4ab3f4;
  border: 1px solid #4ab3f4;
  background-color: transparent;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: none;
  transition: box-shadow 0.15s ease-in-out;
  outline: 0;
`;

export default ({ small }) => <FollowBtn small={small}>Follow</FollowBtn>;
