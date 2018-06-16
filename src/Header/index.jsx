import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Actions from './Actions';
import twitterLogo from './icons/twitter-logo.svg';

const Header = styled.header`
  position: fixed;
  background: #fff;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;

export default () => (
  <Header>
    <Grid>
      <Wrapper>
        <Navigation />
        <LogoWrapper to="/">
          <img src={twitterLogo} alt="twitter logo" />
        </LogoWrapper>
        <Actions />
      </Wrapper>
    </Grid>
  </Header>
);
