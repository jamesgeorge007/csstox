import React, { useState } from 'react';
import { AppContext } from './context/AppContext';

import './assets/css/styles.css';
import Css from './components/Css';
import RN from './components/RN';

function App() {
  const [value, setValue] = useState("Initial Value");

  return (
    <AppContext.Provider
      value={{ value, setValue }}
    >
    <header>
    <div className="intro">
      <div className="title">
        <h1>CSS-to-RN</h1>
        <h2>Convert CSS to RN</h2>
      </div>
      <div>
        <p>
          Easily convert CSS text to React Native objects
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
      <th style={{width: '45%'}}>React Native</th>
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
