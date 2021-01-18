import React, { useState } from "react";

import "./assets/css/global.css";

import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Transform from "./components/transform/Transform";

export const Context = React.createContext(null);

function App() {
  const [outputType, setOutputType] = useState("React Native");

  return (
    <Context.Provider
      value={{
        outputType,
        setOutputType,
      }}
    >
      <div className="wrapper">
        <Header />
        <Title />
        <Transform />
      </div>
    </Context.Provider>
  );
}

export default App;
