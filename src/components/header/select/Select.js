import React from "react";

// Custom hook to consume the global state
import { useOutputType } from "../../../AppContext";

import "./select.scss";

const SelectBox = () => {
  const { setOutputType } = useOutputType();

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
