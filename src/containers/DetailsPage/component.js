import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from '../../components/Hero';

const DetailsComponent = ({ show, genres }) => (
  <Wrap>
    <Grid>
      {show && <Hero src={show.image.original} />}
      <Metadata>
        <Title>{show.name}</Title>
        <Description dangerouslySetInnerHTML={{ __html: show.summary }} />
        {genres && (
          <LabelsSection>
            {genres.map((genre) => (
              <Label key={genre}>{genre}</Label>
            ))}
          </LabelsSection>
        )}
      </Metadata>
    </Grid>
  </Wrap>
);

DetailsComponent.propTypes = {
  show: PropTypes.object,
  genres: PropTypes.array,
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
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
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

export default DetailsComponent;
