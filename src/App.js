import React, { useState } from 'react';
import { AppContext } from './context/AppContext';

import { toJSS } from './helpers/transform';
import './assets/css/styles.css';
import Css from './components/Css';
import RN from './components/RN';
import Select from './components/Select';

function App() {
  const rawSnippet = "font-size: 18px;\nline-height: 24px;\ncolor: red;";
  const initialState = toJSS(rawSnippet);
  const [state, setState] = useState(initialState);
  const [type, setType] = useState("JSS");
  const [currentSnippet, setSnippet] = useState(rawSnippet);

  return (
    <AppContext.Provider
      value={{ state, setState, rawSnippet, currentSnippet, setSnippet, type, setType }}
    >
    <header>
    <div className="intro">
      <div className="title">
        <h1>
        CSS to &nbsp;
        <Select />
        </h1>
        <br />
      </div>
      <div>
        <p>
          Easily convert CSS text to {type} objects
        </p>
        <p>
          &copy; 2020 James George
        </p>
      </div>
      <div>
      </div>
    </div>
  </header>
  <table>
    <tr>
      <th style={{width: '45%'}}>CSS</th>
      <th style={{width: '10%', fontSize: '22px'}}>&#8594;</th>
      <th style={{width: '45%'}}>{type}</th>
    </tr>
  </table>
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
