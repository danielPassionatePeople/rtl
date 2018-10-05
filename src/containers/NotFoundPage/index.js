import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from '../../router/constants';

const NotFoundPage = () => (
  <Wrap>
    <Title>Content not found</Title>
    <StyledLink to={HOMEPAGE_ROUTE}>Go to home screen</StyledLink>
  </Wrap>
);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default NotFoundPage;
