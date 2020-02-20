import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import Select from './Select';

const Header = () => {
  const { type } = useContext(AppContext);
  return (
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
      </div>
  </header>
);
}

export default Header;
