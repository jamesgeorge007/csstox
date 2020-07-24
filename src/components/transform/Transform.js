import React, { useContext } from "react";

import "./transform.scss";
import CodeEditor from "../code-editor/CodeEditor";

import { Context } from "../../App";

const Transform = () => {
  const { outputType, inputCss, outputCss, inputCssChanged } = useContext(
    Context
  );
  const outputSyntaxMode = outputType === "JSX" ? "css" : "javascript";

  return (
    <table>
      <tbody>
        <tr>
          <td style={{ width: "50%" }}>
            <CodeEditor
              placeholder={inputCss}
              initialValue=""
              syntaxMode="css"
              valueChanged={inputCssChanged}
              readOnly={false}
              type="input"
              title="CSS"
              dataTestId="input"
            />
          </td>
          <td style={{ width: "50%" }}>
            <CodeEditor
              type="output"
              initialValue={outputCss}
              syntaxMode={outputSyntaxMode}
              readOnly={true}
              title={outputType}
              dataTestId="output"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transform;
