import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { toJSS, toRN } from '../helpers/transform';

const Css = () => {
  const { setState, rawSnippet, setSnippet, type } = useContext(AppContext);

  const objectify = (cssText) => {
    const input = cssText ? cssText : rawSnippet;
    setSnippet(input);
    if (type === 'JSS') {
      setState(toJSS(input));
    } else {
      setState(toRN(input));
    }
  }

  return (
    <>
      <textarea id="input" placeholder={rawSnippet} onChange={(e) => objectify(e.target.value)}/>
    </>
);

};

export default Css;
