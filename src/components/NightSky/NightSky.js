import React from 'react';
import styled, { keyframes } from 'styled-components';

const NightSky = () => {

  const moveTwinkBack = keyframes`
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}  
  `

  const Stars = styled.div`
    background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
    z-index:0;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;    
  `

  const Twinkling = styled.div`
    background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
    z-index:1;

    -moz-animation:${moveTwinkBack} 200s linear infinite;
    -ms-animation:${moveTwinkBack} 200s linear infinite;
    -o-animation:${moveTwinkBack} 200s linear infinite;
    -webkit-animation:${moveTwinkBack} 200s linear infinite;
    animation:${moveTwinkBack} 200s linear infinite;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;    
  `

  return (
    <div>
      <Stars></Stars>
      <Twinkling></Twinkling>
    </div>
  )
}

export default NightSky;