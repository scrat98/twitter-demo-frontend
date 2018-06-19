import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { getYear } from 'date-fns';

const List = styled.ul`
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #718290;
  font-size: 0.75rem;

  &.active {
    color: #1da1f2;
    text-decoration: underline;
  }

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

export default () => (
  <List>
    <Navigation>
      <Link to="/" exact>
        © {getYear(new Date())} Twitter
      </Link>
    </Navigation>
    <Navigation>
      <Link to="/about" exact>
        About
      </Link>
    </Navigation>
    <Navigation>
      <Link to="/support" exact>
        Help Center
      </Link>
    </Navigation>
    <Navigation>
      <Link to="/terms" exact>
        Terms
      </Link>
    </Navigation>
    <Navigation>
      <Link to="/privacy" exact>
        Privacy policy
      </Link>
    </Navigation>
    <Navigation>
      <Link to="/cookies" exact>
        Cookies
      </Link>
    </Navigation>
    <Navigation>
      <Link to="/advertisement" exact>
        Ads info
      </Link>
    </Navigation>
  </List>
);
