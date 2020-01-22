import React from 'react';
import styled from 'styled-components';

const PlanetInfo = ({info}) => {

  const Text = styled.p`
    font-size: 16px;
    text-align: center;
  `;

  const BoldText = styled.span`
    font-weight: bold;
    margin-top: 0;
    text-transform: capitalize;
    display: block;
    color: #d44747;
  `;  

  const BoldTextNotCapitalized = styled.span`
    font-weight: bold;
    margin-top: 0;
    display: block;
    color: #d44747;
  `;    

  return (
    <div>
      <Text>
        Population: 
        <BoldText>
          {' '}{info.population}
        </BoldText>
      </Text>
      <Text>
        Climate: 
        <BoldText>
          {' '}{info.climate}
        </BoldText>
      </Text>
      <Text>
        Terrain: 
        <BoldText>
          {' '}{info.terrain}
        </BoldText>
      </Text>
      <Text>
        Featured in:
        <BoldTextNotCapitalized>
          {' '}{info.filmsQty} films
        </BoldTextNotCapitalized>
      </Text>
    </div>
  )
}

export default PlanetInfo;