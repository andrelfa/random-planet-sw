import React from 'react';
import PlanetTitle from './PlanetTitle';
import PlanetInfo from './PlanetInfo';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #fffff0;
  width: 40%;
`;

const Planet = ({planet}) => {

  const pipePlanetData = (planetData) => {
    return {
      population: planetData.population,
      climate: planetData.climate,
      terrain: planetData.terrain,
      filmsQty: planetData.films.length
    }
  }

  const planetInfo = pipePlanetData(planet);

  return (
    <MainContainer className="planet">
      <PlanetTitle title={planet.name}/>
      <PlanetInfo info={planetInfo} />
    </MainContainer>
  )
}

export default Planet;