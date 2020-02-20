import React, {useContext } from 'react';

import '../assets/css/select.scss';
import { AppContext } from '../context/AppContext';
import { toJSS, toRN } from '../helpers/transform';

const SelectBox = () => {
  const { setState, currentSnippet, setType } = useContext(AppContext);

  const objectify = (type) => {
    setType(type);
    if (type === 'JSS') {
      setState(toJSS(currentSnippet));
    } else {
      setState(toRN(currentSnippet));
    }
  }

  return (
    <select className="select" onChange={(e) => objectify(e.target.value)}>
      <option>React Native</option>
      <option>JSS</option>
    </select>
  );
};

export default SelectBox;
