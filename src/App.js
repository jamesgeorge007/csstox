import React, { useState } from 'react';
import { AppContext } from './context/AppContext';

import { toRN } from './helpers/transform';
import './assets/css/styles.css';
import Header from './components/Header';
import Title from './components/Title';
import Css from './components/Css';
import RN from './components/RN';

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
    <table>
      <tr>
        <td style={{width: '50%'}}>
          <Css />
        </td>
        <td style={{width: '50%'}}>
          <RN />
        </td>
      </tr>
    </table>

    <footer>
      &copy; 2020 James George
    </footer>
    </AppContext.Provider>
  );
}

export default App;
