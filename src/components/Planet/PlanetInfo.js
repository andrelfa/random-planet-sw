import React from 'react';
import styled from 'styled-components';

const PlanetInfo = ({info}) => {
  return (
    <div>
      <p>
        Population: {info.population}
      </p>
      <p>
        Climate: {info.climate}
      </p>
      <p>
        Terrain: {info.terrain}
      </p>
      <p>
        Featured in {info.filmsQty} films
      </p>
    </div>
  )
}

export default PlanetInfo;