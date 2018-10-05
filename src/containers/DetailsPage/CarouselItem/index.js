import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import Card from '../../../components/Card';
import H1 from '../../../components/H1';

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

const Title = styled(H1)`
  font-size: 20px;
  max-width: 160px; /* TODO This can be done properly */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

export default CarouselItem;
