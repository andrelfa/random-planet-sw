import React from 'react';
import PlanetName from './PlanetName';
import PlanetInfo from './PlanetInfo';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #fff;
  width: 75%;
  min-height: 350px;
  border-radius: 20px;
  box-shadow: 0px 0px 16px 3px rgba(255, 255, 255, 0.63);

  @media (min-width: 769px) {
    width: 50%;
  }  
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
      <PlanetName name={planet.name}/>
      <PlanetInfo info={planetInfo} />
    </MainContainer>
  )
}

export default Planet;