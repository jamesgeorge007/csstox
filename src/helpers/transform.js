import postcss from 'postcss';
import postcssJs from 'postcss-js';
import transform from 'css-to-react-native';

export const toJSS = (cssText) => {
  const root = postcss.parse(cssText);
  const output = postcssJs.objectify(root);
  return output;
};

export const toRN = (cssText) => {
  return Object.keys(toJSS(cssText)).map((rules) => [rules, output[rules]]);
};
