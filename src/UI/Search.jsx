import React from 'react';
import styled from 'styled-components';
import search from './icons/search.svg';

const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem 2rem 0.5rem 1rem;
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  color: #14171a;
  font-size: 0.85rem;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:focus {
    background-color: #fff;
    border: 2px solid rgba(0, 132, 180, 0.5);
    outline: 0;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 2px 4px rgba(29, 161, 242, 0.4);
    outline: 0;
  }
`;

export default () => (
  <SearchForm>
    <SearchInput placeholder="Search Twitter" />
    <SearchButton type="submit">
      <img src={search} alt="search" />
    </SearchButton>
  </SearchForm>
);
