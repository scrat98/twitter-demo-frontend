import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Statistics from './Statistics';
import FollowButton from '../UI/FollowButton';
import moreActionsIcon from './icons/more-actions.svg';

const Background = styled.img`
  display: block;
  width: 100%;
  height: 380px;
  object-fit: cover;
  object-position: top;
`;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
`;

const AvatarWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -30px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: #fff;
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MoreActionsButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  margin-left: 1rem;
`;

export default ({ userId, avatar, background }) => (
  <React.Fragment>
    <Background src={background} alt="Profile Background" />
    <Navigation>
      <Grid>
        <Row middle="xs">
          <Col xs={3}>
            <AvatarWrapper>
              <Avatar src={avatar} alt="Avatar" />
            </AvatarWrapper>
          </Col>
          <Col xs={6}>
            <Statistics userId={userId} />
          </Col>
          <Col xs={3}>
            <ActionsWrapper>
              <FollowButton />
              <MoreActionsButton>
                <img src={moreActionsIcon} alt="more actions" />
              </MoreActionsButton>
            </ActionsWrapper>
          </Col>
        </Row>
      </Grid>
    </Navigation>
  </React.Fragment>
);
