import React, { useContext } from 'react';

import '../assets/css/header.scss';
import { AppContext } from '../context/AppContext';
import SelectBox from './SelectBox';

const Header = () => {
  const { type } = useContext(AppContext);
  return (
    <header>
      <div className="header-wrapper">
        <div>
          <h1>
            CSS to &nbsp;
            <SelectBox />
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
