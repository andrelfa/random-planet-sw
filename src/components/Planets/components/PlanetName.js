import React from 'react';
import styled from 'styled-components';

const PlanetName = ({name}) => {

  const Name = styled.h1`
    font-size: 40px;
    text-align: center;
    color: #d44747;
    text-transform: lowercase;
    font-family: Starjedi;
    letter-spacing: 7px;
  `

  return (
    <Name>
      {name}
    </Name>
  )
}

export default PlanetName;