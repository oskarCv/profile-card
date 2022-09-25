import React from 'react';
import Profile from "./components/Profile.js";
import background from './assets/image/DarkBlackCarbonFiberMetalLines.jpg'
import './app.scss';

function App() {
  const bgStyle = {
    background:`url(${background})`, backgroundSize:'cover', animation:'backgroundZoomAnimate'
  }
  
  return (
  <div className="main">
    <div className='app' style={bgStyle}>
      <Profile/>
    </div>
  </div>
  );
}

export default App;
