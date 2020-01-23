import React, { useState } from 'react';
import Planets from './components/Planets/Planets';
import NightSky from './components/NightSky/NightSky';
import Logo from './components/Logo/Logo';

const App = () => {

  const [showLogo, setShowLogo] = useState(true);

  const teste = (param) => {
    setShowLogo(param);
  }

  return (
    <div>
      <NightSky />
      {showLogo && <Logo />}
      <Planets teste={teste} />
    </div>
  );
}

export default App;
