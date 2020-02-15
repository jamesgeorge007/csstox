import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';
import { toRN } from '../helpers/transform';

const Css = () => {
  const { state, setState, rawSnippet } = useContext(AppContext);

  const objectify = (cssText) => {
    setState(toRN(cssText ? cssText : rawSnippet));
  }

  return (
    <>
      <textarea id="input" placeholder={rawSnippet} onChange={(e) => objectify(e.target.value)}/>
    </>
);

};

export default Css;
