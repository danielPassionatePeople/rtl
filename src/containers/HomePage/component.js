import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../../components/Card';
import media from '../../styles/media';

const HomePage = ({ shows }) => (
  <Wrap>
    <Grid>
      {shows &&
        shows.map((show) => (
          <StyledCard key={show.id}>
            <Cover src={show.image.original} />
            <Metadata>
              <Title>{show.name}</Title>
            </Metadata>
          </StyledCard>
        ))}
    </Grid>
  </Wrap>
);

HomePage.propTypes = {
  shows: PropTypes.array,
};

const Wrap = styled.div`
  display: block;
  position: relative;
  height: 100%;
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  ${media.tabletPortrait`
   grid-template-columns: repeat(3, 1fr);
   `};
  ${media.tablet`
   grid-template-columns: repeat(4, 1fr);
   `};
`;

const StyledCard = styled(Card)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 2px 2px #ccc;
  text-align: center;
  width: 100%;
  overflow: hidden;
  transition: transform ease 0.2s;

  &:hover {
    transform: translateY(-2%);
    box-shadow: 0 3px 3px #ccc;
  }
`;

const Cover = styled.img`
  max-width: 100%;
  height: 300px;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const Title = styled.h1`
  color: black;
  font-size: 19px;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export default HomePage;
