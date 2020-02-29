import postcss from 'postcss';
import postcssJs from 'postcss-js';
import transform from 'css-to-react-native';

export const toJSSObject = (cssText) => {
  try {
    const root = postcss.parse(cssText);
    return postcssJs.objectify(root);
  } catch (e) {
    return 'Error translating CSS';
  }
};

export const toJSS = (cssText) => {
    return JSON.stringify(toJSSObject(cssText), null, 2)
};

export const toRN = (cssText) => {
  try {
    const output = toJSSObject(cssText);
    const result = Object.keys(output).map((rules) => [rules, output[rules]]);
    return JSON.stringify(transform(result), null, 2);
  } catch (e) {
    return 'Error translating CSS';
  }
};
