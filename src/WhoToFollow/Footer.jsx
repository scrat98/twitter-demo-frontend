import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import peopleIcon from './icons/people.svg';

const FindPeopleLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 0.85rem;
  margin: 0;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    background: url(${peopleIcon}) no-repeat center center;
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <FindPeopleLink to="/who_to_follow/import">
    Find people you know
  </FindPeopleLink>
);
