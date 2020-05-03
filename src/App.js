import React, { useState, useEffect } from "react";

import "./assets/css/global.css";

import Header from "./components/header/Header";
import Transform from "./components/transform/Transform";
import Title from "./components/title/Title";
import { toJSS, toRN } from "./helpers/transform";

const initialInputCss = `font-size: 18px;\nline-height: 24px;\ncolor: red;`;

export const Context = React.createContext(null);

function App() {
  const [outputType, setOutputType] = useState("React Native");
  const [inputCss, setInputCss] = useState(initialInputCss);
  const [outputCss, setOutputCss] = useState("");

  useEffect(() => {
    if (inputCss === "") {
      setInputCss(initialInputCss);
    }

    switch (outputType) {
      case "JSS":
        setOutputCss(toJSS(inputCss));
        break;
      case "React Native":
        setOutputCss(toRN(inputCss));
        break;
      default:
        setOutputCss("Unknown output type");
    }
  }, [inputCss, outputType, setOutputCss]);

  return (
    <Context.Provider
      value={{
        outputType,
        inputCss,
        outputCss,
        outputTypeChanged: setOutputType,
        inputCssChanged: setInputCss,
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
