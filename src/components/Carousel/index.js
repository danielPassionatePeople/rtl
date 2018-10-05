import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { isMobile, isTablet } from 'react-device-detect';
import { SIZES } from '../../styles/media';

const Carousel = ({ data, carouselItem: CarouselItem, onClick }) => (
  <Wrapper className="CarouselSliderWrapper">
    <Slider {...settings}>
      {data.map((item, key) => (
        <CarouselItem key={key} item={item} onClick={() => onClick(item)} />
      ))}
    </Slider>
  </Wrapper>
);

const slidesToShow = [
  1,
  3, // phone
  4, // tablet
  5, // laptop
  6, // big desktop
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: slidesToShow[4],
  useCSS: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    { breakpoint: SIZES.phone, settings: { slidesToShow: slidesToShow[0] } },
    { breakpoint: SIZES.tablet, settings: { slidesToShow: slidesToShow[1] } },
    { breakpoint: SIZES.desktop, settings: { slidesToShow: slidesToShow[2] } },
    { breakpoint: SIZES.bigDesktop, settings: { slidesToShow: slidesToShow[3] } },
  ],
  speed: 200,
  touchThreshold: 20,
  swipe: isMobile || isTablet,
};

Carousel.propTypes = {
  data: PropTypes.array,
  carouselItem: PropTypes.func,
  onClick: PropTypes.func,
};

const Wrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  .slick-slide {
    &:focus {
      outline: none;
    }
    div {
      &:focus {
        outline: none;
      }
    }
  }
`;

export default Carousel;
