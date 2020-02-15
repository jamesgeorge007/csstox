import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';
import { toRN } from '../helpers/transform';

const Css = () => {
  const { value, setValue } = useContext(AppContext);

  const objectify = (cssText) => {
    setValue(toRN(cssText));
  }

  return (
    <>
      <textarea id="input" placeholder={value} onChange={(e) => objectify(e.target.value)}/>
    </>
);

};

export default Css;
