import React, {useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';
import { toJSS, toRN } from '../helpers/transform';

const Select = () => {
  const { state, setState, currentSnippet, setType } = useContext(AppContext);

  const objectify = (type) => {
    setType(type);
    if (type === 'JSS') {
      setState(toJSS(currentSnippet));
    } else {
      setState(toRN(currentSnippet));
    }
  }

  return (
    <select className="select-css" onChange={(e) => objectify(e.target.value)}>
      <option>JSS</option>
      <option>React Native</option>
    </select>
  );
};

export default Select;
