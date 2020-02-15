import postcss from 'postcss';
import postcssJs from 'postcss-js';
import transform from 'css-to-react-native';

export const toRN = (cssText) => {
  const root = postcss.parse(cssText);
  const output = postcssJs.objectify(root);
  const candidate = Object.keys(output).map((rules) => {
    return [rules, output[rules]];
  });
  return transform(candidate);
};
