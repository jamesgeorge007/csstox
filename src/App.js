import React from "react";

import "./assets/css/global.css";

import AppContext from "./AppContext";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Transform from "./components/transform/Transform";

function App() {
  return (
    <AppContext>
      <div className="wrapper">
        <Header />
        <Title />
        <Transform />
      </div>
    </AppContext>
  );
}

export default App;
