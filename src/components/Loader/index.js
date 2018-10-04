/**
 *
 * Loader
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const Loader = ({ color, style = {} }) => (
  <Wrapper style={style}>
    <div className="spinner-container">
      <SpinnerLayer color={color}>
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </SpinnerLayer>
    </div>
  </Wrapper>
);

Loader.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

const SpinnerLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  border-color: ${(props) => props.color || '#009900'};
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
`;
export default Loader;
