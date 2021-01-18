import React, { useState, useEffect } from "react";

import "./output.scss";

const Output = (props) => {
  const { value } = props;

  const [outputValue, setOutputValue] = useState(value);

  useEffect(() => setOutputValue(value), [value]);

  return (
    <textarea
      className={"code code--output"}
      data-testid={"output"}
      readOnly={true}
      value={outputValue}
    />
  );
};

export default Output;
