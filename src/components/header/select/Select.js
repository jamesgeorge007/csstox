import React, { useContext } from "react";

import "./select.scss";
import { Context } from "../../../App";

const SelectBox = () => {
  const { setOutputType } = useContext(Context);

  return (
    <select
      className="select"
      data-testid="select"
      onChange={({ target }) => setOutputType(target.value)}
    >
      <option value="React Native">React Native</option>
      <option value="JSS">JSS</option>
    </select>
  );
};

export default SelectBox;
