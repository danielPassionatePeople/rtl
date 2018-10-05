import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';
import { path } from 'ramda';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import CarouselItem from './CarouselItem';
import { DETAILS_PAGE } from '../../router/constants';

const getImage = (item) => path(['image', 'original'], item);

const DetailsComponent = ({ item, genres, episodes, onClickEpisode, isEpisode, match }) => (
  <Wrap>
    <Grid>
      {item && <Hero src={getImage(item)} />}
      <Metadata>
        <InnerWrap>
          <Title>{item.name}</Title>
          <Description dangerouslySetInnerHTML={{ __html: item.summary }} />
          {!isEmpty(genres) && (
            <LabelsSection>
              {genres.map((genre) => (
                <Label key={genre}>{genre}</Label>
              ))}
            </LabelsSection>
          )}
          {!isEpisode &&
            episodes && (
              <CarouselWrap>
                <Carousel data={episodes} carouselItem={CarouselItem} onClick={onClickEpisode} />
              </CarouselWrap>
            )}
          {isEpisode && <StyledLink to={`${DETAILS_PAGE}/${match.params.id}`}>Go to show</StyledLink>}
        </InnerWrap>
      </Metadata>
    </Grid>
  </Wrap>
);

DetailsComponent.propTypes = {
  item: PropTypes.object,
  genres: PropTypes.array,
  episodes: PropTypes.array,
  onClickEpisode: PropTypes.func,
  isEpisode: PropTypes.bool,
  match: PropTypes.object,
};

const Wrap = styled.div`
  display: block;
  position: relative;
  height: 100%;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  text-align: left;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`;

const InnerWrap = styled.div`
  padding: 20px;
`;

const CarouselWrap = styled.div`
  margin-top: 30px;
  max-width: 90vw;
`;

const LabelsSection = styled.div`
  display: flex;
  margin: 15px 0;
`;

const Description = styled.article`
  font-size: 14px;
`;

const Label = styled.div`
  padding: 4px 10px;
  border: 1px solid #737373;
  border-radius: 2px;
  margin: 0 5px;
  color: #737373;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default DetailsComponent;
