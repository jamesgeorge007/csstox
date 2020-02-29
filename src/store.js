import {createStore} from "effector";
import {changeInput, changeType} from "./events";
import {toJSS, toRN} from "./helpers/transform";

const inputCss =
`
font-size: 18px;
line-height: 24px;
color: red;
`;

export const store = createStore({ outputType: 'JSS', inputCss, outputCss: '' });

store.on(changeInput, (state, payload) => {
    const { outputType } = state;
    return compileCss(outputType, payload);
});

store.on(changeType, (state, payload) => {
    const { inputCss } = state;
    return compileCss(payload, inputCss);
});

store.watch(state => console.log(state));

const compileCss = (outputType, inputCss) => {
    switch (outputType) {
        case 'JSS':
            return { outputType, inputCss, outputCss: toJSS(inputCss)};
        case 'React Native':
            return { outputType, inputCss, outputCss: toRN(inputCss) };
        default:
            return { outputType, inputCss: '', outputCss: '' };
    }
};

changeType('JSS');
