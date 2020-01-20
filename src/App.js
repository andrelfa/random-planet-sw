import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Planet from './components/Planet/Planet';
import styled from 'styled-components';

const App = () => {

  const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;   
  `

  const [planets, setPlanets] = useState();
  const [selectedPlanet, setSelectedPlanet] = useState();

  // Como na api temos apenas 61 planetas, resolvi utilizar uma função que pega
  // um número aleatório (até 61) para fazer um request individual para o planeta
  const randomNumberWithMaxNumber = (maxNumber) => {
    let number = Math.ceil(Math.random() * 100);
    if (number > maxNumber) return randomNumberWithMaxNumber(maxNumber);
    return number;
  }
  useEffect(() => {
    const fetchData = async () => {
      const planetsFromApi = await axios(`https://swapi.co/api/planets/`)
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
        .catch(error => console.log("Properly handle your exception here"));

      setPlanets(planetsFromApi);
      setSelectedPlanet(planetsFromApi[randomNumberWithMaxNumber(planetsFromApi.length)]);
    };

    fetchData();

  }, [])

  return (
    <MainContainer>
      {selectedPlanet && <Planet planet={selectedPlanet} />}
    </MainContainer>
  );
}

export default App;
