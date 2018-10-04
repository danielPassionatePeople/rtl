import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../../components/Card';

const HomePage = ({ shows }) => (
  <Wrap>
    <Grid>
      {shows &&
        shows.map((show) => (
          <StyledCard key={show.id}>
            <Cover src={show.image.original} />
            <Metadata>
              <Title>{show.name}</Title>
              <Description dangerouslySetInnerHTML={{ __html: show.summary }} />
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
  height: 100%;
  width: 100%;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  flex: 0 0 calc(50% - 60px);
  margin: 20px;
  display: flex;
  box-shadow: 0 2px 2px #ccc;
  text-align: center;
  width: 100%;
  overflow: hidden;
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

const Description = styled.h1`
  color: #333333;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`;

export default HomePage;
