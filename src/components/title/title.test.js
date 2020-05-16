import React from "react";
import { render, screen } from "@testing-library/react";

import Title from "./Title";
import { Context } from "../../App";

test("should show the output type", () => {
  const contextValue = { outputType: "JSS" };
  render(
    <Context.Provider value={contextValue}>
      <Title />
    </Context.Provider>
  );

  expect(screen.getByTestId("output-type")).toHaveTextContent("JSS");
});
