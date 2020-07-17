import React, { useState, useEffect } from "react";

import "./code-editor.scss";

const CodeEditor = (props) => {
  const {
    placeholder,
    initialValue,
    valueChanged,
    readOnly,
    type,
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

  const className = type === "input" ? "code code--input" : "code code--output";

  return (
    <div>
      <textarea
        className={className}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        data-testid={dataTestId}
      />
      <button onClick={copyToClipboard}>Copy to clipboard</button>
    </div>
  );
};

export default CodeEditor;
