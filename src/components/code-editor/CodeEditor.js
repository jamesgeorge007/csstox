import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "./code-editor.scss";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github";

const CodeEditor = (props) => {
  const {
    placeholder,
    initialValue,
    valueChanged,
    readOnly,
    type,
    title,
    syntaxMode,
    dataTestId,
  } = props;
  const [value, setValue] = useState(initialValue);

  useEffect(() => setValue(initialValue), [initialValue]);

  const handleChange = (value) => {
    setValue(value);
    valueChanged(value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(
      function () {
        console.log("Written to the clipboard");
      },
      function () {
        console.log("Writing to the clipboard failed");
      }
    );
  };

  const uniqueId = type === "input" ? "code--input" : "code--output";

  return (
    <div className={"editor"} data-testid={dataTestId}>
      <div className={"editor_title"}>
        <h2>{title}</h2>
      </div>
      <AceEditor
        mode={syntaxMode}
        theme="github"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        readOnly={readOnly}
        name={uniqueId}
      />
    </div>
  );
};

export default CodeEditor;
