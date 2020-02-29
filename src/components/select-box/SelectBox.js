import React from 'react';

import './select.scss';
import { changeType } from "../../events";

const SelectBox = () => {
  return (
    <select className="select" onChange={ (e) => changeType(e.target.value) }>
      <option value={"JSS"}>JSS</option>
      <option value={"React Native"}>React Native</option>
    </select>
  );
};

export default SelectBox;
