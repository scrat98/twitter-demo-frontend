import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaIcon from './icons/media.svg';

const media1 = `${process.env.PUBLIC_URL}/img/media1.png`;
const media2 = `${process.env.PUBLIC_URL}/img/media2.png`;
const media3 = `${process.env.PUBLIC_URL}/img/media3.png`;
const media4 = `${process.env.PUBLIC_URL}/img/media4.png`;
const media5 = `${process.env.PUBLIC_URL}/img/media5.png`;
const media6 = `${process.env.PUBLIC_URL}/img/media6.png`;

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
