import React from "react";

import "./input.scss";

const Input = (props) => {
  const { placeholder, setInputValue } = props;

  return (
    <textarea
      className={"code code--input"}
      data-testid={"input"}
      onChange={({ target }) => setInputValue(target.value)}
      placeholder={placeholder}
      readOnly={false}
    />
  );
};

export default Input;
