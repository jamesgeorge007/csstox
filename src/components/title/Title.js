import React from "react";

// Custom hook to consume the global context
import { useOutputType } from "../../AppContext";

import "./title.scss";

const Title = () => {
  const { outputType } = useOutputType();
  return (
    <table>
      <tbody>
        <tr>
          <th style={{ width: "45%" }}>CSS</th>
          <th style={{ width: "10%", fontSize: "22px" }}>&#8594;</th>
          <th style={{ width: "45%" }} data-testid="output-type">
            {outputType}
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Title;
