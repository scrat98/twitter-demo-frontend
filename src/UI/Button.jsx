import styled from 'styled-components';

export default styled.button`
  width: 100%;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border: 1px solid #4ab3f4;
  background-color: #4ab3f4;
  color: #fff;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: none;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: #1da1f2;
    border-color: #1da1f2;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }

  &:active {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #4ab3f4;
  }
`;
