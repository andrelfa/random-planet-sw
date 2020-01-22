import React from 'react';
import styled from 'styled-components';

const PlanetName = ({name}) => {

  const Name = styled.h1`
    font-size: 40px;
    text-align: center;
    border-bottom: 2px solid #000;
    padding-bottom: 20px;
    color: #d44747;
    text-transform: uppercase;
  `

  return (
    <Name>
      {name}
    </Name>
  )
}

export default PlanetName;