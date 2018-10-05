import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hero = ({ src }) => (
  <Wrapper>
    <Overlay image={src} />
    <ImageWrapper image={src} />
  </Wrapper>
);

Hero.propTypes = {
  src: PropTypes.string,
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  filter: blur(20px);
  position: absolute;
  background-image: ${({ image }) => `url("${image}")`};
  background-repeat: no-repeat;
  background-size: 100% 359px;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  height: 384px;
  width: 100%;
  display: flex;
  position: relative;
  background-image: ${({ image }) => `url("${image}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  align-content: flex-end;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 56%,
      rgba(0, 0, 0, 0.78) 99%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
  z-index: 5;
`;

export default Hero;
