import React, { useEffect, useState, Suspense, lazy } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { randomNumberWithMaxNumber } from '../../utils/utils';

const Planet = lazy(() => import('./components/Planet'));

const Planets = () => {

  const MainContainer = styled.div`
    display: flex;
  `

  const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;   
    z-index: 9;
  `

  const [planets, setPlanets] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState();

  useEffect(() => {

    const fetchData = async () => {
      await axios(`https://swapi.co/api/planets/`)
        .then((planets) => {
          return planets.data.count;
        })
        .then((planetsQty) => {
          const numberOfPagesLeft = Math.ceil((planetsQty) / 10);
          let pagesLeftPromises = [];
          for (let i = 1; i <= numberOfPagesLeft; i++) {
            pagesLeftPromises.push(axios(`https://swapi.co/api/planets/?page=${i}`));
          }
          return Promise.all(pagesLeftPromises);
        })
        .then((response) => {
            return response.map(res => res.data.results).flat();
        })
        .then((response) => {
          setPlanets(response);
          setSelectedPlanet(response[randomNumberWithMaxNumber(response.length - 1)]);
          return response;
        })
        .catch(error => console.log("Couldn't fetch the planets", error));
    };

    fetchData();

  }, [])

  return (
      <MainContainer>
        <InnerContainer>
          <Suspense fallback={<h1>Loading...</h1>}>
            {selectedPlanet && <Planet planet={selectedPlanet} />}
          </Suspense>
          {planets?.length && (
            <button onClick={() => setSelectedPlanet(planets[randomNumberWithMaxNumber(planets.length - 1)])}>
              Next
            </button> 
          )}
        </InnerContainer>
      </MainContainer>
  );
}

export default Planets;
