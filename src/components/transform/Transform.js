import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../App";
import { toJSS, toRN } from "../../helpers/transform";

import "./transform.scss";
import Input from "./input/Input";
import Output from "./output/Output";

const Transform = () => {
  // Global context
  const { outputType } = useContext(Context);

  // Local state
  const initialInputValue = `font-size: 18px;\nline-height: 24px;\ncolor: red;`;
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    if (inputValue === "") {
      setInputValue(initialInputValue);
    }

    switch (outputType) {
      case "JSS":
        setOutputValue(toJSS(inputValue));
        break;
      case "React Native":
        setOutputValue(toRN(inputValue));
        break;
      default:
        setOutputValue("Unknown output type");
    }
  }, [inputValue, outputType]);

  return (
    <table>
      <tbody>
        <tr>
          <td style={{ width: "50%" }}>
            <Input placeholder={inputValue} setInputValue={setInputValue} />
          </td>
          <td style={{ width: "50%" }}>
            <Output value={outputValue} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transform;
