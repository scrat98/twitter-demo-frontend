import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mediaIcon from './icons/media.svg';
import media1 from './tmpImg/media1.png';
import media2 from './tmpImg/media2.png';
import media3 from './tmpImg/media3.png';
import media4 from './tmpImg/media4.png';
import media5 from './tmpImg/media5.png';
import media6 from './tmpImg/media6.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const AllMediaLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:before {
    background: url(${mediaIcon}) no-repeat center center;
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const MediaWrapper = styled.li`
  display: flex;
  flex-basis: 33.3333%;
  max-width: 33.3333%;
  padding: 0.25rem;
`;

const Media = styled.img`
  width: 83px;
  height: 83px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 black;
`;

export default () => (
  <Wrapper>
    <AllMediaLink to="/EveryInteract/media">522 Photos and videos</AllMediaLink>
    <List>
      <MediaWrapper>
        <Media src={media1} />
      </MediaWrapper>
      <MediaWrapper>
        <Media src={media2} />
      </MediaWrapper>
      <MediaWrapper>
        <Media src={media3} />
      </MediaWrapper>
      <MediaWrapper>
        <Media src={media4} />
      </MediaWrapper>
      <MediaWrapper>
        <Media src={media5} />
      </MediaWrapper>
      <MediaWrapper>
        <Media src={media6} />
      </MediaWrapper>
    </List>
  </Wrapper>
);
