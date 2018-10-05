import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import Card from '../../../components/Card';

const CarouselItem = ({ item, onClick }) => (
  <Fragment>
    {item && (
      <StyledCard key={item.id} onClick={onClick}>
        <Cover src={path(['image', 'original'], item)} />
        <Title>{item.name}</Title>
      </StyledCard>
    )}
  </Fragment>
);

CarouselItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
};
const StyledCard = styled(Card)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  text-align: center;
  height: 250px;
  position: relative;
`;

const Cover = styled.img`
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Roboto', sans-serif;
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

export default CarouselItem;
