import React, { useContext } from 'react';

import './select.scss';
import { Context } from "../../App";

const SelectBox = () => {
    const { outputTypeChanged } = useContext(Context);

  return (
    <select className="select" onChange={ (e) => outputTypeChanged(e.target.value) }>
      <option value={"JSS"}>JSS</option>
      <option value={"React Native"}>React Native</option>
    </select>
  );
};

export default SelectBox;
