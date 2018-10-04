import { css } from 'styled-components';

export const sizes = {
  fourK: 2560,
  fullHD: 1920,
  bigDesktop: 1440,
  desktop: 1200,
  tablet: 1070,
  tabletPortrait: 768,
  phone: 425,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
