import React, { useState } from 'react';
import { AppContext } from './context/AppContext';

import { toRN } from './helpers/transform';
import './assets/css/styles.css';
import Header from './components/Header';
import Title from './components/Title';
import Transform from './components/Transform';
import Footer from './components/Footer';

function App() {
  const rawSnippet = "font-size: 18px;\nline-height: 24px;\ncolor: red;";
  const initialState = toRN(rawSnippet);
  const [state, setState] = useState(initialState);
  const [type, setType] = useState("React Native");
  const [currentSnippet, setSnippet] = useState(rawSnippet);

  return (
    <AppContext.Provider
      value={{ state, setState, rawSnippet, currentSnippet, setSnippet, type, setType }}
    >
    <Header />
    <Title />
    <Transform />
    <Footer />
    </AppContext.Provider>
  );
}

export default App;
