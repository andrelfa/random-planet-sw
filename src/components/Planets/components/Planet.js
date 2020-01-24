import React from 'react';
import PlanetName from './PlanetName';
import PlanetInfo from './PlanetInfo';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #fff;
  width: 7%;
  min-height: 450px;
  border-radius: 5px;
  box-shadow: 0px 0px 16px 1px rgba(255, 255, 255, 0.63);
  opacity: 0;
  transition: opacity 2s ease-out;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;  

  ${planet => planet.children && `
    opacity: 1;
  `};

  @media (min-width: 769px) {
    width: 55%;
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

  return (
    <MainContainer>
      {planet && (
        <>
          <PlanetName name={planet.name}/>
          <PlanetInfo info={pipePlanetData(planet)} />
        </>
      )}
    </MainContainer>
  )
}

export default Planet;