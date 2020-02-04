import React, { useContext, useState } from 'react';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import transform from 'css-to-react-native';

import { AppContext } from '../context/AppContext';

const Css = () => {
  const { value, setValue } = useContext(AppContext);
  const [content, setContent] = useState("");

  const objectify = (cssText) => {
    const root = postcss.parse(cssText);
    const output = postcssJs.objectify(root);
    const candidate = Object.keys(output).map((rules) => {
      return [rules, output[rules]];
    });
    setValue(transform(candidate));
  };

  return (
    <>
      <textarea id="input" placeholder={value} onChange={(e) => objectify(e.target.value)}/>
    </>
);

};

export default Css;
