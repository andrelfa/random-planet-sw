import React, { useState } from 'react';
import Planets from './components/Planets/Planets';
import NightSky from './components/NightSky/NightSky';
import Logo from './components/Logo/Logo';

const App = () => {

  const [showLogo, setShowLogo] = useState(true);

  const showPlanet = (param) => {
    setShowLogo(param);
  }

  return (
    <div>
      <NightSky />
      {showLogo && <Logo />}
      <Planets show={showPlanet} />
    </div>
  );
}

export default App;
