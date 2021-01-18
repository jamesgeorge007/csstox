import React, { useEffect, useState } from "react";

import { toJSS, toRN } from "../../helpers/transform";

// Custom hook to consume the global state
import { useOutputType } from "../../AppContext";

import "./transform.scss";
import Input from "./input/Input";
import Output from "./output/Output";

const Transform = () => {
  // Global state
  const { outputType } = useOutputType();

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
