import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { randomNumberWithMaxNumber } from '../../utils/utils';
import Planet from './components/Planet';

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

const NextBtn = styled.button`
  margin-top: 20px;
  border: 0;
  background: #fff;
  padding: 10px 50px;
  text-transform: uppercase;
  border-radius: 5px;
  color: #d44747;
  font-weight: bold;
  box-shadow: 0px 0px 16px 1px rgba(255, 255, 255, 0.63);
`

const Planets = ({show}) => {


  const [planets, setPlanets] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {

    const fetchData = () => {
      axios(`https://swapi.co/api/planets/`)
        .then(planets => planets.data.count)
        .then(planetsQty => {
          const numberOfPagesLeft = Math.ceil((planetsQty) / 10);
          let pagesLeftPromises = [];
          for (let i = 1; i <= numberOfPagesLeft; i++) {
            pagesLeftPromises.push(axios(`https://swapi.co/api/planets/?page=${i}`));
          }
          return Promise.all(pagesLeftPromises);
        })
        .then(response => response.map(res => res.data.results).flat())
        .then((response) => {
          setPlanets(response);
          setSelectedPlanet(response[randomNumberWithMaxNumber(response.length - 1)]);
          // setTimeout(() => {
          //   show(false);
          // }, 4000);
          return response;
        })
        .catch(error => console.log("Couldn't fetch the planets", error));
    };

    fetchData();

  }, [show])

  const setNewRandomSelectedPlanet = () => {
    setSelectedPlanet(null);
    setTimeout(() => {
      setSelectedPlanet(planets[randomNumberWithMaxNumber(planets.length - 1)]);
    }, 500);
  }

  return (
      <MainContainer>
        <InnerContainer>
          <Planet planet={selectedPlanet} />
          {planets?.length && (
            <NextBtn onClick={() => setNewRandomSelectedPlanet()}>
              Next
            </NextBtn> 
          )}
        </InnerContainer>
      </MainContainer>
  );
}

export default Planets;
