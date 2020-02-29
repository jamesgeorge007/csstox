import React from 'react';

import './assets/css/global.css';

import Header from './components/header/Header';
import Transform from "./components/transform/Transform";
import Title from "./components/title/Title";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <Title/>
        <Transform/>
      </div>
  );
}

export default App;
